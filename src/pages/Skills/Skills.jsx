import React, { useState } from "react";
import { styled } from "styled-components";
import Dialog from "../../components/Dialog/Dialog";
import DialComponent from "../../components/DialComponent/DialComponent";
import { useSelector, useDispatch } from "react-redux";
import { active, desactive } from "../../store/dataslice";
import CloseDial from "../../components/Dialog/CloseDial";

const Gallery = styled.ul`
  display: grid;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(4, 50px);
    grid-auto-rows: 75px;
    gap: 3px;
  }
  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(6, 100px);
    grid-auto-rows: 150px;
  }
  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(6, 120px);
    grid-auto-rows: 180px;
  }
`;
const GalleryItem = styled.li`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${(props) => props.theme.color.primary};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: all 300ms ease-in-out;
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
  @media screen and (min-width: 320px) {
    height: 100px;
    width: 100px;
    grid-column: span 2;
    &:nth-child(11n + 1) {
      grid-column: 2 / span 2;
    }
    &:nth-child(11n + 4) {
      grid-column: 2 / span 2;
    }
    &:nth-child(11n + 7) {
      grid-column: 2 / span 2;
    }
  }
  @media screen and (min-width: 720px) {
    height: 200px;
    width: 200px;
    &:nth-child(11n + 4) {
      grid-column: span 2;
    }
    &:nth-child(11n + 6) {
      grid-column: 2 / span 2;
    }
    &:nth-child(11n + 7) {
      grid-column: span 2;
    }
  }

  @media screen and (min-width: 1600px) {
    height: 240px;
    width: 240px;
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
          animationDuration: "300ms",
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
