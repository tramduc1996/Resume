import React from "react";
import { resumeInfor } from "../../share/resumeInfor.js";

const Skill = () => {
  const skillList = resumeInfor.skills.map(item => (
    <p>
      <label>
        <b>{item.Name}:</b>
      </label>
      {item.ListItems}
    </p>
  ));

  return skillList;
};

const Skills = () => {
  return (
    <React.Fragment>
      <Skill />
    </React.Fragment>
  );
};

export default Skills;
