import styled from "styled-components";
import { Link } from "react-router-dom";

export const BannerContainer = styled.div`
  width: 100%;
  position: relative;
  height: 350px;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    position: relative;
    height: 450px;
  }

  @media (min-width: 1200px) {
    height: 600px;
  }
`;

export const BannerImage = styled.img`
  position: relative;
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const BannerBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  top: 0;
`;

export const BannerBlock = styled.div`
  position: absolute;
  width: 100%;
  top: 10%;
  text-align: center;
  color: white;

  @media (min-width: 768px) and (max-width: 1199px) {
    top: 28%;
  }

  @media (min-width: 1200px) {
    top: 24%;
  }
`;

export const BannerBlockSubtitle = styled.h2`
  width: 250px;
  margin: auto;
  font-size: 60px;
  font-style: italic;
  font-weight: 400;
  font-family: "Dancing Script", cursive;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 350px;
  }

  @media (min-width: 1200px) {
    width: 500px;
    margin: 40px auto;
    font-size: 80px;
    font-weight: 100;
  }
`;

export const BannerBlockDivider = styled.div`
  height: 4px;
  margin: 15px auto;
  width: 100px;
  background-color: white;
`;

export const BannerBlockText = styled.p`
  width: 320px;
  margin: 15px auto;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 200;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 420px;
    margin: 15px auto;
  }

  @media (min-width: 1200px) {
    width: 420px;
    margin: 30px auto 40px;
    font-weight: 100;
  }
`;

export const BannerLink = styled(Link)`
  color: white;
  text-decoration: underline;
`;
