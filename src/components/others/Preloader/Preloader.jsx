import React, { useEffect } from "react";
import "./Preloader.css";
import "animate.css";

const Preloader = () => {
  // const textLines = ["Loading.", "Loading..", "Loading..."];
  // {/* <Typed strings={textLines} typeSpeed={100} backDelay={60} loop /> */}
  useEffect(() => {
    console.log("first");
  }, []);

  return (
    <>
      <div className="Glass animate__animated animate__hinge animate__repeat-1 animate__delay-2s">
        <div className="GlassEffect"></div>
      </div>
      <div className="GlassTxt"></div>
    </>
  );
};

export default Preloader;
