import useSettings from '@/hooks/useSettings';

const TemporalThemeSwitcher = () => {
  const { __toggleDarkTheme } = useSettings();

  return (
    <button
      style={{ position: 'absolute', top: '25px', right: '50px', zIndex: '9' }}
      onClick={() => __toggleDarkTheme()}
    >
      <p className="colored">Change !</p>
    </button>
  );
};

export default TemporalThemeSwitcher;
