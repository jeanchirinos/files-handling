import useEmailTemplate from '@/hooks/useEmailTemplate';
import { GrUpdate } from 'react-icons/gr';
import { db } from '../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function TemporalThemeSwitcher() {
  const { __setWorkers_observadas, __setWorkers_digitacion } =
    useEmailTemplate();

  async function handleFetch() {
    const querySnapshot = await getDocs(collection(db, 'employees'));
    const firebaseData = querySnapshot.docs.map((doc) => doc.data());

    localStorage.workers = JSON.stringify(firebaseData);

    console.log(firebaseData);

    __setWorkers_observadas(firebaseData);

    const querySnapshot2 = await getDocs(collection(db, 'workers_observadas'));
    const firebaseData2 = querySnapshot2.docs.map((doc) => doc.data());

    localStorage.observadasWorkers = JSON.stringify(firebaseData2);

    __setWorkers_digitacion(firebaseData2);
  }

  return (
    <GrUpdate
      style={{
        position: 'absolute',
        top: '25px',
        right: 'calc(var(--padding) + 100px)',
        zIndex: '9',
        fontSize: '1.2rem',
        cursor: 'pointer',
      }}
      onClick={() => handleFetch()}
    ></GrUpdate>
  );
}
