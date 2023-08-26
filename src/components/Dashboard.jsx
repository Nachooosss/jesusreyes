import React from "react";
import Header from "./Sections/Header/Header";
import AboutMe from "./Sections/AboutMe/AboutMe";
import Skills from "./Sections/Skills/Skills";
import Timeline from "./Sections/TimeLine/TimeLine";
import Contact from "./Sections/Contact/Contact";
import WorkGallery from "./Sections/WorkGallery/WorkGallery";
import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  width: 100dvw;
  position: absolute;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: ${(props) => props.theme.color.secundaryLight};
  transition: 300ms ease;
`;
const AnimationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: transparent;
  transition: 300ms ease;
  animation-duration: 300ms;
`;
const Components = [
  { type: Header, path: "/jesusreyes/" },
  { type: AboutMe, path: "/jesusreyes/AboutMe" },
  { type: WorkGallery, path: "/jesusreyes/WorkGallery" },
  { type: Timeline, path: "/jesusreyes/Timeline" },
  { type: Skills, path: "/jesusreyes/Skills" },
  { type: Contact, path: "/jesusreyes/Contact" },
];
const Dashboard = () => {
  const addanimation = useSelector((state) => state.data.AnimationDirection);
  // key={Math.random()}
  return (
    <>
      <Routes>
        {Components.map((item, index) => {
          const Element = item.type;
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <>
                  <Section key={index}>
                    <AnimationSection
                      style={{
                        animationName:
                          addanimation === "Out" ? "fadeOutRight" : "",
                      }}
                    >
                      <Element></Element>
                    </AnimationSection>
                  </Section>
                </>
              }
            />
          );
        })}
      </Routes>
    </>
  );
};

export default Dashboard;
