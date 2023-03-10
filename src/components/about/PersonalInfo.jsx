import React from "react";

const today = new Date();
const year = today.getFullYear();
const birthYear = 1995;
const age = year - birthYear;

const personalInfoContent = [
  { meta: "Name", metaInfo: "Aus Gomez", hasColor: "" },
  { meta: "Age", metaInfo: `${age} Years`, hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Email", metaInfo: "aus.gomez95@mail.com", hasColor: "" },
  { meta: "Github", metaInfo: "@ausgomez", hasColor: "" },
  { meta: "langages", metaInfo: "English, Spanish", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
