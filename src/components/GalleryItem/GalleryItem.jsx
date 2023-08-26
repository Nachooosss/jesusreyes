import { styled } from "styled-components";

const GalleryItem = styled.ul`
  background-color: ${(props) => props.theme.primary};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  grid-column: span 2;
  height: 200px;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.dashboard} !important;
  }
`;

export default GalleryItem;
