import { useSelector, useDispatch } from 'react-redux';
import {
  selectCumulativePlantillasHasItems,
  updateCumulativePlantillasHasItems,
} from '../features/plantillasSlice';

const useSettings = () => {
  const dispatch = useDispatch();

  // STATES
  const cumulativePlantillasHasItems = useSelector(
    selectCumulativePlantillasHasItems
  );

  // ACTIONS
  function changeCumulativePlantillasState() {
    dispatch(updateCumulativePlantillasHasItems());
  }

  // EXPORT
  return {
    cumulativePlantillasHasItems,
    changeCumulativePlantillasState,
  };
};

export default useSettings;
