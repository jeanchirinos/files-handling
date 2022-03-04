import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

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

//* DATA
//? States
const plantillasStack = ({ plantillas }) => plantillas.plantillasStack;

//? Actions
const { addToPlantillasStack, resetPlantillasStack, deleteFromStack } =
  plantillasSlice.actions;

//? Reducer
export const plantillasReducer = plantillasSlice.reducer;

//* HOOOK
export default function usePlantillas() {
  const dispatch = useDispatch();

  return {
    _plantillasStack: useSelector(plantillasStack),
    __addToPlantillasStack: (payload) =>
      dispatch(addToPlantillasStack(payload)),
    __resetPlantillasStack: () => dispatch(resetPlantillasStack()),
    __deleteFromStack: (payload) => dispatch(deleteFromStack(payload)),
  };
}
