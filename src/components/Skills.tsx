import React from "react";

const Skills = () => {
  return (
    <div className="pt-32">
      <div className=" container grid md:grid-cols-2 text-accent gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h3 className="text-4xl md:text-5xl">Technologies I work with</h3>
          <p className="text-gray-500 mt-2">
            Lorem ipsum is a pseudo-Latin text used in web design, typography,
            layout, and printing in place of English to emphasise design
            elements over content
          </p>
        </div>
        <div className="grid md:grid-cols-2  text-3xl sm:text-4xl">
          <div className="space-y-2">
            <h2 data-aos="zoom-in-up">Next js</h2>
            <h2 data-aos="zoom-in-up">React Js</h2>
            <h2 data-aos="zoom-in-up">Bootstrap</h2>
          </div>
          <div className="space-y-2">
            <h2 data-aos="zoom-in-up">Next js</h2>
            <h2 data-aos="zoom-in-up">React Js</h2>
            <h2 data-aos="zoom-in-up">Bootstrap</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
