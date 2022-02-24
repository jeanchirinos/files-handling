import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  to: { name: 'Name', lastName: 'Last Name' },
  cc: 'Cc',
  subjectType: 'Content to change',
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
