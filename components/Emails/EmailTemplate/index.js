import mediaQueries from 'src/styleGuide/breakpoints';
import styled from 'styled-components';

export default function EmailTemplate() {
  return (
    <StyledEmailTemplate>
      <div>
        <div className="inputs">
          <div className="input">
            <p className="bold">Para </p>
            <input type="text" value="hola" readOnly />
          </div>
          <div className="input">
            <p className="bold">CC </p>
            <input type="text" value="hola" readOnly />
          </div>
          <div className="input">
            <p className="bold">Asunto </p>
            <input type="text" value="hola" readOnly />
          </div>
        </div>
        <div className="info"></div>
      </div>
    </StyledEmailTemplate>
  );
}

const StyledEmailTemplate = styled.section`
  /* background-color: blue; */
  /* height: calc(100%); */
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries.xs} {
    padding: 0 0.5rem;
  }

  ${mediaQueries.md} {
    padding: 0 3rem;
    grid-column-start: 2;
  }

  > div {
    width: 100%;
    min-height: 100%;
    /* TODO min-height this and height fit content */
    height: 50vh;
    /* height: 100%; */
    border-radius: 12px;
    background-color: var(--emailTemplate);
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .inputs {
    display: flex;
    gap: 0.8rem;
    flex-direction: column;
  }

  .input {
    display: flex;
    gap: 0.8rem;

    p {
      width: 54px;
    }
    input {
      background-color: var(--light_700);
      flex-grow: 1;
      border-radius: 8px;
      border: none;
    }
  }

  .info {
    /* width: 100%; */
    background-color: var(--light_700);
    /* background-color: var(--light_900); */
    flex-grow: 1;
    border-radius: 10px;
  }
`;
