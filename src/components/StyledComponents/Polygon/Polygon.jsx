import styled from "styled-components";

const Polygon = styled.div`
  position: ${(prop) => (prop.$position ? prop.$position : "relative")};
  opacity: ${(prop) => (prop.$opacity ? prop.$opacity : "1")};
  height: ${(prop) => (prop.$height ? prop.$height : "400px")};
  width: ${(prop) => (prop.$width ? prop.$width : "400px")};
  top: ${(prop) => (prop.$top ? prop.$top : "auto")};
  bottom: ${(prop) => (prop.$bottom ? prop.$bottom : "auto")};
  left: ${(prop) => (prop.$left ? prop.$left : "auto")};
  right: ${(prop) => (prop.$right ? prop.$right : "auto")};
  background-color: ${(prop) =>
    prop.$bg ? prop.$bg : prop.theme.color.primary};
  ${(prop) => (prop.$AnimationK ? prop.$AnimationK : "")};
  animation-delay: ${(prop) =>
    prop.$animation_delay ? prop.$animation_delay : "0"};
  animation-duration: ${(prop) =>
    prop.$animation_duration ? prop.$animation_duration : "0"};
  margin: auto;
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  transition: 0.8s linear;

  @media screen and (min-width: 320px) {
    height: ${(prop) => (prop.$height ? prop.$height : "250px")};
    width: ${(prop) => (prop.$width ? prop.$width : "250px")};
  }
  @media screen and (min-width: 540px) {
    height: ${(prop) => (prop.$height ? prop.$height : "350px")};
    width: ${(prop) => (prop.$width ? prop.$width : "350px")};
  }
  @media screen and (min-width: 768px) {
    height: ${(prop) => (prop.$height ? prop.$height : "400px")};
    width: ${(prop) => (prop.$width ? prop.$width : "400px")};
  }
`;
export default Polygon;
