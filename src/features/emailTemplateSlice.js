import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';

//* INITIAL STATE
const initialState = {
  leader: undefined,
  employees: undefined,
  workers_digitacion: {
    leader: undefined,
    employees: undefined,
  },
  workers_observadas: [],
  subjectType: {
    values: ['de campo', 'de campo PRESENCIAL', 'de OAD'],
    index: 0,
    selectedValue: 'de campo',
  },
  area: 'digitacion',
};

export const getWorkers = createAsyncThunk('getWorkers', async () => {
  if (!localStorage.workers) {
    const querySnapshot = await getDocs(collection(db, 'employees'));
    const firebaseData = querySnapshot.docs.map((doc) => doc.data());

    localStorage.workers = JSON.stringify(firebaseData);

    return firebaseData;
  }

  return JSON.parse(localStorage.workers);
});

export const getObservadasWorkers = createAsyncThunk(
  'getObservadasWorkers',
  async () => {
    if (!localStorage.observadasWorkers) {
      const querySnapshot = await getDocs(collection(db, 'workers_observadas'));
      const firebaseData = querySnapshot.docs.map((doc) => doc.data());

      localStorage.observadasWorkers = JSON.stringify(firebaseData);

      return firebaseData;
    }

    return JSON.parse(localStorage.observadasWorkers);
  }
);

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
      const newLeader = state.workers_observadas.find(
        (worker) => worker.leader.email === payload
      );

      state.leader = newLeader.leader;
      state.employees = newLeader.employees;
    },

    changeArea: (state, { payload }) => {
      state.area = payload;

      if (payload === 'observadas') {
        state.leader = state.workers_observadas[0].leader;
        state.employees = state.workers_observadas[0].employees;

        state.subjectType.values = [
          'Plantillas observadas de campo',
          'Plantillas observadas de campo PRESENCIAL',
          'Plantillas para verificar',
        ];
        state.subjectType.index = 0;
        state.subjectType.selectedValue = 'Plantillas observadas de campo';
      } else {
        state.leader = state.workers_digitacion.leader;
        state.employees = state.workers_digitacion.employees;
        state.subjectType.values = [
          'de campo',
          'de campo PRESENCIAL',
          'de OAD',
        ];
        state.subjectType.index = 0;
        state.subjectType.selectedValue = 'de campo';
      }
    },

    setWorkers_digitacion: (state, { payload }) => {
      const leader = payload.find((worker) => worker.isLeader);
      const employees = payload.filter((worker) => !worker.isLeader);

      Object.assign(state.workers_digitacion, {
        leader,
        employees,
      });
    },
    setWorkers_observadas: (state, { payload }) => {
      state.workers_observadas = payload;
    },
  },
  extraReducers: {
    [getWorkers.fulfilled]: (state, { payload }) => {
      const leader = payload.find((worker) => worker.isLeader);
      const employees = payload.filter((worker) => !worker.isLeader);

      Object.assign(state, {
        leader,
        employees,
      });

      Object.assign(state.workers_digitacion, {
        leader,
        employees,
      });
    },
    [getObservadasWorkers.fulfilled]: (state, { payload }) => {
      state.workers_observadas = payload;
    },
  },
});

//* EXPORTS
//? States
const leader = ({ emailTemplate }) => emailTemplate.leader;
const employees = ({ emailTemplate }) => emailTemplate.employees;
const subjectType = ({ emailTemplate }) => emailTemplate.subjectType;
const workers_observadas = ({ emailTemplate }) =>
  emailTemplate.workers_observadas;
const area = ({ emailTemplate }) => emailTemplate.area;

//? Actions
const {
  changeSubjectType,
  resetSubjectType,
  changeWorkers,
  changeArea,
  setWorkers_digitacion,
  setWorkers_observadas,
} = emailTemplateSlice.actions;

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
    _workers_observadas: useSelector(workers_observadas),
    __changeSubjectType: () => dispatch(changeSubjectType()),
    __resetSubjectType: () => dispatch(resetSubjectType()),
    __changeWorkers: (payload) => dispatch(changeWorkers(payload)),
    __changeArea: (payload) => dispatch(changeArea(payload)),
    __setWorkers_digitacion: (payload) =>
      dispatch(setWorkers_digitacion(payload)),
    __setWorkers_observadas: (payload) =>
      dispatch(setWorkers_observadas(payload)),
  };
}
