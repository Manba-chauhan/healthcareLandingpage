import React from 'react';
import Button from './Button';
import female from '../assets/img/female.png'

const Section1 = () => {
  return (
    <div className="max-w-[1400px]  max-h-[509px] mx-auto bg-white mt-32 max-sm:p-4">
      <div className="max-w-[1200px]  max-h-[50px] mx-auto">
        <div className="flex space-y-40  space-x-80">
          <div className="w-1/2 max-md:w-11/12">
            <h1 className="text-5xl text-black font-meduim max-md:text-2xl">
              Medical Care Now Simplified For{" "}
              <span className="text-blue-600">Everyone</span>{" "}
            </h1>
            <p className="text-sm font-meduim text-gray-500 my-5">
              Health carely is a new way to get health insurance quotes. We
              offer tools similar to those provided by insurance companies for
              free and prices are based on donations and not restrictive health
              plan networks.
            </p>
            <Button
              text="Conact Us"
              className="bg-blue-500 text-white text-md rounded-lg px-6 py-2"
            />
          </div>
        </div>
      </div>
      <div
        className=" bg-blue-600  float-right rounded-ss-full 
      max-md:relative max-md:top-40"
      >
        <img src={female} alt="Img2" className="  relative -top-0" />
      </div>
     
    </div>
  );
}

export default Section1;
