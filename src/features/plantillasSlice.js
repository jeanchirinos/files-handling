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
    setPlantillasStack: (state, { payload }) => {
      state.plantillasStack = payload;
    },
    deleteFromStack: (state, { payload }) => {
      const indexToDelete = state.plantillasStack.findIndex(
        (item) => item.name === payload
      );

      state.plantillasStack.splice(indexToDelete, 1);
    },
  },
});

//* EXPORTS
//? States

export const plantillasStack = ({ plantillas }) => plantillas.plantillasStack;

//? Actions
export const { setPlantillasStack, deleteFromStack } = plantillasSlice.actions;

//? Default
export default plantillasSlice.reducer;
