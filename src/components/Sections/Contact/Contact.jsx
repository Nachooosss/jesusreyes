import React from "react";
import Card from "../../StyledComponents/Card/Card";
import Txt from "../../StyledComponents/Txt/Txt";
import { Email, WhatsApp } from "@mui/icons-material";

const Contact = () => {
  const handleLink = (item) => {
    window.open(item.link, "_blank");
  };
  const Icons = [
    {
      type: Email,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jmrg5364@gmail.com",
      txtTooltip: "Send me a Email",
    },
    {
      type: WhatsApp,
      link: "https://wa.me/+5353196814",
      txtTooltip: "Send me a message",
    },
  ];
  const Elements = () => {
    return (
      <>
        {Icons.map((Icon, index) => {
          const IconComponent = Icon.type;
          return (
            <div key={index} style={{ padding: "10px" }}>
              <IconComponent
                className="IconContact"
                onClick={() => handleLink(Icon)}
              ></IconComponent>
              <div>
                <Txt txt={Icon.txtTooltip} $txtaling="center"></Txt>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  const title = "Talk with me?";
  return (
    <>
      <Card
        children={
          <>
            <div style={{ display: "flex" }}>
              <Elements></Elements>
            </div>
          </>
        }
        title={title}
      />
    </>
  );
};

export default Contact;
