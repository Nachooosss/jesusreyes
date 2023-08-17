import React from "react";
import { useDispatch } from "react-redux";
import { styled, useTheme } from "styled-components";
import { Menudesactive, desactive } from "../../../features/data/dataslice";
import { Close } from "@mui/icons-material";
const CloseContainer = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 0.01px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 320px) {
    width: 75px;
    height: 75px;
  }
`;
const CloseSelector = styled.div`
  position: absolute;
  z-index: 1;
  width: 80px;
  height: 80px;
  display: flex;
  background-color: ${(props) => props.theme.color.primaryLight};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.7s ease-in-out;
  transition-delay: 0.3s;
  transform: ${(props) => (props.$active ? `rotate(180deg)` : `rotate(0deg)`)};
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  @media screen and (min-width: 320px) {
    width: 65px;
    height: 65px;
  }
  @media screen and (min-width: 540px) {
    margin-left: -10px;
  }
  @media screen and (min-width: 540px) {
    margin-left: -10px;
  }
`;
const CloseDial = ({ active, isActiveSkill, activeMenu }) => {
  const dispatch = useDispatch();
  const handleButton = () => {
    if (isActiveSkill && isActiveSkill !== undefined) {
      dispatch(desactive());
    }
    if (activeMenu && activeMenu !== undefined) {
      dispatch(Menudesactive());
    }
  };
  const theme = useTheme();
  return (
    <>
      <CloseContainer>
        <CloseSelector onClick={() => handleButton()} $active={active}>
          <Close
            style={{
              color: theme.color.secundaryLight,
              transform: active ? "rotate(180deg)" : "rotate(0deg)",
              transition: "1s ease-in-out",
            }}
          ></Close>
        </CloseSelector>
      </CloseContainer>
    </>
  );
};

export default CloseDial;
