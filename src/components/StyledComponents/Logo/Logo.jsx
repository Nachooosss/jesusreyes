import { useSelector } from "react-redux";
import { styled } from "styled-components";
import "animate.css";

const Logo = styled.div`
  width: 60px;
  height: 70px;
  ${(props) => Img}
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: 120ms linear;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(7px 7px 2px ${(props) => props.theme.color.shadows});
    animation: tada 1s infinite;
  }
`;
const Img = () => {
  const LogoImg = useSelector((state) => state.data.Logo);
  return `
  background-image: url(${LogoImg});
`;
};
export default Logo;
