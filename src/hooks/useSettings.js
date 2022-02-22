import { useSelector, useDispatch } from 'react-redux';
import {
  darkTheme,
  manualMode,
  toggleDarkTheme,
  toggleManualMode,
} from '../features/settingsSlice';

export default function useSettings() {
  const dispatch = useDispatch();

  const settingsHook = {
    _manualMode: useSelector(manualMode),
    _darkTheme: useSelector(darkTheme),
    __toggleManualMode: () => dispatch(toggleManualMode()),
    __toggleDarkTheme: () => dispatch(toggleDarkTheme()),
  };

  return settingsHook;
}
