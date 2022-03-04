import styled from 'styled-components';
import useEmailTemplate from '@/hooks/emailTemplateSlice';
import { GrUpdate } from 'react-icons/gr';
import { db } from '../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function TemporalThemeSwitcher() {
  const { __setWorkers_observadas, __setWorkers_digitacion } =
    useEmailTemplate();

  async function handleFetch() {
    async function fetchFromFirebase(collectionName, localStorageKey) {
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDocs(collectionRef);
      const firebaseData = querySnapshot.docs.map((doc) => doc.data());

      localStorage[localStorageKey] = JSON.stringify(firebaseData);

      return firebaseData;
    }

    const digitacionData = await fetchFromFirebase('employees', 'workers');
    const observadasData = await fetchFromFirebase(
      'workers_observadas',
      'observadasWorkers'
    );

    __setWorkers_digitacion(digitacionData);
    __setWorkers_observadas(observadasData);
  }

  return <StyledTemporalFetcher onClick={handleFetch} />;
}

const StyledTemporalFetcher = styled(GrUpdate)`
  position: absolute;
  top: 25px;
  right: calc(var(--padding) + 50px);
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 9;
`;
