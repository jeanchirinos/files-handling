import styled from 'styled-components';
import { AiOutlineSetting } from 'react-icons/ai';

export default function SettingsButton() {
  return <StyledSettingsButton />;
}

const StyledSettingsButton = styled(AiOutlineSetting)`
  position: absolute;
  font-size: 1.5rem;
  color: var(--oppositeTheme_400);
  top: 25px;
  right: var(--padding);
  cursor: pointer;
  z-index: 9;
`;
