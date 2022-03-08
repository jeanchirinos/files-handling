import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';

//* INITIAL STATE
const initialState = {
  leader: undefined,
  employees: undefined,
  subjectType: {
    values: ['de campo', 'de campo PRESENCIAL', 'de OAD'],
    index: 0,
    selectedValue: 'de campo',
  },
  area: 'digitacion',
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
    changeSubjectType: (state) => {
      const { index, values } = state.subjectType;

      const newIndex = index === values.length - 1 ? 0 : index + 1;

      state.subjectType.index = newIndex;
      state.subjectType.selectedValue = values[newIndex];
    },
    resetSubjectType: (state) => {
      const { values } = state.subjectType;

      state.subjectType.index = 0;
      state.subjectType.selectedValue = values[0];
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

        state.subjectType = {
          values: [
            'Plantillas observadas de campo',
            'Plantillas observadas de campo PRESENCIAL',
            'Plantillas para verificar',
          ],
          index: 0,
          selectedValue: 'Plantillas observadas de campo',
        };
      } else {
        const parsedGroup = JSON.parse(localStorage.digitacionWorkersGroup);

        state.leader = parsedGroup.leader;
        state.employees = parsedGroup.employees;
        state.subjectType = initialState.subjectType;
      }
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
const subjectType = ({ emailTemplate }) => emailTemplate.subjectType;
const area = ({ emailTemplate }) => emailTemplate.area;

//? Actions
const { changeSubjectType, resetSubjectType, changeWorkers, changeArea } =
  emailTemplateSlice.actions;

//? Reducer
export const emailTemplateReducer = emailTemplateSlice.reducer;

//* HOOK
export default function useEmailTemplate() {
  const dispatch = useDispatch();

  return {
    _leader: useSelector(leader),
    _employees: useSelector(employees),
    _subjectType: useSelector(subjectType),
    _area: useSelector(area),
    __changeSubjectType: () => dispatch(changeSubjectType()),
    __resetSubjectType: () => dispatch(resetSubjectType()),
    __changeWorkers: (payload) => dispatch(changeWorkers(payload)),
    __changeArea: (payload) => dispatch(changeArea(payload)),
  };
}
