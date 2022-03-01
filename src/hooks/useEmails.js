import { useSelector, useDispatch } from 'react-redux';
import {
  emails,
  priority,
  currentEmailIndex,
  plantillasToNSTDArray,
  plantillasArray,
  setEmails,
  setPriority,
  setCurrentEmailIndex,
} from '../features/emailsSlice';

export default function useEmails() {
  const dispatch = useDispatch();

  const emailsHook = {
    _emails: useSelector(emails),
    _priority: useSelector(priority),
    _currentEmailIndex: useSelector(currentEmailIndex),
    _plantillasToNSTDArray: useSelector(plantillasToNSTDArray),
    _plantillasArray: useSelector(plantillasArray),
    __setEmails: (payload) => dispatch(setEmails(payload)),
    __setPriority: (payload) => dispatch(setPriority(payload)),
    __setCurrentEmailIndex: (payload) =>
      dispatch(setCurrentEmailIndex(payload)),
  };

  return emailsHook;
}
