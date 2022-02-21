import { useSelector, useDispatch } from 'react-redux';
import {
  darkTheme,
  manualMode,
  toggleDarkTheme,
  toggleManualMode,
} from '../features/settingsSlice';

export default function useSettings() {
  const dispatch = useDispatch();

  // STATES
  const _darkTheme = useSelector(darkTheme);
  const _manualMode = useSelector(manualMode);

  // ACTIONS
  function __toggleDarkTheme() {
    dispatch(toggleDarkTheme());
  }

  function __toggleManualMode() {
    dispatch(toggleManualMode());
  }

  // EXPORT
  return {
    _darkTheme,
    _manualMode,
    __toggleDarkTheme,
    __toggleManualMode,
  };
}
