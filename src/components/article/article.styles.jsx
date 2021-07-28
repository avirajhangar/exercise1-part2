import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 100%;
  font-family: "Roboto", sans-serif;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: calc(50% - 15px);
    font-family: "Roboto", sans-serif;
  }

  @media (min-width: 1200px) {
    width: 20%;
    font-family: "Roboto", sans-serif;
  }
`;

export const ArticleDate = styled.p`
  color: gray;
  font-size: 15px;
  margin: 15px 0;
`;

export const ArticleImage = styled.img`
  width: 100%;
`;

export const ArticleTitle = styled.h3`
  padding: 15px 0;
`;
