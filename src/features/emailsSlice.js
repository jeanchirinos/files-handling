import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

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
    setEmails: (s, { payload }) => {
      s.emails = payload;
    },
    setPriority: (s, { payload }) => {
      s.priority = payload;
    },
    setCurrentEmailIndex: (s, { payload }) => {
      s.currentEmailIndex = payload;

      const currentEmail = s.emails[payload];

      s.plantillasArray = currentEmail.map(p => p.name);
      s.plantillasToNSTDArray = currentEmail
        .filter(p => p.NSTDNumber)
        .map(p => p.NSTDNumber);
    },
  },
});

//* DATA
//? States
const emails = s => s.emails.emails;
const priority = s => s.emails.priority;
const currentEmailIndex = s => s.emails.currentEmailIndex;
const plantillasToNSTDArray = s => s.emails.plantillasToNSTDArray;
const plantillasArray = s => s.emails.plantillasArray;

//? Actions
const { setEmails, setPriority, setCurrentEmailIndex } = emailsSlice.actions;

//? Reducer
export const emailsReducer = emailsSlice.reducer;

//*HOOK
export default function useEmails() {
  const dispatch = useDispatch();

  return {
    _emails: useSelector(emails),
    _priority: useSelector(priority),
    _currentEmailIndex: useSelector(currentEmailIndex),
    _plantillasToNSTDArray: useSelector(plantillasToNSTDArray),
    _plantillasArray: useSelector(plantillasArray),
    __setEmails: payload => dispatch(setEmails(payload)),
    __setPriority: payload => dispatch(setPriority(payload)),
    __setCurrentEmailIndex: payload => dispatch(setCurrentEmailIndex(payload)),
  };
}
