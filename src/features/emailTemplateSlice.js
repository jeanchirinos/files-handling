import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  to: { name: 'Teresa', lastName: 'Aznaran' },
  cc: [
    { name: 'Employee', lastName: '1', email: 'EMPLOYEE1@onp.gob.pe' },
    { name: 'Employee', lastName: '2', email: 'EMPLOYEE2@onp.gob.pe' },
    { name: 'Employee', lastName: '3', email: 'EMPLOYEE3@onp.gob.pe' },
  ],
  subjectType: ['de campo', 'de campo PRESENCIAL', 'de OAD'],
};

//* SLICE
const emailTemplateSlice = createSlice({
  name: 'emailTemplateSlice',
  initialState,
  reducers: {
    setSubjectType: (state, { payload }) => {
      state.subjectType = payload;
    },
  },
});

//* EXPORTS
//? States
export const to = ({ emailTemplate }) => emailTemplate.to;
export const cc = ({ emailTemplate }) => emailTemplate.cc;
export const subjectType = ({ emailTemplate }) => emailTemplate.subjectType;

//? Actions
export const { setSubjectType } = emailTemplateSlice.actions;

//? Default
export default emailTemplateSlice.reducer;
