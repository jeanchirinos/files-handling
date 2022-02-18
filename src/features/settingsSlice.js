import { createSlice } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  darkTheme: true,
  manualMode: false,
};

//* SLICE
const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    updateDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    updateManualMode: (state) => {
      state.manualMode = !state.manualMode;
    },
  },
});

//* EXPORTS
//? States
export const selectDarkTheme = ({ settings }) => settings.darkTheme;
export const selectManualMode = ({ settings }) => settings.manualMode;

//? Actions
export const { updateDarkTheme, updateManualMode } = settingsSlice.actions;

//? Default
export default settingsSlice.reducer;
