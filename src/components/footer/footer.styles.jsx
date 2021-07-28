import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterDivider = styled.div`
  margin: 35px 0 60px;
  width: 100%;
  height: 1.7px;
  opacity: 0.8;
  background-color: lightgrey;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SocialLink = styled(Link)`
  padding: 0 15px;
`;

export const SocialIcon = styled.img`
  width: 40px;
`;

export const Copyright = styled.p`
  font-family: "Roboto", sans-serif;
  padding: 35px 0 0 0;
  text-align: center;
`;

export const CopyrightLink = styled(Link)`
  text-decoration: underline;
  font-weight: 900;
`;
