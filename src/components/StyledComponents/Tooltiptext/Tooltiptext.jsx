import React from "react";
import { styled } from "styled-components";
const Tooltip = styled.span`
  visibility: hidden;
  color: ${(props) => props.theme.color.primary};
  position: absolute;
  width: max-content;
  margin-top: 10px;
  margin-left: 10px;
  background-color: ${(props) => props.theme.color.secundaryLight};
  padding: 2px;
  border: 1px solid ${(props) => props.theme.color.secundary};
`;
const Tooltiptext = ({ txt, Setclass }) => {
  return (
    <>
      <Tooltip className={Setclass}>{txt}</Tooltip>
    </>
  );
};

export default Tooltiptext;
