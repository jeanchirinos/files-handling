import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  plantillasStack: [],
  emails: [],
  priority: 'order',
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
        (item) => item.name === payload.name
      );

      state.plantillasStack.splice(indexToDelete, 1);
    },
    setEmails: (state, { payload }) => {
      state.emails = payload;
    },
    setPriority: (state, { payload }) => {
      state.priority = payload;
    },
  },
});

//* EXPORTS
//? States

export const plantillasStack = ({ plantillas }) => plantillas.plantillasStack;
export const emails = ({ plantillas }) => plantillas.emails;
export const priority = ({ plantillas }) => plantillas.priority;

//? Actions
export const { setPlantillasStack, setEmails, deleteFromStack, setPriority } =
  plantillasSlice.actions;

//? Default
export default plantillasSlice.reducer;
