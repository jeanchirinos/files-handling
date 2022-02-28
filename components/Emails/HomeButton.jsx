import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { Button } from 'src/globalStyles/components';
import styled from 'styled-components';

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
