import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@/GlobalStyles/components';
import { AiFillHome } from 'react-icons/ai';

export default function HomeButton() {
  return (
    <StyledHomeButton>
      <Link href="/">
        <a>
          <Button inverted>
            <AiFillHome />
          </Button>
        </a>
      </Link>
    </StyledHomeButton>
  );
}

const StyledHomeButton = styled.div`
  position: absolute;
  top: 25px;
`;
