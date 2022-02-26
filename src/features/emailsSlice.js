import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  emails: [],
  priority: 'order',
  currentEmailIndex: 0,
  currentPlantillas: [],
  arrayOfPlantillas: [],
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
      state.currentPlantillas = state.emails[payload]?.map((email) => email);
      state.arrayOfPlantillas = state.currentPlantillas?.map(
        (plantilla) => plantilla.name
      );
    },
  },
});

//* EXPORTS
//? States
export const emails = ({ emails }) => emails.emails;
export const priority = ({ emails }) => emails.priority;
export const currentEmailIndex = ({ emails }) => emails.currentEmailIndex;
export const currentPlantillas = ({ emails }) => emails.currentPlantillas;
export const arrayOfPlantillas = ({ emails }) => emails.arrayOfPlantillas;

//? Actions
export const { setEmails, setPriority, setCurrentEmailIndex } =
  emailsSlice.actions;

//? Default
export default emailsSlice.reducer;
