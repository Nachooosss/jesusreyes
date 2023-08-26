import React from "react";
import PolygonObj from "../../components/PolygonObj/PolygonObj";
import Polygon from "../../components/Polygon/Polygon";
import Avatar from "../../components/Avatar/Avatar";
import { css, styled } from "styled-components";
import "./Header.css";
const ContainerHeader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: "fadeInLeft";
  animation-duration: 300ms;
`;

const AddAnimation = css`
  @media screen and (min-width: 992px) {
    animation: float 4s ease infinite;
    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-20px);
      }
      100% {
        transform: translatey(0px);
      }
    }
  }
`;
const Header = () => {
  return (
    <>
      <ContainerHeader>
        <Polygon
          className="subpolygon sp-1"
          $position="absolute"
          $opacity="0.6"
          $AnimationK={AddAnimation}
        ></Polygon>
        <Polygon
          className="subpolygon sp-2"
          $position="absolute"
          $opacity="0.6"
          $AnimationK={AddAnimation}
          style={{ animationDelay: "1s" }}
        ></Polygon>
        <PolygonObj></PolygonObj>
        <Avatar
          className="avatarHeader"
          $position="absolute !important"
        ></Avatar>
      </ContainerHeader>
    </>
  );
};

export default Header;
