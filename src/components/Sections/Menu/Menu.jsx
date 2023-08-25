import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../StyledComponents/Logo/Logo";
import LinksMenu from "../../StyledComponents/LinksMenu/LinksMenu";
import { styled, useTheme } from "styled-components";
import "./Menu.css";
const MenuPrimary = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 5px;
`;

const Menu = () => {
  const theme = useTheme();

  return (
    <>
      <MenuPrimary
        className="animate__animated
      animate__slideInDown
      animate__repeat-1
      animate__delay-6s"
      >
        <Link
          to="/jesusreyes/"
          style={{ color: theme.color.primary, marginLeft: "20px" }}
        >
          <Logo className="logo animate__animated"></Logo>
        </Link>
        <LinksMenu></LinksMenu>
      </MenuPrimary>
    </>
  );
};

export default Menu;
