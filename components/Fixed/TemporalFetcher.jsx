import styled from 'styled-components';
import useEmailTemplate from '@/hooks/emailTemplateSlice';
import { MdUpdate } from 'react-icons/md';
import { db } from '../../src/db/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function TemporalFetcher() {
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

  return <S_TemporalFetcher onClick={handleFetch} title="Refresca los datos" />;
}

const S_TemporalFetcher = styled(MdUpdate)`
  position: absolute;
  right: 60px;
  font-size: 1.4rem;
  cursor: pointer;
`;
