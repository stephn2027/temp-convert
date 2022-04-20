import styled from 'styled-components';

export const DetailsStyled = styled.div`
  background-color: var(--yellow-dark);
  border-radius: 0px 0px 10px 10px;
  padding: .5rem;
  padding-top: 0rem;
  margin: 2rem;
  margin-bottom: 0;
  text-align: left;
  width: clamp(300px, 50vw, 50rem);
  font-size: clamp(1.4rem, 2.24vw, 4rem);
  font-weight: 600;
  margin-inline:auto;
  margin-top: 0rem;
  .accordion__inner{
    border-radius: 0px 0px 5px 5px;
  }
`;
