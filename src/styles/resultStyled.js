import styled from 'styled-components';

export const ResultStyled= styled.div`
  border: .5rem solid var(--yellow-dark);
  border-radius: 0px 0px 10px 10px;
  padding: 1rem;
  margin:0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: clamp(300px, 50vw, 50rem);
  
  margin-inline: auto;
    .display__group{
        
        .display__text{
            font-size: clamp(1rem,1.54vw, 3rem);
           
        }
    }    
`;