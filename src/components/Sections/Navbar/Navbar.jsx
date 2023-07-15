import React from "react";
import "./Navbar.css";
import "animate.css";

const Navbar = () => {
  return (
    <div
      className="animate__animated
      animate__slideInDown
      animate__repeat-1
      animate__delay-6s"
    >
      <div className="navbar">
        <div className="cover">
          <div className="navbar-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              consequuntur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              consequuntur!
            </p>
          </div>
        </div>
      </div>
      <p>Lorem*25</p>
    </div>
  );
};

export default Navbar;
