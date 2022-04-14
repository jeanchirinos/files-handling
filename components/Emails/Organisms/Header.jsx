import TemporalFetcher from '@/Fixed/TemporalFetcher';
import styled from 'styled-components';
import AreaIndicator from '../Atoms/AreaIndicator';
import HomeButton from '../Atoms/HomeButton';

export default function Header() {
  return (
    <S_Header>
      <HomeButton />
      <AreaIndicator />
      <span></span>
      <TemporalFetcher />
    </S_Header>
  );
}

const S_Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: span 3;
  position: relative;
`;
