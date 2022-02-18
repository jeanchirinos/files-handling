import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import {
  CumulativePlantillas,
  ModeSwitcher,
  UploadFilesButton,
} from '../src/components';

export default function Home() {
  return (
    <StyledHome>
      {/* <Link href="/emails">
        <a>Go to Emails</a>
      </Link> */}
      <UploadFilesButton />
      <p className="light">o</p>
      <p className="light">Arrastra y suelta</p>

      <ModeSwitcher />
      <CumulativePlantillas />
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
