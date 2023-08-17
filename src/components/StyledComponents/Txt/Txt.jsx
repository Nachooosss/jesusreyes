import React from "react";
import { styled } from "styled-components";

const TxtSub = styled.div`
  text-align: ${(props) => (props.$textaling ? props.$textaling : "justify")};
  margin: 1%;
  padding: 1%;
  cursor: default;
  @media screen and (min-width: 768px) {
    font-size: x-large;
  }
`;
const Txt = (props) => {
  return <TxtSub $textaling={props.$txtaling}>{props.txt}</TxtSub>;
};

export default Txt;
