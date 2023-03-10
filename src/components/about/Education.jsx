import React from "react";

const educationContent = [
  {
    year: "2020",
    degree: "Computer Information Tech DEGREE",
    institute: "South Texas College",
    details: `I hold a computer information technology science degree which has equipped me with a broad range of skills including programming, database management, network administration, and cybersecurity, enabling me to design, develop, and maintain complex technology systems.`,
  },
  {
    year: "2018",
    degree: "Computer Science DEGREE",
    institute: "South Texas College",
    details: `I hold a computer science associate's degree which has equipped me with a strong foundation in the principles of computation, algorithms, programming languages, software design, and computer systems.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
