import { useSelector, useDispatch } from 'react-redux';
import {
  plantillasStack,
  emails,
  priority,
  currentEmailIndex,
  setPlantillasStack,
  deleteFromStack,
  setEmails,
  setPriority,
  setCurrentEmailIndex,
} from '../features/plantillasSlice';

export default function usePlantillas() {
  const dispatch = useDispatch();

  const plantillasHook = {
    _plantillasStack: useSelector(plantillasStack),
    _emails: useSelector(emails),
    _priority: useSelector(priority),
    _currentEmailIndex: useSelector(currentEmailIndex),
    __setPlantillasStack: (payload) => dispatch(setPlantillasStack(payload)),
    __deleteFromStack: (payload) => dispatch(deleteFromStack(payload)),
    __setEmails: (payload) => dispatch(setEmails(payload)),
    __setPriority: (payload) => dispatch(setPriority(payload)),
    __setCurrentEmailIndex: (payload) =>
      dispatch(setCurrentEmailIndex(payload)),
  };

  return plantillasHook;
}
