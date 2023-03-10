import React from "react";

const experienceContent = [
  {
    year: "Since July 2022",
    position: "Software Engineer",
    compnayName: "CafeMedia",
    details: `Software engineer with expertise in adtech and Prebid.js, creating high-performing and monetizable advertising solutions for digital publishers and advertisers.`,
  },
  {
    year: "April 2022 - June 2022",
    position: "Software Engineer",
    compnayName: "Wayfinder",
    details: `Software engineer with expertise in Ruby on Rails and Vue.js, building custom web applications that are scalable, performant, and provide exceptional user experiences.`,
  },
  {
    year: "March 2021 - Feb 2022",
    position: "Software Engineer",
    compnayName: "Spur Reply",
    details: `Software development to help businesses optimize their software architecture, design, and development processes. With experience in working with a variety of industries and technologies, I can provide strategic advice on software development best practices, development methodologies, and technology selection.`,
  },
  {
    year: "Jan 2020 - May 2020",
    position: "Web Developer",
    compnayName: "South Texas College",
    details: `My experience in front-end development allows me to create responsive and mobile-first web designs that are optimized for speed and accessibility. I worked collaboratively with cross-functional teams to ensure that web applications meet the needs of clients and users. `,
  },
  {
    year: "Jan 2016 - Dec 2018",
    position: "Ruby on Rails Developer",
    compnayName: "Freelancer",
    details: `Designing, developing, and deploying web applications using Ruby on Rails to build custom web applications that meet the unique needs of clients across a variety of industries.`,
  },
  {
    year: "May 2015 - Dec 2015",
    position: "Web Developer",
    compnayName: "Alcom Electronics",
    details: `Expertise in ASP.NET MVC, Bootstrap, and IIS, I specialize in building responsive and feature-rich web applications. With a focus on delivering high-quality code and exceptional user experiences, I work collaboratively with cross-functional teams to develop web applications that meet business requirements and exceed user expectations.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
