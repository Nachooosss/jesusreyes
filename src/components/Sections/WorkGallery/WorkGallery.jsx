import React from "react";
import { styled } from "styled-components";
import FreelanceImg from "../../../media/companies/freelance.png";
import Companies from "../../../media/skills/interpersonal/relationshipmanagent.jpeg";
import Others from "../../../media/skills/testingdebug/proactive.png";
import Old from "../../../media/skills/testingdebug/acceptance.jpeg";
const GalleryW = styled.div`
  display: grid;
  grid-auto-rows: 20vh;
  justify-content: center;
  margin: auto;
  --g: 5px;
  height: 400px;
  width: 400px;
  @media screen and (min-width: 320px) {
    height: 300px !important;
    width: 300px !important;
  }
  @media screen and (min-width: 720px) {
    height: 400px !important;
    width: 400px !important;
  }
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
`;
/* ${GalleryImg}:nth-child(1) ${GalleryImg} {*/

const GalleryImg = styled.div`
  grid-area: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(var(--_x, 0), var(--_y, 0));
  cursor: pointer;
  height: 400px;
  width: 400px;

  margin: auto;
  color: ${(props) => props.theme.color.secundaryLight};
  background-color: ${(props) => props.theme.color.primary};
  z-index: 0;
  transition: all 400ms ease;
  background-blend-mode: overlay;
  background-image: url(${(p) => (p.$src ? p.$src : "")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &:hover {
    --_i: 1;
    z-index: 1;
    transform: translate(0, 0);
  }
  &:nth-child(1) {
    clip-path: polygon(
      50% 50%,
      calc(50% * var(--_i, 0)) calc(120% * var(--_i, 0)),
      0 calc(100% * var(--_i, 0)),
      0 0,
      100% 0,
      100% calc(100% * var(--_i, 0)),
      calc(100% - 50% * var(--_i, 0)) calc(120% * var(--_i, 0))
    );
    --_y: calc(-1 * var(--g));
  }
  &:nth-child(2) {
    clip-path: polygon(
      50% 50%,
      calc(100% - 120% * var(--_i, 0)) calc(50% * var(--_i, 0)),
      calc(100% - 100% * var(--_i, 0)) 0,
      100% 0,
      100% 100%,
      calc(100% - 100% * var(--_i, 0)) 100%,
      calc(100% - 120% * var(--_i, 0)) calc(100% - 50% * var(--_i, 0))
    );
    --_x: var(--g);
  }
  &:nth-child(3) {
    clip-path: polygon(
      50% 50%,
      calc(100% - 50% * var(--_i, 0)) calc(100% - 120% * var(--_i, 0)),
      100% calc(100% - 120% * var(--_i, 0)),
      100% 100%,
      0 100%,
      0 calc(100% - 100% * var(--_i, 0)),
      calc(50% * var(--_i, 0)) calc(100% - 120% * var(--_i, 0))
    );
    --_y: var(--g);
  }
  &:nth-child(4) {
    clip-path: polygon(
      50% 50%,
      calc(120% * var(--_i, 0)) calc(50% * var(--_i, 0)),
      calc(100% * var(--_i, 0)) 0,
      0 0,
      0 100%,
      calc(100% * var(--_i, 0)) 100%,
      calc(120% * var(--_i, 0)) calc(100% - 50% * var(--_i, 0))
    );
    --_x: calc(-1 * var(--g));
  }
  @media screen and (min-width: 320px) {
    height: 300px !important;
    width: 300px !important;
  }
  @media screen and (min-width: 720px) {
    height: 400px !important;
    width: 400px !important;
  }
`;
const dataImg = [
  { img: Companies, txt: "Companies", link: "" },
  { img: FreelanceImg, txt: "Freelancer", link: "" },
  { img: Old, txt: "Old Brifcase", link: "" },
  { img: Others, txt: "Others", link: "" },
];
const WorkGallery = () => {
  return (
    <GalleryW
      style={{ animationName: "fadeInLeft", animationDuration: "500ms" }}
    >
      {dataImg.map((item, index) => {
        return (
          <GalleryImg key={index} $src={item.img}>
            <h1>{item.txt}</h1>
          </GalleryImg>
        );
      })}
    </GalleryW>
  );
};

export default WorkGallery;
