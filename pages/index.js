import styled from 'styled-components';
import {
  UploadFilesButton,
  ModeSwitcher,
  PlantillasStack,
} from '../src/components/Home';

export default function Home() {
  return (
    <StyledHome>
      <UploadFilesButton />
      <p className="light">o</p>
      <p className="light">Arrastra y suelta</p>

      <ModeSwitcher />
      <PlantillasStack />
    </StyledHome>
  );
}

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
