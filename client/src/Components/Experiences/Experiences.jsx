import React from "react";
import { resumeInfor } from "../../share/resumeInfor.js";

var support = (function () {
	if (!window.DOMParser) return false;
	var parser = new DOMParser();
	try {
		parser.parseFromString('x', 'text/html');
	} catch(err) {
		return false;
	}
	return true;
})();

var stringToHTML = function(str) {
  debugger;
  // If DOMParser is supported, use it
  if (support) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.body;
  }

  // Otherwise, fallback to old-school method
  var dom = document.createElement("div");
  dom.innerHTML = str;
  return dom;
};

const Experience = () => {
  const experienceList = resumeInfor.experiences.map(item => (
    <div key={item.Id}>
      <div class="experience-header">
        <strong> {item.Place}</strong>
        <br />
        <strong> {item.Date}</strong>
      </div>
      <div class="experience-header">
        <i>{item.JobTitle}</i>
        <i>
          <strong>{item.Label}:</strong>
          <a href={item.Url} target="_blank">
            {item.Url}
          </a>
        </i>
      </div>

      {stringToHTML(item.Descriptions).toString()}
    </div>
  ));

  console.log(experienceList);
  return experienceList;
};

const Experiences = () => {
  return (
    <React.Fragment>
      <Experience />
    </React.Fragment>
  );
};

export default Experiences;
