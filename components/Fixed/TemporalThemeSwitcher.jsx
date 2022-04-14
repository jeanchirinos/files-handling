import styled from 'styled-components';
import useSettings from '@/hooks/settingsSlice';
import { BsMoon } from 'react-icons/bs';

export default function TemporalThemeSwitcher() {
  const { __toggleDarkTheme } = useSettings();

  return (
    <StyledTemporalThemeSwitcher
      onClick={__toggleDarkTheme}
      title="Cambia el tema"
    />
  );
}

const StyledTemporalThemeSwitcher = styled(BsMoon)`
  position: absolute;
  top: 30px;
  right: var(--padding);
  z-index: 1;
  font-size: 1.2rem;
  cursor: pointer;
`;
