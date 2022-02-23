import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  plantillasStack: [],
  emails: [],
  priority: 'order',
  currentEmailIndex: 0,
};

//* SLICE
const plantillasSlice = createSlice({
  name: 'plantillasSlice',
  initialState,
  reducers: {
    setPlantillasStack: (state, { payload }) => {
      state.plantillasStack = payload;
    },
    deleteFromStack: (state, { payload }) => {
      const indexToDelete = state.plantillasStack.findIndex(
        (item) => item.name === payload
      );

      state.plantillasStack.splice(indexToDelete, 1);
    },
    setEmails: (state, { payload }) => {
      state.emails = payload;
    },
    setPriority: (state, { payload }) => {
      state.priority = payload;
    },
    setCurrentEmailIndex: (state, { payload }) => {
      state.currentEmailIndex = payload;
    },
  },
});

//* EXPORTS
//? States

export const plantillasStack = ({ plantillas }) => plantillas.plantillasStack;
export const emails = ({ plantillas }) => plantillas.emails;
export const priority = ({ plantillas }) => plantillas.priority;
export const currentEmailIndex = ({ plantillas }) =>
  plantillas.currentEmailIndex;

//? Actions
export const {
  setPlantillasStack,
  setEmails,
  deleteFromStack,
  setPriority,
  setCurrentEmailIndex,
} = plantillasSlice.actions;

//? Default
export default plantillasSlice.reducer;
