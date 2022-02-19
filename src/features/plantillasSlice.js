import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  cumulativePlantillas: [],
  emails: [],
  priority: 'order',
};

//* SLICE
const plantillasSlice = createSlice({
  name: 'plantillasSlice',
  initialState,
  reducers: {
    updateCumulativePlantillas: (state, action) => {
      state.cumulativePlantillas = action.payload;
    },
    deleteFromCumulativePlantillas: (state, action) => {
      const indexSelected = state.cumulativePlantillas.findIndex(
        (item) => item.name === action.payload.name
      );

      state.cumulativePlantillas.splice(indexSelected, 1);
    },
    updateEmails: (state, action) => {
      state.emails = action.payload;
    },
    updatePriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

//* EXPORTS
//? States
export const selectCumulativePlantillas = ({ plantillas }) =>
  plantillas.cumulativePlantillas;

export const selectEmails = ({ plantillas }) => plantillas.emails;
export const selectPriority = ({ plantillas }) => plantillas.priority;

//? Actions
export const {
  updateCumulativePlantillas,
  updateEmails,
  deleteFromCumulativePlantillas,
  updatePriority,
} = plantillasSlice.actions;

//? Default
export default plantillasSlice.reducer;
