import React, { useEffect, useState } from "react";
import { css, styled, useTheme } from "styled-components";
import Polygon from "../Polygon/Polygon";

const AddAnimation = css`
  animation: animate 25s linear infinite;
  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-160dvh) rotate(720deg);
      opacity: 0;
    }
  }
  &:hover {
    transition: 500ms ease-in-out;
    background-color: ${(props) => props.theme.color.primary};
  }
`;

const PolygonsOptions1 = [
  {
    left: "25%",
    width: "80px",
    height: "80px",
    animation_delay: "0s",
  },
  {
    left: "10%",
    width: "20px",
    height: "20px",
    animation_delay: "2s",
    animation_duration: "12s",
  },
  {
    left: "70%",
    width: "20px",
    height: "20px",
    animation_delay: "4s",
  },
  {
    left: "40%",
    width: "60px",
    height: "60px",
    animation_delay: "11s",
  },
  {
    left: "65%",
    width: "20px",
    height: "20px",
    animation_delay: "1s",
  },
  {
    left: "75%",
    width: "110px",
    height: "110px",
    animation_delay: "7s",
  },
  {
    left: "35%",
    width: "120px",
    height: "120px",
    animation_delay: "3s",
  },
  {
    left: "50%",
    width: "25px",
    height: "25px",
    animation_delay: "15s",
    animation_duration: "45s",
  },
  {
    left: "20%",
    width: "15px",
    height: "15px",
    animation_delay: "2s",
    animation_duration: "35s",
  },
  {
    left: "85%",
    width: "80px",
    height: "80px",
    animation_delay: "0s",
    animation_duration: "15s",
  },
];
const PolygonsOptions2 = [
  {
    left: "25%",
    width: "80px",
    height: "80px",
    animation_delay: "0s",
  },
  {
    left: "10%",
    width: "20px",
    height: "20px",
    animation_delay: "2s",
    animation_duration: "12s",
  },
  {
    left: "70%",
    width: "20px",
    height: "20px",
    animation_delay: "4s",
  },
  {
    left: "40%",
    width: "60px",
    height: "60px",
    animation_delay: "11s",
  },
  {
    left: "65%",
    width: "20px",
    height: "20px",
    animation_delay: "1s",
  },
];
const AreaEffectPolygons = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
`;

const BackGroundEffect = () => {
  const theme = useTheme();
  const [PolygonsOptions, setPolygonsOptions] = useState(PolygonsOptions1);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setPolygonsOptions(PolygonsOptions2);
    } else {
      setPolygonsOptions(PolygonsOptions1);
    }
  }, []);
  return (
    <>
      <AreaEffectPolygons>
        {PolygonsOptions.map((item, index) => (
          <Polygon
            key={index}
            $position="absolute"
            $left={item.left}
            $height={item.height}
            $width={item.width}
            $bottom="-250px"
            $bg={theme.color.secundary}
            $AnimationK={AddAnimation}
            $animation_delay={item.animation_delay}
            $animation_duration={
              item.animation_duration ? item.animation_duration : "25s"
            }
          ></Polygon>
        ))}
      </AreaEffectPolygons>
    </>
  );
};

export default BackGroundEffect;
