import styled from 'styled-components';

export const ResultStyled = styled.div`
  border: 0.5rem solid var(--yellow-dark);
  border-bottom: none;
  padding: 1rem;
  margin: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: clamp(300px, 50vw, 50rem);

  margin-inline: auto;
  .display__group {
    .display__text {
      font-size: clamp(1rem, 1.54vw, 3rem);
    }
  }
`;
