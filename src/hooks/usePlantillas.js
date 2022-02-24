import { useSelector, useDispatch } from 'react-redux';
import {
  plantillasStack,
  setPlantillasStack,
  deleteFromStack,
} from '../features/plantillasSlice';

export default function usePlantillas() {
  const dispatch = useDispatch();

  const plantillasHook = {
    _plantillasStack: useSelector(plantillasStack),
    __setPlantillasStack: (payload) => dispatch(setPlantillasStack(payload)),
    __deleteFromStack: (payload) => dispatch(deleteFromStack(payload)),
  };

  return plantillasHook;
}
