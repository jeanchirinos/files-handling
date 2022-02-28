import { useSelector, useDispatch } from 'react-redux';
import {
  leader,
  employees,
  subjectType,
  changeSubjectType,
} from '../features/emailTemplateSlice';

export default function useEmailTemplate() {
  const dispatch = useDispatch();

  const emailTemplateHook = {
    _leader: useSelector(leader),
    _employees: useSelector(employees),
    _subjectType: useSelector(subjectType),
    __changeSubjectType: (payload) => dispatch(changeSubjectType(payload)),
  };

  return emailTemplateHook;
}
