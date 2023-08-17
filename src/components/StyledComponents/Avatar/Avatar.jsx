import styled from "styled-components";
import { useSelector } from "react-redux";

const Avatar = styled.div`
  display: flex;
  border: 2px solid transparent;
  position: ${(p) => (p.$position ? p.$position : "relative")};
  right: ${(p) => (p.$right ? p.$right : "0")};
  bottom: -20px;
  width: 200px;
  height: 300px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
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
  background: url(${IA});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
};
const ImgOR = (props) => {
  const Original = useSelector((state) => state.data.Original);
  return `
  background-image: url(${Original});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
};

export default Avatar;
