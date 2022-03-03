import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  plantillasStack: [],
};

//* SLICE
const plantillasSlice = createSlice({
  name: 'plantillasSlice',
  initialState,
  reducers: {
    addToPlantillasStack: (state, { payload }) => {
      state.plantillasStack.push(...payload);
    },
    resetPlantillasStack: (state) => {
      state.plantillasStack = [];
    },
    deleteFromStack: (state, { payload }) => {
      const indexToDelete = state.plantillasStack.findIndex(
        (p) => p.name === payload
      );

      state.plantillasStack.splice(indexToDelete, 1);
    },
  },
});

//* EXPORTS
//? States
export const plantillasStack = ({ plantillas }) => plantillas.plantillasStack;

//? Actions
export const { addToPlantillasStack, resetPlantillasStack, deleteFromStack } =
  plantillasSlice.actions;

//? Default
export default plantillasSlice.reducer;
