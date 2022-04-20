import styled from '@emotion/styled';
export const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  
  margin-top: 3rem;
  margin-bottom: -3rem;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 900;

  .title__text {
    
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem;
    .text--first {
      padding-bottom: 0px;
      margin: -3rem;
    }
    .text--second {
      font-family: 'Zilla Slab Highlight', cursive;
      padding: 0rem;
      

      text-shadow: 1px 1px 1px black;
    }
  }
`;
