import { useSelector, useDispatch } from 'react-redux';
import {
  to,
  cc,
  subjectType,
  changeSubjectType,
} from '../features/emailTemplateSlice';

export default function useEmailTemplate() {
  const dispatch = useDispatch();

  const emailTemplateHook = {
    _to: useSelector(to),
    _cc: useSelector(cc),
    _subjectType: useSelector(subjectType),
    __changeSubjectType: () => dispatch(changeSubjectType()),
  };

  return emailTemplateHook;
}
