import styled from 'styled-components';
import useEmailTemplate from '@/hooks/emailTemplateSlice';
import { MdUpdate } from 'react-icons/md';
import { db } from '../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function TemporalThemeSwitcher() {
  const { _area, __setLeader, __setEmployees } = useEmailTemplate();

  async function handleFetch() {
    const querySnapshot = await getDocs(collection(db, 'workers'));
    const firebaseData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    const digitacionWorkersGroup = firebaseData.find(
      group => group.id === 'digitacion'
    );
    const observadasWorkersGroups = firebaseData.filter(
      group => group.id !== 'digitacion'
    );

    localStorage.digitacionWorkersGroup = JSON.stringify(
      digitacionWorkersGroup
    );
    localStorage.observadasWorkersGroups = JSON.stringify(
      observadasWorkersGroups
    );

    if (_area === 'digitacion') {
      __setLeader(digitacionWorkersGroup.leader);
      __setEmployees(digitacionWorkersGroup.employees);
    }

    if (_area === 'observadas') {
      __setLeader(observadasWorkersGroups[0].leader);
      __setEmployees(observadasWorkersGroups[0].employees);
    }
  }

  return (
    <StyledTemporalFetcher onClick={handleFetch} title="Refresca los datos" />
  );
}

const StyledTemporalFetcher = styled(MdUpdate)`
  position: absolute;
  top: 25px;
  right: calc(var(--padding) + 75px);
  font-size: 1.4rem;
  cursor: pointer;
  z-index: 9;
`;
