import React from "react";
import hrassociates from "../../assets/projects/hrassociates.png";
import Rspa from "../../assets/projects/React_spa.png";
import AMLA from "../../assets/projects/AMLA.png";
import COC from "../../assets/projects/COC.png";
import SFI from "../../assets/projects/SFI.png";
import spring from "../../assets/projects/spring.png";
import kfw from "../../assets/projects/kfw.png";
function Work() {
  return (
    <div name="work" className="w-full h-screen bg-[#05113f] text-gray-300">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div >
          <p className="text-4xl font-bold inline border-b-4 border-[#f3a755] text-center w-full mt-4">
            Work
          </p>
          <h2 className="py-6 text-2xl">Some of my work</h2>
        </div>
        
        {/*Container */}
        <div className="w-full grid sm:grid-cols-2 gap-8 px-4 text-center py-3">

          <div style={{ backgroundImage: `url(${kfw})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  content-div ">

            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
               Sustainability Training
                <p className="text-white py-4 max-w-[700px] text-lg">
                  Elearning platform based on Laravel and Django
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://kfwdeg.sustainability.training/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Site
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a> */}
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${SFI})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  content-div ">

            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Sustainability Finance Inititiave
                <p className="text-white py-4 max-w-[700px] text-lg">
                  Elearning platform based on Laravel and Django
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://sfi.kba.co.ke/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Site
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a> */}
              </div>
            </div>
          </div>

          {/*Grid Item */}
          
        </div>

        <div className="w-full grid sm:grid-cols-2 gap-8 px-4 text-center py-3">

          <div style={{ backgroundImage: `url(${AMLA})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  content-div ">

            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
               African Mining Legislation Atlas
                <p className="text-white py-4 max-w-[700px] text-lg">
                  Developed the platform based on Php. It involves a backend that allows the Legislative team update the mining laws for public viewing
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://a-mla.org/en" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Site
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a> */}
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${COC})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  content-div ">

            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Cost of Credit Calculator
                <p className="text-white py-4 max-w-[700px] text-lg">
                  Iniative by the Central bank for the public to compare the various rates by banks before taking loans.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://costofcredit.co.ke/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Site
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a> */}
              </div>
            </div>
          </div>

          {/*Grid Item */}

        </div>

        <div className="w-full grid sm:grid-cols-2 gap-8 px-4 text-center py-3">

          <div style={{ backgroundImage: `url(${spring})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  content-div ">

            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Spring Well Adult Family Home
                <p className="text-white py-4 max-w-[700px] text-lg">
                  Infromational site build in React and Nodejs. Included a backend for bloging.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://springwellafh.com/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Site
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a> */}
              </div>
            </div>
          </div>

           <div  style={{ backgroundImage: `url(${Rspa})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  content-div ">
            
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              React Single Page Application
               <p className="text-white py-4 max-w-[700px] text-lg">
               Build using React and Tailwind Single Page Application
               </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/wanjaiya/react-spa" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github Repository
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a> */}
              </div>
            </div>
          </div>


         

            
        </div>
      </div>
    </div>
  );
}

export default Work;
