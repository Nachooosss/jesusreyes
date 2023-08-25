import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import "./TimeLine.css";
export default function CustomizedTimeline() {
  const companies = useSelector((state) => state.data.timelinecompanies);
  const theme = useTheme();

  return (
    <>
      <Timeline
        className="timeline"
        position="alternate"
        style={{
          cursor: "default",
        }}
      >
        {companies.map((item, index) => {
          return (
            <TimelineItem key={index} className="itemtimeline">
              <TimelineOppositeContent
                className="context"
                style={{
                  color: theme.color.primary,
                  animationDuration: "500ms",
                  animationName: "fadeInRight",
                }}
                sx={{
                  m: "auto 0",
                }}
                align="right"
                variant="body2"
              >
                {item.time}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector
                  sx={{ bgcolor: theme.color.primary }}
                  style={{
                    animationDuration: "500ms",
                    animationName: "fadeInRight",
                  }}
                />
                <img
                  src={item.img}
                  alt=""
                  width={"40px"}
                  height={"40px"}
                  style={{
                    borderRadius: "100%",
                    animationDuration: "500ms",
                    animationName: "fadeInLeft",
                  }}
                />
                <TimelineConnector
                  style={{
                    animationDuration: "500ms",
                    animationName: "fadeInRight",
                  }}
                  sx={{ bgcolor: theme.color.primary }}
                />
              </TimelineSeparator>
              <TimelineContent
                style={{
                  animationDuration: "500ms",
                  animationName: "fadeInLeft",
                }}
              >
                <Typography
                  className="context"
                  component="span"
                  color={theme.color.primary}
                >
                  {item.place}
                </Typography>
                <Typography className="context" color={theme.color.primary}>
                  {item.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
      ;
    </>
  );
}
