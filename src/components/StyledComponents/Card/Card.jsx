import { styled } from "styled-components";
import React from "react";
import Polygon from "../Polygon/Polygon";
import Txt from "../Txt/Txt";
import Title from "../Title/Title";
import Avatar from "../Avatar/Avatar";
import "./Card.css";
const CardTemplete = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
  padding-right: 120px;
  width: 40vw;
  overflow: show;
  color: ${(props) => props.theme.color.secundaryLight};
  background-color: ${(props) => props.theme.color.primary};
  opacity: 0.95;
  transition: 0.8s linear;
  animation-name: "fadeInLeft";
  animation-duration: 500ms;
  animation-timing-function: forwards;
  @media screen and (min-width: 320px) {
    display: block !important;
    padding: 0 !important;
    width: 220px !important;
    margin-top: 50px !important;
  }
  @media screen and (min-width: 540px) {
    display: block !important;
    padding: 0 !important;
    width: 330px !important;
    margin-top: 50px !important;
  }
  @media screen and (min-width: 720px) {
    width: 400px !important;
  }
  @media screen and (min-width: 992px) {
    display: flex !important;
    padding: 10px !important;
    padding-right: 120px !important;
    width: 50dvw !important;
    left: 13dvw;
  }
  @media screen and (min-width: 1200px) {
    left: 15dvw;
  }
  @media screen and (min-width: 1376px) {
    left: unset;
  }
  @media screen and (min-width: 1600px) {
    left: 15dvw;
  }
`;
const Line = styled.div`
  @media screen and (min-width: 320px) {
    border-bottom: 1px ${(props) => props.theme.color.secundaryLight} solid;
    p {
      font-size: 0.8rem !important;
    }
  }
  @media screen and (min-width: 540px) {
    border-bottom: 1px ${(props) => props.theme.color.secundaryLight} solid;
    p {
      font-size: 2rem !important;
    }
  }
  @media screen and (min-width: 720px) {
    p {
      font-size: 2.5rem !important;
    }
  }
  @media screen and (min-width: 992px) {
    border-bottom: 0px ${(props) => props.theme.color.secundaryLight} solid;
    border-right: 1px ${(props) => props.theme.color.secundaryLight} solid;
    p {
      font-size: 2rem !important;
    }
  }
  @media screen and (min-width: 1200px) {
    p {
      font-size: 2.2rem !important;
    }
  }
  @media screen and (min-width: 1600px) {
    p {
      font-size: 2.8rem !important;
    }
  }
`;
const Card = ({ txt, title, children }) => {
  return (
    <CardTemplete>
      <Line>
        <Title txt={title}></Title>
      </Line>
      <Polygon
        className="polygoncard"
        $bg={(props) => props.theme.color.primaryDark}
        $position="absolute"
        $height="300px"
        $width="300px"
        $right="-200px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "2",
        }}
      >
        <Avatar
          className="avatarAbout"
          style={{ width: "200px", height: "280px", marginBottom: "35px" }}
          $hoverActive={true}
        />
      </Polygon>
      {children}
      <Txt txt={txt}></Txt>
    </CardTemplete>
  );
};

export default Card;
