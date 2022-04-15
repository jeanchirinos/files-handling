import styled from 'styled-components';

export default function SpinnerLoader() {
  return (
    <S_Container>
      <S_Spinner />
    </S_Container>
  );
}

const S_Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S_Spinner = styled.span`
  border: 4px solid var(--theme_500);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: var(--primary-color);
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
