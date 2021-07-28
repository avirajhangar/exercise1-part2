import styled from "styled-components";

export const ArticlesContainer = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 30px;
  }
`;