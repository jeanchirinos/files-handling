import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { digitacion, observadas } from '../../src/data';

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

  const querySnapshot = await getDocs(collection(db, 'workers'));
  const firebaseData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const digitacionWorkersGroup = firebaseData.find(
    (group) => group.id === 'digitacion'
  );
  const observadasWorkersGroups = firebaseData.filter(
    (group) => group.id !== 'digitacion'
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
    changeSubject: (state) => {
      const { area, subject } = state;
      const { index } = subject;

      if (area === 'digitacion') {
        const { subjects, messageAfterName } = digitacion;

        const newIndex = index === subjects.length - 1 ? 0 : index + 1;

        state.subject = {
          index: newIndex,
          value: subjects[newIndex],
        };

        state.messageAfterName = messageAfterName[newIndex];
      }

      if (area === 'observadas') {
        const { subjects } = observadas;

        const newIndex = index === subjects.length - 1 ? 0 : index + 1;

        state.subject = {
          index: newIndex,
          value: subjects[newIndex],
        };
      }
    },
    resetSubject: (state) => {
      state.subject = {
        index: 0,
        value: digitacion.subjects[0],
      };
    },
    changeWorkers: (state, { payload }) => {
      const parsedObservadasWorkersGroups = JSON.parse(
        localStorage.observadasWorkersGroups
      );

      const newGroup = parsedObservadasWorkersGroups.find(
        ({ leader }) => leader.email === payload
      );

      state.leader = newGroup.leader;
      state.employees = newGroup.employees;
    },

    changeArea: (state, { payload }) => {
      state.area = payload;

      if (payload === 'observadas') {
        const parsedGroup = JSON.parse(localStorage.observadasWorkersGroups);

        state.leader = parsedGroup[0].leader;
        state.employees = parsedGroup[0].employees;

        state.subject = {
          index: 0,
          value: observadas.subjects[0],
        };

        state.messageAfterName = observadas.messageAfterName;
      } else {
        const parsedGroup = JSON.parse(localStorage.digitacionWorkersGroup);

        state.leader = parsedGroup.leader;
        state.employees = parsedGroup.employees;
        state.subject = initialState.subject;

        state.messageAfterName = initialState.messageAfterName;
      }
    },
    setLeader: (state, { payload }) => {
      state.leader = payload;
    },
    setEmployees: (state, { payload }) => {
      state.employees = payload;
    },
  },
  extraReducers: {
    [getWorkers.fulfilled]: (state, { payload }) => {
      !state.leader && (state.leader = payload.leader);
      !state.employees && (state.employees = payload.employees);
    },
  },
});

//* EXPORTS
//? States
const leader = ({ emailTemplate }) => emailTemplate.leader;
const employees = ({ emailTemplate }) => emailTemplate.employees;
const subject = ({ emailTemplate }) => emailTemplate.subject;
const messageAfterName = ({ emailTemplate }) => emailTemplate.messageAfterName;
const area = ({ emailTemplate }) => emailTemplate.area;
export const dataIsBeingFetched = ({ emailTemplate }) =>
  emailTemplate.dataIsBeingFetched;

//? Actions
const {
  changeSubject,
  resetSubject,
  changeWorkers,
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
    __changeWorkers: (payload) => dispatch(changeWorkers(payload)),
    __changeArea: (payload) => dispatch(changeArea(payload)),
    __setLeader: (payload) => dispatch(setLeader(payload)),
    __setEmployees: (payload) => dispatch(setEmployees(payload)),
  };
}
