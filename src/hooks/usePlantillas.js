import { useSelector, useDispatch } from 'react-redux';
import {
  plantillasStack,
  setPlantillasStack,
  emails,
  priority,
  setEmails,
  setPriority,
  deleteFromStack,
} from '../features/plantillasSlice';

const useSettings = () => {
  const dispatch = useDispatch();

  // STATES
  const _plantillasStack = useSelector(plantillasStack);
  const _emails = useSelector(emails);
  const _priority = useSelector(priority);

  // ACTIONS
  function __setPlantillasStack(payload) {
    dispatch(setPlantillasStack(payload));
  }

  function __setEmails(payload) {
    dispatch(setEmails(payload));
  }

  function __deleteFromStack(payload) {
    dispatch(deleteFromStack(payload));
  }

  function __setPriority(payload) {
    dispatch(setPriority(payload));
  }

  // EXPORT
  return {
    _plantillasStack,
    _emails,
    _priority,
    __setPlantillasStack,
    __setEmails,
    __setPriority,
    __deleteFromStack,
  };
};

export default useSettings;
