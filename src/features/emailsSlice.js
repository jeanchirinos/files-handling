import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  emails: [],
  priority: 'order',
  currentEmailIndex: 0,
  plantillasToNSTD: [],
  arrayOfPlantillas: [],
  arrayOfPlantillasToNSTD: [],
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

      const currentPlantillas = state.emails[payload]?.map((email) => email);

      state.plantillasToNSTD = currentPlantillas
        .filter((p) => p.NSTDNumber)
        .map((p) => p.NSTDNumber);
      state.arrayOfPlantillas = currentPlantillas.map((p) => p.name);
    },
  },
});

//* EXPORTS
//? States
export const emails = ({ emails }) => emails.emails;
export const priority = ({ emails }) => emails.priority;
export const currentEmailIndex = ({ emails }) => emails.currentEmailIndex;
export const plantillasToNSTD = ({ emails }) => emails.plantillasToNSTD;
export const arrayOfPlantillas = ({ emails }) => emails.arrayOfPlantillas;

//? Actions
export const { setEmails, setPriority, setCurrentEmailIndex } =
  emailsSlice.actions;

//? Default
export default emailsSlice.reducer;
