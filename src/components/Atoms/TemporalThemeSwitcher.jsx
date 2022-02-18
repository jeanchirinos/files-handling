import useSettings from '../../hooks/useSettings';

const TemporalThemeSwitcher = () => {
  const { toggleTheme } = useSettings();

  return (
    <button
      style={{ position: 'absolute', top: '25px', right: '50px' }}
      onClick={() => toggleTheme()}
    >
      <p className="colored">Change !</p>
    </button>
  );
};

export default TemporalThemeSwitcher;
