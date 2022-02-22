import { useSelector, useDispatch } from 'react-redux';
import {
  plantillasStack,
  emails,
  priority,
  setPlantillasStack,
  deleteFromStack,
  setEmails,
  setPriority,
} from '../features/plantillasSlice';

export default function usePlantillas() {
  const dispatch = useDispatch();

  const plantillasHook = {
    _plantillasStack: useSelector(plantillasStack),
    _emails: useSelector(emails),
    _priority: useSelector(priority),
    __setPlantillasStack: (payload) => dispatch(setPlantillasStack(payload)),
    __deleteFromStack: (payload) => dispatch(deleteFromStack(payload)),
    __setEmails: (payload) => dispatch(setEmails(payload)),
    __setPriority: (payload) => dispatch(setPriority(payload)),
  };

  return plantillasHook;
}
