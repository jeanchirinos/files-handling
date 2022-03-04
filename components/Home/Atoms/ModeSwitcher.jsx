import styled, { css } from 'styled-components';
import useSettings from '@/hooks/settingsSlice';

export default function ModeSwitcher() {
  const { _manualMode, __toggleManualMode } = useSettings();

  return (
    <StyledModeSwitcher
      active={_manualMode}
      onClick={__toggleManualMode}
      title="Modo manual"
    />
  );
}

const StyledModeSwitcher = styled.div(
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
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: var(--theme_500);
      position: absolute;
      left: 3px;
      transform: ${active && 'translateX(24px)'};
      transition: transform 0.5s;
    }
  `
);
