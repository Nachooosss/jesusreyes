import React from "react";
import styled from "styled-components";

const TxtTitle = styled.p`
  cursor: default;
  margin: 0;
  padding-right: 5px;
  @media screen and (min-width: 320px) {
    font-size: 2rem !important;
  }
  @media screen and (min-width: 540px) {
    font-size: 2.4rem !important;
  }
  @media screen and (min-width: 768px) {
    font-size: 3rem !important;
  }
`;

const Title = (props) => {
  return <TxtTitle>{props.txt}</TxtTitle>;
};

export default Title;
