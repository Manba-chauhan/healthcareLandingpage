import React from 'react';
import profile3 from '../assets/img/profile3.png'

const Section6 = () => {
  return (
    <div className="max-w-[1340px] max-h-[580px]  my-4 max-md:mt-[500px] ">
      <div className="max-w-[1340px] ">
        <div className="text-center mt-20">
          <h1 className="text-black text-2xl font-medium tracking-wide">
            Our patients feedback about us
          </h1>
          <p className="text-gray-500 text-md font-medium">
            their impression after using this application
          </p>
        </div>
        <div className="bg-blue-200 max-w-[1340px]  h-[350px] mt-10 flex justify-evenly max-md:flex-col-reverse max-md:justify-center">
          <div className="w-[433px] h-[372px] border-blue-600 border-2 max-md:w-[380px]
           relative top-10 max-md:left-20 max-md:top-40 max-sm:left-0">
            <img src={profile3} alt="" className="relative -top-2 -left-1" />
          </div>
          <div className="w-2/6 relative top-20 max-md:w-full max-md:top-40 max-md:p-10">
            <p className="text-black text-2xl font-normal ">
              “Healthycarely is an website and mobile app for you to feel better
              or get medical help. We offer you a 24/7 doctor service with no
              appointment needed”
            </p>
            <div className="relative top-44 flex justify-between max-md:top-4 ">
              <div className="">
                <h1 className="text-black text-md font-bold ">
                  Naufal Hidayat
                </h1>
                <p className="text-gray-600 font-semibold text-sm">
                  Student at Telkom University
                </p>
              </div>
              <div className="flex space-x-2 ">
                <span className="text-gray-300">
                  <i class="fa-solid fa-arrow-left-long"></i>
                </span>
                <span className="text-black">
                  <i class="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
