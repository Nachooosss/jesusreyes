import React from "react";
import { useDispatch } from "react-redux";
import { styled, useTheme } from "styled-components";
import { Menudesactive, desactive } from "../../../features/data/dataslice";
import { Close } from "@mui/icons-material";
const CloseContainer = styled.div`
  position: absolute;
  overflow: hidden;
  border-radius: 0.01px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 320px) {
    width: 75px;
    height: 75px;
  }
  @media screen and (min-width: 992px) {
    width: 125px;
    height: 125px;
  }
`;
const CloseSelector = styled.div`
  position: absolute;

  display: flex;
  background-color: ${(props) => props.theme.color.primaryLight};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 900ms ease;
  transition-delay: 200ms;
  transform: ${(props) => (props.$active ? `rotate(180deg)` : `rotate(0deg)`)};
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  @media screen and (min-width: 320px) {
    width: 65px;
    height: 65px;
  }
  @media screen and (min-width: 992px) {
    margin-left: -10px;
    width: 115px;
    height: 115px;
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
              transition: "1s ease",
            }}
          ></Close>
        </CloseSelector>
      </CloseContainer>
    </>
  );
};

export default CloseDial;
