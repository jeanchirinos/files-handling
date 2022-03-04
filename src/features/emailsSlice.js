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

//* DATA
//? States
const emails = ({ emails }) => emails.emails;
const priority = ({ emails }) => emails.priority;
const currentEmailIndex = ({ emails }) => emails.currentEmailIndex;
const plantillasToNSTDArray = ({ emails }) => emails.plantillasToNSTDArray;
const plantillasArray = ({ emails }) => emails.plantillasArray;

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
    __setEmails: (payload) => dispatch(setEmails(payload)),
    __setPriority: (payload) => dispatch(setPriority(payload)),
    __setCurrentEmailIndex: (payload) =>
      dispatch(setCurrentEmailIndex(payload)),
  };
}
