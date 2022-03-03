import { useSelector, useDispatch } from 'react-redux';
import {
  plantillasStack,
  addToPlantillasStack,
  resetPlantillasStack,
  deleteFromStack,
} from '../features/plantillasSlice';

export default function usePlantillas() {
  const dispatch = useDispatch();

  const plantillasHook = {
    _plantillasStack: useSelector(plantillasStack),
    __addToPlantillasStack: (payload) =>
      dispatch(addToPlantillasStack(payload)),
    __resetPlantillasStack: () => dispatch(resetPlantillasStack()),
    __deleteFromStack: (payload) => dispatch(deleteFromStack(payload)),
  };

  return plantillasHook;
}
