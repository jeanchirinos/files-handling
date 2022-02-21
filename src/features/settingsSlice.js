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
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    toggleManualMode: (state) => {
      state.manualMode = !state.manualMode;
    },
  },
});

//* EXPORTS
//? States
export const darkTheme = ({ settings }) => settings.darkTheme;
export const manualMode = ({ settings }) => settings.manualMode;

//? Actions
export const { toggleDarkTheme, toggleManualMode } = settingsSlice.actions;

//? Default
export default settingsSlice.reducer;
