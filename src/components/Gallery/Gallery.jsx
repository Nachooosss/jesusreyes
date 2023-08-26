import { styled } from "styled-components";

const Gallery = styled.ul`
  display: grid;
  width: 100%;
  grid-auto-rows: 20vh;
  grid-template-columns: repeat(auto-fit, 100px);
  gap: 5px;
  margin: auto;
`;

export default Gallery;
