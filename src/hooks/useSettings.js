import { useSelector, useDispatch } from 'react-redux';
import {
  selectDarkTheme,
  selectManualMode,
  updateDarkTheme,
  updateManualMode,
} from '../features/settingsSlice';

const useSettings = () => {
  const dispatch = useDispatch();

  // STATES
  const darkTheme = useSelector(selectDarkTheme);
  const manualMode = useSelector(selectManualMode);

  // ACTIONS
  function toggleTheme() {
    dispatch(updateDarkTheme());
  }
  function toggleManualMode() {
    dispatch(updateManualMode());
  }

  // EXPORT
  return {
    darkTheme,
    manualMode,
    toggleTheme,
    toggleManualMode,
  };
};

export default useSettings;
