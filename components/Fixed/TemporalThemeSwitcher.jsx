import useSettings from '@/hooks/useSettings';
import { Button } from 'src/globalStyles/components';

const TemporalThemeSwitcher = () => {
  const { __toggleDarkTheme } = useSettings();

  return (
    <Button
      style={{ position: 'absolute', top: '25px', right: '50px', zIndex: '9' }}
      onClick={() => __toggleDarkTheme()}
    >
      <p className="colored">Change !</p>
    </Button>
  );
};

export default TemporalThemeSwitcher;
