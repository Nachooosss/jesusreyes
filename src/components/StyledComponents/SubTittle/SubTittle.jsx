import React from "react";
import { styled } from "styled-components";

const TxtSub = styled.span`
  margin: 0;
  cursor: default;
  padding: 0;
  @media screen and (min-width: 320px) {
    font-size: 1.2rem !important;
  }
  @media screen and (min-width: 540px) {
    font-size: 1.3rem !important;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem !important;
  }
`;
const SubTittle = (props) => {
  return <TxtSub>{props.txt}</TxtSub>;
};

export default SubTittle;
