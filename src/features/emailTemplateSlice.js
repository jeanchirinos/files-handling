import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  to: { name: 'Teresa', lastName: 'Aznaran' },
  cc: [
    { name: 'Employee', lastName: '1', email: 'EMPLOYEE1@onp.gob.pe' },
    { name: 'Employee', lastName: '2', email: 'EMPLOYEE2@onp.gob.pe' },
    { name: 'Employee', lastName: '3', email: 'EMPLOYEE3@onp.gob.pe' },
  ],
  subjectType: {
    values: ['de campo', 'de campo PRESENCIAL', 'de OAD'],
    index: 0,
    selectedValue: 'de campo',
  },
};

//* SLICE
const emailTemplateSlice = createSlice({
  name: 'emailTemplateSlice',
  initialState,
  reducers: {
    changeSubjectType: (state) => {
      const index =
        state.subjectType.index === state.subjectType.values.length - 1
          ? 0
          : state.subjectType.index + 1;

      state.subjectType.index = index;
      state.subjectType.selectedValue = state.subjectType.values[index];
    },
  },
});

//* EXPORTS
//? States
export const to = ({ emailTemplate }) => emailTemplate.to;
export const cc = ({ emailTemplate }) => emailTemplate.cc;
export const subjectType = ({ emailTemplate }) => emailTemplate.subjectType;

//? Actions
export const { changeSubjectType } = emailTemplateSlice.actions;

//? Default
export default emailTemplateSlice.reducer;
