import React from "react";
import Javascript from "../../assets/javascript.png";
import ReactPic from "../../assets/react.png";
import Linux from "../../assets/linux.png";
import Tailwind from "../../assets/tailwind.png";
import Git from "../../assets/git.png";
import Laravel from "../../assets/laravel.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";

const Skills = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#05113f] text-gray-300"
    >
      {/*Contianer */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#f3a755] text-center w-full">
            Skills
          </p>
          <p className="py-4 ">
            These are part of the technologies and frameworks I've worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#04294f] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#04294f] hover:scale-110 duration-500">
            <img src={Javascript} alt="Javascript" className="w-20 mx-auto" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#04294f] hover:scale-110 duration-500">
            <img src={CSS} alt="CSS" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#04294f] hover:scale-110 duration-500">
            <img src={Laravel} alt="Laravel" className="w-20 mx-auto" />
            <p className="my-4">Laravel</p>
          </div>
          <div className="shadow-md shadow-[#04294f] hover:scale-110 duration-500">
            <img src={ReactPic} alt="React" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#04294f] hover:scale-110 duration-500">
            <img src={Tailwind} alt="Tailwind" className="w-20 mx-auto" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#04294f] hover:scale-110 duration-500">
            <img src={Git} alt="Git" className="w-20 mx-auto" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#04294f] hover:scale-110 duration-500">
            <img src={Linux} alt="Linux" className="w-20 mx-auto" />
            <p className="my-4">Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
