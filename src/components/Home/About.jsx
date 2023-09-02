import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#05113f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#f3a755]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Paul, Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              A result driven and self-motivated full stack developer with
              experience in designing, developing, integrating and maintaining
              web-based systems and applications. I'm proficient in creating
              systems using several leading frameworks such Laravel, React and
              Angular. Creating of E-Learning solutions with openedx and moodle.
              I'm also experienced in Linux and Windows server maintenance,
              security and optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
