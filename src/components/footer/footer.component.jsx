import React from "react";
import {
  FooterDivider,
  FooterContainer,
  SocialMediaContainer,
  SocialLink,
  SocialIcon,
  Copyright,
  CopyrightLink,
} from "./footer.styles";

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

export default Footer;
