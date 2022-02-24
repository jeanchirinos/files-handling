import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  emails: [],
  priority: 'order',
  currentPlantillas: [],
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
    setCurrentPlantillas: (state, { payload }) => {
      state.currentPlantillas = state.emails[payload]?.map((email) => email);
    },
  },
});

//* EXPORTS
//? States
export const emails = ({ emails }) => emails.emails;
export const priority = ({ emails }) => emails.priority;
export const currentPlantillas = ({ emails }) => emails.currentPlantillas;

//? Actions
export const { setEmails, setPriority, setCurrentPlantillas } =
  emailsSlice.actions;

//? Default
export default emailsSlice.reducer;
