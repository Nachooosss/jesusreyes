import React, { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import DialogContent from "./DialogContent";
import "animate.css";

const DialogTemplate = styled.div`
  display: flex;
  visibility: ${(props) => (props.$opacity > 0 ? `visible` : `hidden`)};
  ${(props) => (props.$active ? show : hide)};
  position: fixed;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease;
  animation-duration: 500ms;
  animation-iteration-count: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  height: 100vh;
  background-color: ${(props) => props.theme.color.coverPrimary};
`;
const show = css`
  visibility: visible;
  opacity: 1;
  animation-name: slideInDown;
`;
const hide = css`
  animation-name: slideOutDown;
  opacity: 0;
`;
const TempOpacity = () => {
  return document.querySelector(DialogTemplate);
};
const Dialog = ({ content, active }) => {
  const [opacity, setopacity] = useState(0);
  useEffect(() => {
    setopacity(
      window.getComputedStyle(TempOpacity()).getPropertyValue("opacity")
    );
  }, [() => TempOpacity()]);

  return (
    <DialogTemplate
      $opacity={opacity}
      className="animate__animated"
      $active={active}
    >
      <DialogContent>{content()}</DialogContent>
    </DialogTemplate>
  );
};

export default Dialog;
