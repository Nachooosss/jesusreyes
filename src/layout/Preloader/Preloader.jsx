import React from "react";
import "animate.css";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const Glass = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 20%;
  right: 0;
  overflow: hidden;
  margin: auto;
  width: 120px;
  height: 130px;
  border: 1px solid #76323fb9;
  border-radius: 20px;
  box-shadow: 3px 3px 7px 1px #76323f5d;
  background-color: rgba(207, 207, 207, 0.185);
`;
const GlassEffect = styled.div`
  position: absolute;
  top: 0;
  width: 25px;
  height: 130px;
  background: rgba(255, 255, 255, 0.719);
  animation-duration: 2.5s;
  animation-name: Reflection;
  animation-iteration-count: infinite;
  animation-direction: normal;
  @keyframes Reflection {
    from {
      transform: skewX(45deg) translateX(-100px);
    }

    to {
      transform: skewX(45deg) translateX(230px);
    }
  }
`;
const Preloader = () => {
  const Logo = useSelector((state) => state.data.Logo);

  return (
    <>
      <Glass className="animate__animated animate__hinge animate__repeat-1 animate__delay-2s">
        <img srcSet={Logo} alt="" width={"120px"} height={"130px"} />
        <GlassEffect></GlassEffect>
      </Glass>
    </>
  );
};

export default Preloader;
