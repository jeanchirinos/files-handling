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
    getInitialTheme: s => {
      if (!localStorage.darkTheme) {
        s.darkTheme = true;
        localStorage.darkTheme = true;
        return;
      }

      s.darkTheme = JSON.parse(localStorage.darkTheme);
    },
    toggleDarkTheme: s => {
      s.darkTheme = !s.darkTheme;
      localStorage.darkTheme = s.darkTheme;
    },
    toggleManualMode: s => {
      s.manualMode = !s.manualMode;
    },
  },
});

//* DATA
//? States
const darkTheme = s => s.settings.darkTheme;
const manualMode = s => s.settings.manualMode;

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
