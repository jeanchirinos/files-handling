import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  cumulativePlantillasHasItems: true,
};

//* SLICE
const plantillasSlice = createSlice({
  name: 'plantillasSlice',
  initialState,
  reducers: {
    updateCumulativePlantillasHasItems: (state, action) => {
      state.cumulativePlantillasHasItems = action.payload;
    },
  },
});

//* EXPORTS
//? States
export const selectCumulativePlantillasHasItems = ({ plantillas }) =>
  plantillas.cumulativePlantillasHasItems;

//? Actions
export const { updateCumulativePlantillasHasItems } = plantillasSlice.actions;

//? Default
export default plantillasSlice.reducer;
