import React from "react";
import hrassociates from "../../assets/projects/hrassociates.png";
function Work() {
  return (
    <div name="work" className="w-full h-screen bg-[#05113f] text-gray-300">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div >
          <p className="text-4xl font-bold inline border-b-4 border-[#f3a755] text-center w-full mt-4">
            Work
          </p>
          <p className="py-6">Some of my work</p>
        </div>
        
        {/*Container */}
        <div className="grid sm:grid-col-2 md:grid-col-3 gap-4">

          {/*Grid Item */}
          <div  style={{ backgroundImage: `url(${hrassociates})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  content-div ">
            
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
               HR Associates 
               <p className="text-white py-4 max-w-[700px] text-lg">
               Build with laravel and bootstrap frameworks. Uses Twill for content management
               </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://hrassociatesltd.co.ke/" target="blank">
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

            
        </div>
      </div>
    </div>
  );
}

export default Work;
