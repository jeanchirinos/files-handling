import styled, { css } from 'styled-components';
import { useState } from 'react';

export default function Test() {
  const [active, setActive] = useState(false);

  return (
    <S_Wrapper active={active} onClick={() => setActive(!active)}></S_Wrapper>
  );
}

const S_Wrapper = styled.div(
  ({ active }) => css`
    background-color: red;
    width: 100px;
    height: 100px;
    transform: ${active && `translateX(150px)`};
    transition: transform 0.3s;
  `
);
