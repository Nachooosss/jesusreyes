import React from "react";
import Navbar from "./Sections/Navbar/Navbar";
import Skills from "./Sections/Skills/Skills";
import Footer from "./Sections/Footer/Footer";

const Main = () => {
  return (
    <>
      <section>
        <Navbar></Navbar>
      </section>
      <section>
        <Skills></Skills>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Main;
