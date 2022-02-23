import styled, { css } from 'styled-components';
import usePlantillas from '@/hooks/usePlantillas';

export default function EmailsList() {
  const { _emails, _currentEmailIndex, __setCurrentEmailIndex } =
    usePlantillas();

  return (
    <StyledEmailsList>
      {_emails.map((email, index) => (
        <EmailBox
          key={index}
          active={_currentEmailIndex === index}
          onClick={() => __setCurrentEmailIndex(index)}
        >
          <span>{index + 1}</span>
          <div>
            {email.map((plantilla, index) => (
              <p className="small light" key={index}>
                {plantilla.name}
              </p>
            ))}
          </div>
        </EmailBox>
      ))}
    </StyledEmailsList>
  );
}

const StyledEmailsList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const EmailBox = styled.div(
  ({ active }) => css`
    border: 1px solid ${active ? 'var(--primary-color)' : 'var(--light_300)'};
    border-radius: 5px;
    display: flex;
    background-color: ${active && 'var(--primary-color)'};
    color: ${active && 'var(--light_800)'};
    cursor: pointer;

    > span {
      height: 100%;
      padding: 0 0.4rem;
      border-radius: 5px 0 0 5px;
      display: flex;
      align-items: center;
      background-color: var(--dark_800);
      color: var(--light_600);
    }

    > div {
      padding: 0.5rem;
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
  `
);
