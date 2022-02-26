import useSettings from '@/hooks/useSettings';
import { BsMoon } from 'react-icons/bs';

const TemporalThemeSwitcher = () => {
  const { __toggleDarkTheme } = useSettings();

  return (
    <BsMoon
      style={{
        position: 'absolute',
        top: '25px',
        right: '20px',
        zIndex: '9',
        fontSize: '1.2rem',
        cursor: 'pointer',
      }}
      onClick={() => __toggleDarkTheme()}
    ></BsMoon>
  );
};

export default TemporalThemeSwitcher;
