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
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.secundaryLight};
  color: ${(props) => props.theme.color.secundaryLight};
  transition: 1s linear;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;
`;
const AnimationSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  background-color: transparent;
  transition: 1s linear;
  overflow-y: auto;
  overflow-x: hidden;
  animation-duration: 500ms;
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
