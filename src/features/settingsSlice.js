import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//* INITIAL STATE
const initialState = {
  darkTheme: undefined,
  manualMode: false,
};

// export const getInitialTheme = createAsyncThunk('getInitialTheme', async () => {
//   if (localStorage.darkTheme) {
//     return JSON.parse(localStorage.darkTheme);
//   } else {
//     localStorage.darkTheme = true;
//     return true;
//   }
// });

//* SLICE
const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    getInitialTheme: (state) => {
      if (localStorage.darkTheme) {
        state.darkTheme = JSON.parse(localStorage.darkTheme);
      } else {
        state.darkTheme = true;
        localStorage.darkTheme = true;
      }
    },
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.darkTheme = JSON.stringify(state.darkTheme);
    },
    toggleManualMode: (state) => {
      state.manualMode = !state.manualMode;
    },
  },
  // extraReducers: {
  //   [getInitialTheme.fulfilled]: (state, { payload }) => {
  //     state.darkTheme = payload;
  //   },
  // },
});

//* EXPORTS
//? States
export const darkTheme = ({ settings }) => settings.darkTheme;
export const manualMode = ({ settings }) => settings.manualMode;

//? Actions
export const { toggleDarkTheme, toggleManualMode, getInitialTheme } =
  settingsSlice.actions;
// export const { toggleDarkTheme, toggleManualMode } = settingsSlice.actions;

//? Default
export default settingsSlice.reducer;
