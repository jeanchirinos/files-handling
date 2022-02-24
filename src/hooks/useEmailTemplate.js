import { useSelector, useDispatch } from 'react-redux';
import {
  to,
  cc,
  subjectType,
  setSubjectType,
} from '../features/emailTemplateSlice';

export default function useEmailTemplate() {
  const dispatch = useDispatch();

  const emailTemplateHook = {
    _to: useSelector(to),
    _cc: useSelector(cc),
    _subjectType: useSelector(subjectType),
    __setSubjectType: (payload) => dispatch(setSubjectType(payload)),
  };

  return emailTemplateHook;
}
