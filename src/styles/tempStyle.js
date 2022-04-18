import styled from 'styled-components';

export const TempStyle = styled.div`
 
  background-color: var(--yellow-dark);
  border-radius: 10px 10px 0px 0px;
  padding: 1rem ;
  margin: 2rem;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: clamp(300px, 50vw, 50rem);
  font-size: clamp(1.4rem,2.24vw,4rem);
  font-weight: 600;
  margin-inline: auto;
  .temp__form {
    .input__group {
      padding: .5rem;
      .form__input {
        font-weight: 600;
        font-size: 1.5rem;
        width:clamp(5rem,40%,25rem);
        height: 3.5rem;
        padding: .5rem;
        margin: 0rem;
        border-radius: 0.3rem;
        color: var(--blue-dark);
        
      }
    }
  }
`;


