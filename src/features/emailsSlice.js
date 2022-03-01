import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  emails: [],
  priority: 'order',
  currentEmailIndex: 0,
  plantillasArray: [],
  plantillasToNSTDArray: [],
};

//* SLICE
const emailsSlice = createSlice({
  name: 'emailsSlice',
  initialState,
  reducers: {
    setEmails: (state, { payload }) => {
      state.emails = payload;
    },
    setPriority: (state, { payload }) => {
      state.priority = payload;
    },
    setCurrentEmailIndex: (state, { payload }) => {
      state.currentEmailIndex = payload;

      const currentEmail = state.emails[payload]?.map((e) => e);

      state.plantillasArray = currentEmail.map((p) => p.name);
      state.plantillasToNSTDArray = currentEmail
        .filter((p) => p.NSTDNumber)
        .map((p) => p.NSTDNumber);
    },
  },
});

//* EXPORTS
//? States
export const emails = ({ emails }) => emails.emails;
export const priority = ({ emails }) => emails.priority;
export const currentEmailIndex = ({ emails }) => emails.currentEmailIndex;
export const plantillasToNSTDArray = ({ emails }) =>
  emails.plantillasToNSTDArray;
export const plantillasArray = ({ emails }) => emails.plantillasArray;

//? Actions
export const { setEmails, setPriority, setCurrentEmailIndex } =
  emailsSlice.actions;

//? Default
export default emailsSlice.reducer;
