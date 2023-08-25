import styled from "styled-components";
import { useSelector } from "react-redux";

const Avatar = styled.div`
  position: ${(p) => (p.$position ? p.$position : "relative")};
  right: ${(p) => (p.$right ? p.$right : "0")};
  border-radius: 30%;
  ${(props) => ImgIA}
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  animation-name: "fadeInRight";
  animation-duration: 500ms;
  &:hover {
    ${(p) => (p.$hoverActive ? ImgOR : ImgIA)};
  }
`;
const ImgIA = (props) => {
  const IA = useSelector((state) => state.data.IA);
  return `
  background: url(${IA}) center no-repeat;
  background-size: cover;
`;
};
const ImgOR = (props) => {
  const Original = useSelector((state) => state.data.Original);
  return `
  background: url(${Original}) center no-repeat;
  background-size: cover;
`;
};

export default Avatar;
