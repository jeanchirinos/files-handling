import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    changeSubjectType: (state, { payload }) => {
      const { subjectType } = state;
      const { index, values } = subjectType;

      let newIndex;

      if (payload === 0) {
        newIndex = payload;
      } else {
        newIndex = index === values.length - 1 ? 0 : index + 1;
      }

      state.subjectType.index = newIndex;
      state.subjectType.selectedValue = values[newIndex];
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
      state.workers_digitacion = [...payload];
    },
    setWorkers_observadas: (state, { payload }) => {
      state.workers_observadas = [...payload];
    },
  },
  extraReducers: {
    [getWorkers.fulfilled]: (state, { payload }) => {
      const initialLeader = payload.find((worker) => worker.isLeader);
      const initialEmployees = payload.filter((worker) => !worker.isLeader);

      state.leader = initialLeader;
      state.employees = initialEmployees;

      state.workers_digitacion.leader = initialLeader;
      state.workers_digitacion.employees = initialEmployees;
    },
    [getObservadasWorkers.fulfilled]: (state, { payload }) => {
      state.workers_observadas = payload;
    },
  },
});

//* EXPORTS
//? States
export const leader = ({ emailTemplate }) => emailTemplate.leader;
export const employees = ({ emailTemplate }) => emailTemplate.employees;
export const subjectType = ({ emailTemplate }) => emailTemplate.subjectType;
export const workers_observadas = ({ emailTemplate }) =>
  emailTemplate.workers_observadas;
export const area = ({ emailTemplate }) => emailTemplate.area;

//? Actions
export const {
  changeSubjectType,
  changeWorkers,
  changeArea,
  setWorkers_digitacion,
  setWorkers_observadas,
} = emailTemplateSlice.actions;

//? Default
export default emailTemplateSlice.reducer;
