import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { digitacion, observadas } from '../../src/data';
import {
  digitacionWorkersGroupBackUp,
  observadasWorkersGroupsBackUp,
} from 'src/backupData';

//* INITIAL STATE
const initialState = {
  leader: undefined,
  employees: undefined,
  subject: {
    index: 0,
    value: digitacion.subjects[0],
  },
  messageAfterName: digitacion.messageAfterName[0],
  area: 'digitacion',
  dataIsBeingFetched: false,
};

export const getWorkers = createAsyncThunk('getWorkers', async () => {
  if (
    localStorage.digitacionWorkersGroup &&
    localStorage.observadasWorkersGroups
  ) {
    return JSON.parse(localStorage.digitacionWorkersGroup);
  }

  const collectionRef = collection(db, 'workers');
  const querySnapshot = await getDocs(collectionRef);
  const firebaseData = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  const digitacionWorkersGroup = firebaseData.find(
    group => group.id === 'digitacion'
  );
  const observadasWorkersGroups = firebaseData.filter(
    group => group.id !== 'digitacion'
  );

  localStorage.digitacionWorkersGroup = JSON.stringify(digitacionWorkersGroup);
  localStorage.observadasWorkersGroups = JSON.stringify(
    observadasWorkersGroups
  );

  return digitacionWorkersGroup;
});

//* SLICE
const emailTemplateSlice = createSlice({
  name: 'emailTemplateSlice',
  initialState,
  reducers: {
    changeSubject: s => {
      const { area, subject } = s;
      const { index } = subject;

      if (area === 'digitacion') {
        const { subjects, messageAfterName } = digitacion;

        const newIndex = index === subjects.length - 1 ? 0 : index + 1;

        s.subject = {
          index: newIndex,
          value: subjects[newIndex],
        };

        s.messageAfterName = messageAfterName[newIndex];
      }

      if (area === 'observadas') {
        const { subjects } = observadas;

        const newIndex = index === subjects.length - 1 ? 0 : index + 1;

        s.subject = {
          index: newIndex,
          value: subjects[newIndex],
        };
      }
    },
    resetSubject: s => {
      s.subject = initialState.subject;
    },
    changeObservadasWorkers: (s, { payload }) => {
      const parsedObservadasWorkersGroups = JSON.parse(
        localStorage.observadasWorkersGroups
      );

      const newGroup = parsedObservadasWorkersGroups.find(
        group => group.leader.email === payload
      );

      s.leader = newGroup.leader;
      s.employees = newGroup.employees;
    },

    changeArea: (s, { payload }) => {
      s.area = payload;

      if (payload === 'observadas') {
        const parsedGroup = JSON.parse(localStorage.observadasWorkersGroups);

        s.leader = parsedGroup[0].leader;
        s.employees = parsedGroup[0].employees;

        s.subject = initialState.subject;

        s.messageAfterName = observadas.messageAfterName;
      } else {
        const parsedGroup = JSON.parse(localStorage.digitacionWorkersGroup);

        s.leader = parsedGroup.leader;
        s.employees = parsedGroup.employees;
        s.subject = initialState.subject;

        s.messageAfterName = initialState.messageAfterName;
      }
    },
    setLeader: (s, { payload }) => {
      s.leader = payload;
    },
    setEmployees: (s, { payload }) => {
      s.employees = payload;
    },
  },
  extraReducers: {
    [getWorkers.fulfilled]: (s, { payload }) => {
      const { leader, employees } = payload;

      !s.leader && (s.leader = leader);
      !s.employees && (s.employees = employees);
    },
    [getWorkers.rejected]: s => {
      const { leader, employees } = digitacionWorkersGroupBackUp;

      s.leader = leader;
      s.employees = employees;

      localStorage.digitacionWorkersGroup = JSON.stringify(
        digitacionWorkersGroupBackUp
      );
      localStorage.observadasWorkersGroups = JSON.stringify(
        observadasWorkersGroupsBackUp
      );
    },
  },
});

//* EXPORTS
//? States
const leader = s => s.emailTemplate.leader;
const employees = s => s.emailTemplate.employees;
const subject = s => s.emailTemplate.subject;
const messageAfterName = s => s.emailTemplate.messageAfterName;
const area = s => s.emailTemplate.area;

//? Actions
const {
  changeSubject,
  resetSubject,
  changeObservadasWorkers,
  changeArea,
  setLeader,
  setEmployees,
} = emailTemplateSlice.actions;

//? Reducer
export const emailTemplateReducer = emailTemplateSlice.reducer;

//* HOOK
export default function useEmailTemplate() {
  const dispatch = useDispatch();

  return {
    _leader: useSelector(leader),
    _employees: useSelector(employees),
    _subject: useSelector(subject),
    _messageAfterName: useSelector(messageAfterName),
    _area: useSelector(area),
    __changeSubject: () => dispatch(changeSubject()),
    __resetSubject: () => dispatch(resetSubject()),
    __changeObservadasWorkers: payload =>
      dispatch(changeObservadasWorkers(payload)),
    __changeArea: payload => dispatch(changeArea(payload)),
    __setLeader: payload => dispatch(setLeader(payload)),
    __setEmployees: payload => dispatch(setEmployees(payload)),
  };
}
