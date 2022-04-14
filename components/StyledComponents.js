import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--light);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 0.5px solid var(--primary-color);
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: transparent;
    color: var(--primary-color);
  }
`;
