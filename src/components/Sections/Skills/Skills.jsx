import React, { useState } from "react";
import { styled } from "styled-components";
import Dialog from "../../StyledComponents/Dialog/Dialog";
import DialComponent from "../../StyledComponents/DialComponent/DialComponent";
import { useSelector, useDispatch } from "react-redux";
import { active, desactive } from "../../../features/data/dataslice";
import CloseDial from "../../StyledComponents/Dialog/CloseDial";

const Gallery = styled.ul`
  display: grid;
  grid-auto-rows: 20vh;
  grid-template-columns: repeat(6, 100px);
  gap: 5px;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(2, 100px);
    grid-auto-rows: 35vh;
    margin-top: 160dvh;
  }
  @media screen and (min-width: 360px) {
    grid-auto-rows: 31vh;
  }
  @media screen and (min-width: 540px) {
    grid-auto-rows: 32vh;
  }
  @media screen and (min-width: 600px) {
    grid-auto-rows: 22vh;
    margin-top: 105dvh;
  }
  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(4, 100px);
    grid-auto-rows: 20vh;
    gap: 20px;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(6, 100px);
    gap: 5px;
    grid-auto-rows: 20vh;
  }
  @media screen and (min-width: 1200px) {
    grid-auto-rows: 25vh;
  }
  @media screen and (min-width: 1280px) {
    grid-auto-rows: 20vh;
  }
  @media screen and (min-width: 1440px) {
    grid-auto-rows: 18vh;
  }
  @media screen and (min-width: 1600px) {
    grid-auto-rows: 20vh;
  }
  @media screen and (min-width: 1620px) {
    grid-auto-rows: 15vh;
  }
  @media screen and (min-width: 1920px) {
    grid-auto-rows: 15vh;
  }
`;
const GalleryItem = styled.li`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${(props) => props.theme.color.primary};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  grid-column: span 2;
  height: 200px;
  transition: all 500ms ease-in-out;
  cursor: pointer;
  background-blend-mode: multiply;

  &:hover {
    background-color: ${(props) => props.theme.color.primaryLight};
    background-image: url(${(p) => (p.$img ? p.$img : "")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    z-index: 2;
  }
  &:nth-child(11n + 1) {
    grid-column: 2 / span 2;
  }
  &:nth-child(11n + 3) {
    grid-column: 1 / span 2;
  }
  &:nth-child(11n + 6) {
    grid-column: 2 / span 2;
  }
  @media screen and (min-width: 320px) {
    &:nth-child(11n + 1) {
      grid-column: span 2;
    }
    &:nth-child(11n + 3) {
      grid-column: span 2;
    }
    &:nth-child(11n + 6) {
      grid-column: span 2;
    }
  }

  @media screen and (min-width: 540px) {
    &:nth-child(11n + 1) {
      grid-column: span 2;
    }
    &:nth-child(11n + 3) {
      grid-column: span 2;
    }
    &:nth-child(11n + 6) {
      grid-column: span 2;
    }
  }
  @media screen and (min-width: 992px) {
    &:nth-child(11n + 1) {
      grid-column: 2 / span 2;
    }
    &:nth-child(11n + 3) {
      grid-column: 1 / span 2;
    }
    &:nth-child(11n + 6) {
      grid-column: 2 / span 2;
    }
  }
`;
const Skills = () => {
  const [selected, setselected] = useState([]);
  const isActiveSkill = useSelector((state) => state.data.isActiveSkill);
  const skillsItems = useSelector((state) => state.data.skillsItems);
  const dispatch = useDispatch();
  const handleContent = (element) => {
    setselected(element);
    if (isActiveSkill) {
      dispatch(desactive());
    } else {
      dispatch(active());
    }
  };
  return (
    <>
      <Gallery
        style={{
          animationDuration: "500ms",
          animationName: "fadeInLeft",
        }}
      >
        {skillsItems.map((item, index) => (
          <GalleryItem
            $img={item.img}
            key={index}
            onClick={() => handleContent(item.items)}
          >
            {item.name}
          </GalleryItem>
        ))}
      </Gallery>
      <Dialog
        active={isActiveSkill}
        content={() => {
          return (
            <>
              <CloseDial
                active={isActiveSkill}
                isActiveSkill={isActiveSkill}
              ></CloseDial>
              <DialComponent items={selected}></DialComponent>
            </>
          );
        }}
      ></Dialog>
    </>
  );
};

export default Skills;
