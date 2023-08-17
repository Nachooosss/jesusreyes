import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import {
  Home,
  Person,
  Work,
  Timeline,
  IntegrationInstructions,
  ContactPhone,
  FileDownloadOutlined,
  DarkMode,
  LightMode,
  Menu,
} from "@mui/icons-material";
import "./LinksMenu.css";
import CV from "../../../media/resume/CV Jesús Miguel Reyes García 2023.pdf";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnimationIn,
  setAnimationOut,
  setDarkTheme,
  setLightTheme,
  Menuactive,
  Menudesactive,
} from "../../../features/data/dataslice";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import CustomLink from "../CustomLink/CustomLink";
import Dialog from "../Dialog/Dialog";
import CloseDial from "../Dialog/CloseDial";

const IconsMenu = [
  { type: Home, link: "/", txtTooltip: "Home", display: true },
  { type: Person, link: "/AboutMe", txtTooltip: "About me", display: true },
  { type: Work, link: "/WorkGallery", txtTooltip: "Work", display: true },
  { type: Timeline, link: "/Timeline", txtTooltip: "Timeline", display: true },
  {
    type: IntegrationInstructions,
    link: "/Skills",
    txtTooltip: "Skills",
    display: true,
  },
  {
    type: ContactPhone,
    link: "/Contact",
    txtTooltip: "Contact",
    display: true,
  },
  {
    type: FileDownloadOutlined,
    link: useLocation.pathname,
    txtTooltip: "Resume",
    display: true,
  },
  {
    type: LightMode,
    link: useLocation.pathname,
    txtTooltip: "Light",
    display: false,
  },
  {
    type: DarkMode,
    link: useLocation.pathname,
    txtTooltip: "Dark",
    display: true,
  },
];
const Tooltiptext = styled.span`
  visibility: hidden;
  color: ${(props) => props.theme.color.primary};
  position: absolute;
  display: flex;
  top: 0;
  margin-top: 7dvh;
  background-color: ${(props) => props.theme.color.secundaryLight};
  padding: 2px;
  border: 1px solid ${(props) => props.theme.color.secundary};
  @media screen and (min-width: 1280px) {
    margin-top: 10dvh;
  }
  @media screen and (min-width: 1500px) {
    margin-top: 7dvh;
  }
  @media screen and (min-width: 1600px) {
    margin-top: 10dvh;
  }
`;
const ListMenu = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  margin-right: 2%;
`;
const ButtonMenu = styled.button`
  border: 0;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme.color.primary};
`;
const DialIcon = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 0.01px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: 500ms ease-in-out;
  transform-origin: ${(props) => (props.$isActive ? `200px` : `50px`)};
  left: ${(props) => (props.$isActive ? `-100px` : `0px`)};
  opacity: ${(props) => (props.$isActive ? `1` : `0`)};
  transform: rotate("0deg") translateX("100px");
  animation: ${(props) => (props.$isActive ? "Startanimatio" : "Endanimatio")}
    500ms linear forwards;
  animation-iteration-count: 1;
  @keyframes Startanimatio {
    from {
      transform: rotate("0deg") translateX("100px");
    }
    to {
      rotate: calc(360deg / 9 * var(--i));
    }
  }
  @keyframes Endanimatio {
    from {
      transform: rotate(calc(360deg / 9 * var(--i)));
    }
    to {
      transform: rotate(0deg) translateX(100px);
    }
  }
  @media screen and (min-width: 320px) {
    transform-origin: ${(props) => (props.$isActive ? `150px` : `50px`)};
    left: ${(props) => (props.$isActive ? `-50px` : `10px`)};
    width: 65px;
    height: 65px;
  }
  @media screen and (min-width: 540px) {
    transform-origin: ${(props) => (props.$isActive ? `200px` : `50px`)};
    left: ${(props) => (props.$isActive ? `-100px` : `0px`)};
    width: 70px;
    height: 70px;
  }
`;
const DialButton = styled.div`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: ${(props) => props.theme.color.primary};
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 500ms ease-in-out;
  transform: rotate(calc(360deg / -9 * var(--i)));
  color: ${(props) => props.theme.color.secundaryLight};
  @media screen and (min-width: 320px) {
    width: 55px;
    height: 55px;
  }
  @media screen and (min-width: 540px) {
    width: 65px;
    height: 65px;
  }
`;
const LinksMenu = () => {
  const theme = useTheme();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleLink = (item) => {
    switch (item.type) {
      case FileDownloadOutlined:
        window.open(CV, "_blank");
        break;
      case LightMode:
        dispatch(setLightTheme());
        IconsMenu[7].display = false;
        IconsMenu[8].display = true;
        break;
      case DarkMode:
        dispatch(setDarkTheme());
        IconsMenu[8].display = false;
        IconsMenu[7].display = true;
        break;
      default:
        if (location.pathname !== item.link) {
          dispatch(setAnimationOut());
          setTimeout(() => {
            dispatch(setAnimationIn());
            dispatch(Menudesactive());
          }, 550);
        }
        break;
    }
  };

  const [handleMenu, sethandleMenu] = useState(true);
  const activeMenu = useSelector((state) => state.data.activeMenu);
  useEffect(() => {
    if (window.innerWidth < 992) {
      sethandleMenu(false);
    } else {
      sethandleMenu(true);
    }
  }, []);

  const icons = () => {
    return (
      <>
        {IconsMenu.map((Icon, index) => {
          const IconMenu = Icon.type;
          return (
            <div
              key={index}
              style={{
                display: Icon.display ? "flex" : "none",
                width: "40px",
                padding: "8px",
              }}
              onClick={() => handleLink(Icon)}
            >
              <CustomLink
                className="IconM animate__animated"
                delay={500}
                to={Icon.link}
                children={
                  <>
                    <IconMenu className="Ico"></IconMenu>
                  </>
                }
                style={{ color: theme.color.primary }}
              ></CustomLink>
              <Tooltiptext className="TooliptextM">
                {Icon.txtTooltip}
              </Tooltiptext>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <ListMenu $isActive={activeMenu}>
      {handleMenu ? (
        icons()
      ) : (
        <>
          <ButtonMenu
            className="IconM animate__animated"
            onClick={() => dispatch(Menuactive())}
          >
            <Menu className="IconM"></Menu>
          </ButtonMenu>
          <Tooltiptext className="TooliptextM">Menu</Tooltiptext>
          <Dialog
            active={activeMenu}
            content={() => {
              return (
                <>
                  <CloseDial
                    active={activeMenu}
                    activeMenu={activeMenu}
                  ></CloseDial>
                  {IconsMenu.map((Icon, index) => {
                    const IconMenu = Icon.type;
                    return (
                      <>
                        <DialIcon
                          key={index}
                          style={{
                            display: Icon.display ? "flex" : "none",
                            "--i": index,
                          }}
                          $isActive={activeMenu}
                          onClick={() => handleLink(Icon)}
                        >
                          <DialButton>
                            <CustomLink
                              delay={500}
                              to={Icon.link}
                              children={
                                <>
                                  <IconMenu></IconMenu>
                                </>
                              }
                              style={{ color: theme.color.secundaryLight }}
                            ></CustomLink>
                          </DialButton>
                        </DialIcon>
                      </>
                    );
                  })}
                </>
              );
            }}
          ></Dialog>
        </>
      )}
    </ListMenu>
  );
};

export default LinksMenu;
