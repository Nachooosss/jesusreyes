import React from "react";
import { styled } from "styled-components";
const Line = styled.div`
  height: 50px;
  width: 35px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.color.primary};
  border-top: 0px;
  border-bottom: 0px;
  @media screen and (min-width: 320px) {
    width: 35px;
  }
  @media screen and (min-width: 540px) {
    width: 40px;
  }
`;
const GridNav = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  gap: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 3%;
  @media screen and (min-width: 320px) {
    margin-left: 2%;
  }
`;
const Nav = ({ items }) => {
  return (
    <>
      <GridNav
        className="animate__animated
      animate__slideInUp
      animate__repeat-1
      animate__delay-6s"
      >
        {items}
        <Line></Line>
      </GridNav>
    </>
  );
};

export default Nav;
