import React from "react";
import { resumeInfor } from "../../share/resumeInfor.js";

const PersonalInfor = () => {
  const { FullName, Email, PhoneNumber } = resumeInfor.personalInfor;
  return (
    <div>
      <h2 >{FullName}</h2>
      <h2 >{Email}</h2>
      <h2 >{PhoneNumber}</h2>
    </div>
  );
};

const PersonalLinks = () => {
  const personLinks = resumeInfor.personalLinks.map(item => (
    <div key={item.Id}>
      <p className="github"> </p>
      <label>
        <b>{item.Name}: </b>
      </label>
      <a href={item.Url} target="_blank" rel="noopener noreferrer" >
        {item.Url}
      </a>
    </div>
  ));
  return personLinks;
};

const UserHeader = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <PersonalInfor />
          </div>
          <div className="col-6">
            <PersonalLinks />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserHeader;
