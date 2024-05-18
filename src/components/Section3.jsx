import React from 'react';
import Button from './Button';
import profile1 from '../assets/img/profile1.png'
import female2 from '../assets/img/female2.png'

const Section3 = () => {
  return (
    <div className="max-w-[1400px] max-h-[670px] mx-auto mt-20 max-md:mt-[800px] mb-80">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-1/2 p-4 mt-4 max-md:w-full">
          <p className="text-blue-500 font-bold  text-sm mt-2">Fast Solution</p>
          <h2 className="text-black font-bold text-4xl mt-4">
            Find the right doctor according to your complaint
          </h2>
          <p className="text-sm  font-medium text-gray-500  my-4">
            HealthCare.ly is a free, health app that goes beyond matching you
            with doctors. It actively helps you find the right doctor based on
            your medical and personal needs and connects you with your
            HealthCarely community for ongoing support throughout your journey
            to healthier living.
          </p>
          <ul className="flex-col space-y-2 my-4">
            <div className="flex space-x-2 ">
              <span className="px-1 text-white  rounded-full bg-blue-500  max-md:py-1 max-md:px-2 ">
                <i class="fa-solid fa-check"></i>
              </span>
              <li className="text-sm text-black font-bold">
                100% free app designed to help you find the right doctor for
                you.{" "}
              </li>
              
            </div>
            <div className="flex space-x-2">
              <span className="px-1 text-white  rounded-full bg-blue-500  max-md:py-1 max-md:px-2">
                <i class="fa-solid fa-check"></i>
              </span>
              <li className="text-sm text-black font-bold">
                100% free app designed to help you find the right doctor for
                you.{" "}
              </li>
            </div>
          </ul>
          <Button
            text="See the Doctors"
            className="bg-blue-500 text-white text-md rounded-lg px-6 py-2"
          />
        </div>
        <div
          className="bg-blue-500 rounded-t-full max-w-[515px] max-h-[400px] float-right 
        relative -top-44 max-md:top-20 "
        >
          <img src={profile1} alt="" className="relative -top-10 -left-28 max-md:hidden"  />

          <img src={female2} alt="" className="relative -top-[430px] max-md:-top-28" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
