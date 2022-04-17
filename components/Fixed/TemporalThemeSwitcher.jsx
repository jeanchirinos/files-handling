import styled from 'styled-components';
import useSettings from 'src/features/settingsSlice';
import { BsMoon } from 'react-icons/bs';

export default function TemporalThemeSwitcher() {
  const { __toggleDarkTheme } = useSettings();

  return (
    <S_TemporalThemeSwitcher
      onClick={__toggleDarkTheme}
      title="Cambia el tema"
    />
  );
}

const S_TemporalThemeSwitcher = styled(BsMoon)`
  position: absolute;
  top: 30px;
  right: var(--padding);
  z-index: 1;
  font-size: 1.2rem;
  cursor: pointer;
`;
