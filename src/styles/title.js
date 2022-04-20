import styled from '@emotion/styled';
export const TitleStyled = styled.div`
  display: block;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 900;

  .title__text {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .text--first {
      padding: 0rem;
    }
    .text--second {
      font-family: 'Zilla Slab Highlight', cursive;
      padding: 1rem;

      text-shadow: 1px 1px 1px black;
    }
  }
`;
