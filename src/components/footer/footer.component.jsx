import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <FooterDivider />
      <FooterContainer>
        <SocialMediaContainer>
          <SocialLink to="/">
            <SocialIcon src="./assets/icons/git.png" alt="git" />
          </SocialLink>
          <SocialLink to="/">
            <SocialIcon src="./assets/icons/twi.png" alt="twitter" />
          </SocialLink>
          <SocialLink to="/">
            <SocialIcon src="./assets/icons/fb.png" alt="facebook" />
          </SocialLink>
          <SocialLink to="/">
            <SocialIcon src="./assets/icons/2168290.png" alt="google plus" />
          </SocialLink>
          <SocialLink to="/">
            <SocialIcon src="./assets/icons/mail.png" alt="mail" />
          </SocialLink>
          <SocialLink to="/">
            <SocialIcon src="./assets/icons/u.png" alt="user" />
          </SocialLink>
        </SocialMediaContainer>
        <Copyright>
          &copy; 2021{" "}
          <CopyrightLink to="/">Hangar WW - Code Playground</CopyrightLink>
        </Copyright>
      </FooterContainer>
    </footer>
  );
};

const FooterDivider = styled.div`
  margin: 35px 0 60px;
  width: 100%;
  height: 1.7px;
  opacity: 0.8;
  background-color: lightgrey;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialLink = styled(Link)`
  padding: 0 15px;
`;

const SocialIcon = styled.img`
  width: 40px;
`;

const Copyright = styled.p`
  font-family: "Roboto", sans-serif;
  padding: 35px 0 0 0;
  text-align: center;
`;

const CopyrightLink = styled(Link)`
  text-decoration: underline;
  font-weight: 900;
`;

export default Footer;
