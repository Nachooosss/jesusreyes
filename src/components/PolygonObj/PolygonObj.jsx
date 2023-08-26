import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
import Title from "../Title/Title";
import Polygon from "../Polygon/Polygon";
import SubTittle from "../SubTittle/SubTittle";
import "./PolygonObj.css";
import "animate.css";

const TextBox = styled.div`
  margin-top: 35%;
  cursor: default;
  display: block;
  align-items: center;
  justify-content: center;
`;
const textLines = [
  "Nice to meet you",
  "I am a Frontend Developer",
  "Enjoy my web site!",
];
const PolygonObj = () => {
  return (
    <>
      <Polygon>
        <TextBox>
          <SubTittle txt={"Hi, my name is"}></SubTittle>
          <Title txt={"Jesús Reyes "}></Title>
          <br />
          <Typed
            className="typedstring"
            strings={textLines}
            typeSpeed={80}
            backSpeed={20}
            loop
          />
        </TextBox>
      </Polygon>
    </>
  );
};

export default PolygonObj;
