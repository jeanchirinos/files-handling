import styled, { css } from 'styled-components';
import useSettings from '../../hooks/useSettings';

export default function ModeSwitcher() {
  const { manualMode, toggleManualMode } = useSettings();

  return (
    <StyledModeSwitcher active={manualMode} onClick={() => toggleManualMode()}>
      <Circle active={manualMode} />
    </StyledModeSwitcher>
  );
}

const StyledModeSwitcher = styled.div(
  ({ active }) => css`
    width: 48px;
    height: 28px;
    border-radius: 16px;
    background-color: ${active ? 'var(--primary-color)' : 'var(--dark_300)'};
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 25px;
    left: 25px;
    cursor: pointer;
  `
);

const Circle = styled.div(
  ({ active }) => css`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--theme_500);
    position: absolute;
    left: 3px;
    transform: ${active && 'translateX(24px)'};
    transition: transform 0.5s;
  `
);
