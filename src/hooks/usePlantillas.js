import { useSelector, useDispatch } from 'react-redux';
import {
  selectCumulativePlantillas,
  updateCumulativePlantillas,
  selectEmails,
  selectPriority,
  updateEmails,
  updatePriority,
  deleteFromCumulativePlantillas,
} from '../features/plantillasSlice';

const useSettings = () => {
  const dispatch = useDispatch();

  // STATES
  const cumulativePlantillas = useSelector(selectCumulativePlantillas);
  const emails = useSelector(selectEmails);
  const priority = useSelector(selectPriority);

  // ACTIONS
  function setCumulativePlantillas(arrayOfPlantillas) {
    dispatch(updateCumulativePlantillas(arrayOfPlantillas));
  }

  function setEmails(arrayOfEmails) {
    dispatch(updateEmails(arrayOfEmails));
  }

  function removeItemFromCumulativePlantillas(item) {
    dispatch(deleteFromCumulativePlantillas(item));
  }

  function setPriority(newPriority) {
    dispatch(updatePriority(newPriority));
  }

  // EXPORT
  return {
    cumulativePlantillas,
    emails,
    priority,
    setCumulativePlantillas,
    setEmails,
    setPriority,
    removeItemFromCumulativePlantillas,
  };
};

export default useSettings;
