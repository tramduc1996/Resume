import React from "react";
import UserHeader from "./Components/UserHeader/UserHeader.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experiences from "./Components/Experiences/Experiences.jsx";
import Education from "./Components/Education/Education.jsx";

export const Wrapper = () => {
  return (
    <React.Fragment>
      <UserHeader />
      <Skills />
      <Experiences />
      <Education />
    </React.Fragment>
  );
};
