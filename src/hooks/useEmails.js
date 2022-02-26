import { useSelector, useDispatch } from 'react-redux';
import {
  emails,
  priority,
  currentEmailIndex,
  currentPlantillas,
  arrayOfPlantillas,
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
    _currentPlantillas: useSelector(currentPlantillas),
    _arrayOfPlantillas: useSelector(arrayOfPlantillas),
    __setEmails: (payload) => dispatch(setEmails(payload)),
    __setPriority: (payload) => dispatch(setPriority(payload)),
    __setCurrentEmailIndex: (payload) =>
      dispatch(setCurrentEmailIndex(payload)),
  };

  return emailsHook;
}
