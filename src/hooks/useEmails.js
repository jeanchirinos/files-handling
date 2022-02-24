import { useSelector, useDispatch } from 'react-redux';
import {
  emails,
  priority,
  currentEmailIndex,
  currentPlantillas,
  setEmails,
  setPriority,
  setCurrentPlantillas,
} from '../features/emailsSlice';

export default function useEmails() {
  const dispatch = useDispatch();

  const emailsHook = {
    _emails: useSelector(emails),
    _priority: useSelector(priority),
    _currentPlantillas: useSelector(currentPlantillas),
    __setEmails: (payload) => dispatch(setEmails(payload)),
    __setPriority: (payload) => dispatch(setPriority(payload)),
    __setCurrentPlantillas: (payload) =>
      dispatch(setCurrentPlantillas(payload)),
  };

  return emailsHook;
}
