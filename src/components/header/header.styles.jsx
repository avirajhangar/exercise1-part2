import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 50px;
  padding: 0 15px;

  @media (min-width: 1200px) {
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const HeaderLogo = styled(Link)`
  color: gray;
  font-size: 19px;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
  margin-top: auto;
  margin-bottom: auto;

  @media (min-width: 1200px) {
    color: white;
  }
`;

export const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

export const MobileNav = styled.nav`
  margin-top: auto;
  margin-bottom: auto;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  border: 1px solid lightgrey;
  border-radius: 15%;
  background: none;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  z-index: 6;
`;

export const Hamburger = styled.div`
  width: 48px;
  height: 35px;
`;

const LineOne = css`
  transform: translateY(11px);
`;

const LineOneOpen = css`
  transform: rotate(45deg) translateY(11px) translateX(11px);
`;

const LineTwo = css`
  transform: translateY(16px);
`;

const LineTwoOpen = css`
  display: none;
`;

const LineThree = css`
  transform: translateY(21px);
`;

const LineThreeOpen = css`
  transform: rotate(315deg) translateY(11px) translateX(-11px);
`;

const DisplayMenu = css`
  opacity: 1;
  visibility: visible;
  top: 0;
`;

const getLineNumber = (props) => {
  if (!props.open) {
    if (props.one) return LineOne;
    if (props.two) return LineTwo;
    if (props.three) return LineThree;
  }
  if (props.open) {
    if (props.one) return LineOneOpen;
    if (props.two) return LineTwoOpen;
    if (props.three) return LineThreeOpen;
  }
};

const MenuOpen = (props) => {
  if (props.open) return DisplayMenu;
};

export const Line = styled.div`
  margin: 0 12px;
  width: 50%;
  height: 1.5px;
  position: absolute;
  background-color: gray;
  transition: all 0.25s linear;

  ${getLineNumber}
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  position: fixed;
  top: -1000px;
  right: 0;
  opacity: 0;
  visibility: hidden;
  z-index: 5;
  font-size: 23px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  transition: all 0.25s linear;

  ${MenuOpen}
`;

export const MenuItemList = styled.li`
  margin: 20px 0;
  text-align: center;
`;

export const DesktopNavWrap = styled.div`
  height: 100%;
`;

export const DesktopMenuUl = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-right: 15px;
  align-items: center;
`;

export const DesktopLink = styled(Link)`
  margin-right: 15px;
  color: white;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
`;
