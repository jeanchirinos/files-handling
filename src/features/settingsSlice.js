import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

//* INITIAL STATE
const initialState = {
  darkTheme: undefined,
  manualMode: false,
};

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
      localStorage.darkTheme = state.darkTheme;
    },
    toggleManualMode: (state) => {
      state.manualMode = !state.manualMode;
    },
  },
});

//* DATA
//? States
const darkTheme = ({ settings }) => settings.darkTheme;
const manualMode = ({ settings }) => settings.manualMode;

//? Actions
export const { getInitialTheme, toggleDarkTheme, toggleManualMode } =
  settingsSlice.actions;

//? Reducer
export const settingsReducer = settingsSlice.reducer;

//* HOOK
export default function useSettings() {
  const dispatch = useDispatch();

  return {
    _manualMode: useSelector(manualMode),
    _darkTheme: useSelector(darkTheme),
    __toggleManualMode: () => dispatch(toggleManualMode()),
    __toggleDarkTheme: () => dispatch(toggleDarkTheme()),
  };
}
