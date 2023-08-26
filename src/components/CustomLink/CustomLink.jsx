import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CustomLink.css";
const CustomLink = ({ delay, replace, state, to, children, ...props }) => {
  const navigate = useNavigate();
  const timerRef = useRef();
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const clickHandler = (e) => {
    e.preventDefault();
    timerRef.current = setTimeout(navigate, delay, to, { replace, state });
  };
  return (
    <>
      <Link className="link" to={to} {...props} onClick={clickHandler}>
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
