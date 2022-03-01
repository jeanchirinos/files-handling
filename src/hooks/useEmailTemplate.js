import { useSelector, useDispatch } from 'react-redux';
import {
  leader,
  employees,
  subjectType,
  area,
  workers_observadas,
  changeSubjectType,
  changeWorkers,
  changeArea,
  setWorkers_digitacion,
  setWorkers_observadas,
} from '../features/emailTemplateSlice';

export default function useEmailTemplate() {
  const dispatch = useDispatch();

  const emailTemplateHook = {
    _leader: useSelector(leader),
    _employees: useSelector(employees),
    _subjectType: useSelector(subjectType),
    _area: useSelector(area),
    _workers_observadas: useSelector(workers_observadas),
    __changeSubjectType: (payload) => dispatch(changeSubjectType(payload)),
    __changeWorkers: (payload) => dispatch(changeWorkers(payload)),
    __changeArea: (payload) => dispatch(changeArea(payload)),
    __setWorkers_digitacion: (payload) =>
      dispatch(setWorkers_digitacion(payload)),
    __setWorkers_observadas: (payload) =>
      dispatch(setWorkers_observadas(payload)),
  };

  return emailTemplateHook;
}
