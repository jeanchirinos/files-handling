import styled, { css } from 'styled-components';
import useSettings from 'src/features/settingsSlice';

export default function ModeSwitcher() {
  const { _manualMode, __toggleManualMode } = useSettings();

  return (
    <S_ModeSwitcher
      active={_manualMode}
      onClick={__toggleManualMode}
      title="Modo manual"
    />
  );
}

const S_ModeSwitcher = styled.div(
  ({ active }) => css`
    width: 48px;
    height: 28px;
    border-radius: 16px;
    background-color: ${active ? 'var(--primary-color)' : 'var(--light_800)'};
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 25px;
    left: 25px;
    cursor: pointer;
    z-index: 1;

    :after {
      content: '';
      background-color: var(--theme_500);
      width: 18px;
      height: 18px;
      border-radius: 50%;
      position: absolute;
      left: 3px;
      transform: ${active && 'translateX(24px)'};
      transition: transform 0.5s;
    }
  `
);
