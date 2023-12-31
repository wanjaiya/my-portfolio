import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#05113f]">
      {/* contianer */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#f3a755]"> Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          {" "}
          Paul Wanjaiya{" "}
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]">
          {" "}
          I'm a Full Stack Developer.{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {" "}
          I'm a full-stack developer specializing in developing, intergrating
          and maintaining web-based systems and applications.{" "}
        </p>

        <div>
        <Link  to="work"  smooth={true}  duration={500} className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f3a755] hover:border-[#f3a775] w-44 " >
           View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
