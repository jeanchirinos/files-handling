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
    addToPlantillasStack: (s, { payload }) => {
      s.plantillasStack.push(...payload);
    },
    resetPlantillasStack: s => {
      s.plantillasStack = [];
    },
    deleteFromStack: ({ plantillasStack }, { payload }) => {
      const indexToDelete = plantillasStack.findIndex(p => p.name === payload);

      plantillasStack.splice(indexToDelete, 1);
    },
  },
});

//* DATA
//? States
const plantillasStack = s => s.plantillas.plantillasStack;

//? Actions
const { addToPlantillasStack, resetPlantillasStack, deleteFromStack } =
  plantillasSlice.actions;

//? Reducer
export const plantillasReducer = plantillasSlice.reducer;

//* HOOK
export default function usePlantillas() {
  const dispatch = useDispatch();

  return {
    _plantillasStack: useSelector(plantillasStack),
    __addToPlantillasStack: payload => dispatch(addToPlantillasStack(payload)),
    __resetPlantillasStack: () => dispatch(resetPlantillasStack()),
    __deleteFromStack: payload => dispatch(deleteFromStack(payload)),
  };
}
