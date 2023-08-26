import React from "react";
import Card from "../../components/Card/Card";
const AboutMe = () => {
  const txt =
    "Hello my name is Jesús, i am a software engineer who specializes in web development, especially frontend. My interest in web development started in 2017 making games with Construct 2. Currently, i am working on creating a CMS with Nuxt JS. My goal is to be a Full Stack Programmer. I like facing difficulties to learn more.";
  const title = "So, who am I?";

  return (
    <>
      <Card txt={txt} title={title} />
    </>
  );
};

export default AboutMe;
