import React from "react";
import { styled, keyframes, css } from "styled-components";
import { useSelector } from "react-redux";

const DialElement = styled.div`
  overflow: hidden;
  border-radius: 0.01px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: 1s ease-in-out;
  animation: ${(props) => (props.$isActive ? "Startanimation" : "Endanimation")}
    1s linear forwards;
  animation-iteration-count: 1;
  @keyframes Startanimation {
    from {
      transform: rotate("0deg") translateX("100px");
    }
    to {
      rotate: calc(360deg / 6 * var(--i));
    }
  }
  @keyframes Endanimation {
    from {
      transform: rotate(calc(360deg / 6 * var(--i)));
    }
    to {
      transform: rotate(0deg) translateX(100px);
    }
  }

  @media screen and (min-width: 320px) {
    width: 110px;
    height: 110px;
    transform-origin: ${(props) => (props.$isActive ? `160px` : `0px`)};
    left: ${(props) => (props.$isActive ? `-60px` : `0px`)};
  }
  @media screen and (min-width: 576px) {
    margin-left: -10px;
  }
  @media screen and (min-width: 720px) {
    margin-left: 0px;
    width: 150px;
    height: 150px;
    transform-origin: ${(props) => (props.$isActive ? `280px` : `100px`)};
    left: ${(props) => (props.$isActive ? `-180px` : `-50px`)};
  }
`;
const DialButton = styled.div`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: 1.5s ease-in-out;
  transform: rotate(calc(360deg / -6 * var(--i)));
  background-color: ${(props) => props.theme.color.primaryLighting};
  background-image: url(${(p) => (p.$img ? p.$img : "")});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-blend-mode: multiply;
  transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  @media screen and (min-width: 320px) {
    width: 95px;
    height: 95px;
  }
  @media screen and (min-width: 720px) {
    width: 135px;
    height: 135px;
  }
`;
const DialContainer = styled.div`
  @media screen and (min-width: 320px) {
    width: 95px;
    height: 95px;
  }
  @media screen and (min-width: 720px) {
    width: 135px;
    height: 135px;
  }
`;
const DialContent = styled.div`
  position: absolute;
  top: 0;
  display: grid;
  font-size: 0.8rem;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
`;
const ProgressPolygon = styled.svg`
  @media screen and (min-width: 320px) {
    width: 100px;
    height: 100px;
    transform: scale(1);
    margin-left: -3px;
  }
  @media screen and (min-width: 720px) {
    width: 135px;
    height: 135px;
    margin-left: unset;
    transform: scale(1.25);
  }
`;

const Polygonstroke = keyframes`
    0% {
      stroke-dashoffset: 315px;
    }
    100%{
      stroke-dashoffset: calc(315px - (315px * var(--cp)) / 100);
    }`;
const startPolygon = css`
  animation: ${Polygonstroke} 1s linear forwards;
  animation-iteration-count: 1;
  animation-delay: 1s;
`;
const Polygon = styled.polygon`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 10px;
  stroke: ${(props) => props.theme.color.primaryLighting};
  stroke-linecap: round;
  transition: all 1ms linear;
  stroke-dasharray: 315px;
  &:nth-child(2) {
    stroke: ${(props) => props.theme.color.primaryDark};
    stroke-dashoffset: 315px;
    ${(props) => (props.$isActive ? startPolygon : "")};
  }
  @media screen and (min-width: 320px) {
    transform: translate(0px, -3px);
  }
  @media screen and (min-width: 720px) {
    transform: translate(17px, 17px);
    stroke-width: 6px;
  }
`;
const DialComponent = ({ items }) => {
  const isActiveSkill = useSelector((state) => state.data.isActiveSkill);
  return (
    <>
      {items.map((items, index) => {
        return (
          <DialElement
            key={index}
            style={{
              "--i": index,
              "--cp": items.progress,
              opacity: items.name.length === 0 ? "0" : "",
            }}
            $isActive={isActiveSkill}
          >
            <DialButton $img={items.img}>
              <DialContainer>
                <ProgressPolygon preserveAspectRatio="none">
                  <Polygon points="50 3, 100 28, 100 75,50 100,3 75,3 25"></Polygon>
                  <Polygon
                    $isActive={isActiveSkill}
                    points="50 3, 100 28, 100 75,50 100,3 75,3 25"
                  ></Polygon>
                </ProgressPolygon>
                <DialContent>
                  <div
                    style={{
                      marginBottom: "-50px",
                    }}
                  >
                    <p
                      style={{
                        flex: "1 1 auto",
                        padding: "5px",
                        cursor: "default",
                      }}
                    >
                      {items.name}
                    </p>
                  </div>
                  <div style={{ cursor: "default" }}>{items.progress}%</div>
                </DialContent>
              </DialContainer>
            </DialButton>
          </DialElement>
        );
      })}
    </>
  );
};

export default DialComponent;
