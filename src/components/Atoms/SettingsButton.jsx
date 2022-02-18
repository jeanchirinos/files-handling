import styled from 'styled-components';
import { AiOutlineSetting } from 'react-icons/ai';

export default function SettingsButton() {
  return <StyledSettingsButton />;
}

const StyledSettingsButton = styled(AiOutlineSetting)`
  position: absolute;
  font-size: 1.5rem;
  color: var(--oppositeTheme_500);
  top: 25px;
  right: 25px;
  cursor: pointer;
`;
