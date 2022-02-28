import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';

//* INITIAL STATE
const initialState = {
  workers: {
    leader: undefined,
    employees: undefined,
  },
  subjectType: {
    values: ['de campo', 'de campo PRESENCIAL', 'de OAD'],
    index: 0,
    selectedValue: 'de campo',
  },
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

//* SLICE
const emailTemplateSlice = createSlice({
  name: 'emailTemplateSlice',
  initialState,
  reducers: {
    changeSubjectType: (state) => {
      const { subjectType } = state;
      const { index, values } = subjectType;

      const newIndex = index === values.length - 1 ? 0 : index + 1;

      state.subjectType.index = newIndex;
      state.subjectType.selectedValue = values[newIndex];
    },
  },
  extraReducers: {
    [getWorkers.fulfilled]: (state, { payload }) => {
      state.leader = payload.find((worker) => worker.isLeader);
      state.employees = payload.filter((worker) => !worker.isLeader);
    },
  },
});

//* EXPORTS
//? States
export const leader = ({ emailTemplate }) => emailTemplate.leader;
export const employees = ({ emailTemplate }) => emailTemplate.employees;
export const subjectType = ({ emailTemplate }) => emailTemplate.subjectType;

//? Actions
export const { changeSubjectType } = emailTemplateSlice.actions;

//? Default
export default emailTemplateSlice.reducer;
