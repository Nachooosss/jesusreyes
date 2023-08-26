import React from "react";
import { styled } from "styled-components";
import { Copyright } from "@mui/icons-material";
import "./Footer.css";
const BarFooter = styled.div`
  cursor: default;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 20px;
  margin-bottom: 7px;
  color: ${(props) => props.theme.color.primary};
`;
const Footer = () => {
  return (
    <>
      <BarFooter
        className="animate__animated
      animate__slideInUp
      animate__repeat-1
      animate__delay-6s"
      >
        Handcrafted by me{" "}
        <Copyright className="copyright" fontSize="small"></Copyright>
        2023
      </BarFooter>
    </>
  );
};

export default Footer;
