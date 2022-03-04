import styled from 'styled-components';
import useSettings from '@/hooks/useSettings';
import { BsMoon } from 'react-icons/bs';

const TemporalThemeSwitcher = () => {
  const { __toggleDarkTheme } = useSettings();

  return <StyledTemporalThemeSwitcher onClick={__toggleDarkTheme} />;
};

export default TemporalThemeSwitcher;

const StyledTemporalThemeSwitcher = styled(BsMoon)`
  position: absolute;
  top: 25px;
  right: calc(var(--padding) + 50px);
  z-index: 9;
  font-size: 1.2rem;
  cursor: pointer;
`;
