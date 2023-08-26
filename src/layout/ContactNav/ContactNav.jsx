import React from "react";
import Nav from "../../components/Nav/Nav";
import Tooltiptext from "../../components/Tooltiptext/Tooltiptext";
import "./ContactNav.css";
import { Email, WhatsApp, GitHub, LinkedIn } from "@mui/icons-material";
import { useTheme } from "styled-components";
const Icons = [
  {
    type: Email,
    link: "mailto:jmrg5364@gmail.com ",
    txtTooltip: "jmrg5364@gmail.com",
  },
  {
    type: WhatsApp,
    link: "https://wa.me/+5353196814",
    txtTooltip: "+53 53196814",
  },
  {
    type: GitHub,
    link: "https://github.com/nachooosss",
    txtTooltip: "github.com/nachooosss",
  },
  {
    type: LinkedIn,
    link: "https://www.linkedin.com/in/jesusmreyesgarcia",
    txtTooltip: "linkedin.com/in/jesusmreyesgarcia",
  },
];

const ContactNav = () => {
  const handleLink = (item) => {
    window.open(item.link, "_blank");
  };
  const theme = useTheme();
  const elemnts = () => {
    return (
      <>
        {Icons.map((Icon, index) => {
          const IconComponent = Icon.type;
          return (
            <div key={index}>
              <IconComponent
                className="IconContact"
                style={{ color: theme.color.primary }}
                onClick={() => handleLink(Icon)}
              ></IconComponent>
              <Tooltiptext
                Setclass="Tooliptext"
                txt={Icon.txtTooltip}
              ></Tooltiptext>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <Nav items={elemnts()}></Nav>
    </>
  );
};

export default ContactNav;
