import React, { useState } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogo,
  DesktopNav,
  MobileNav,
  MenuButton,
  Hamburger,
  Line,
  MenuItems,
  MenuItemList,
  DesktopNavWrap,
  DesktopMenuUl,
  DesktopLink,
} from "./header.styles";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderLogo to="/">CodePlayground</HeaderLogo>
      <MobileNav>
        <MenuButton onClick={toggleMenu}>
          <Hamburger>
            <Line open={menuOpen} one />
            <Line open={menuOpen} two />
            <Line open={menuOpen} three />
          </Hamburger>
        </MenuButton>
        <MenuItems open={menuOpen}>
          <ul>
            <MenuItemList>
              <Link to="/">Home</Link>
            </MenuItemList>
            <MenuItemList>
              <Link to="/">About us</Link>
            </MenuItemList>
            <MenuItemList>
              <Link to="/">sample page</Link>
            </MenuItemList>
            <MenuItemList>
              <Link to="/">contact</Link>
            </MenuItemList>
          </ul>
        </MenuItems>
      </MobileNav>
      <DesktopNav>
        <DesktopNavWrap>
          <DesktopMenuUl>
            <li>
              <DesktopLink to="/">Home</DesktopLink>
            </li>
            <li>
              <DesktopLink to="/">About us</DesktopLink>
            </li>
            <li>
              <DesktopLink to="/">sample page</DesktopLink>
            </li>
            <li>
              <DesktopLink to="/">contact</DesktopLink>
            </li>
          </DesktopMenuUl>
        </DesktopNavWrap>
      </DesktopNav>
    </HeaderContainer>
  );
};

export default Header;
