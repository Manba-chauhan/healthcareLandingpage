import React from 'react';
import profile2 from '../assets/img/profile2.png'
import Button from './Button';

const Section4 = () => {
  return (
    <div className="flex justify-center items-center w-full  p-20 max-md:flex-col">
      <div className=" flex justify-between  items-center mt-20   space-x-4 max-md:flex-col-reverse ">
        <div className="flex-1 max-md:mt-10">
          <div className="">
            <img
              src={profile2}
              alt=""
              className="w-full h-full 
              object-fill rounded-full border-2 border-blue-600 p-2"
            />
          </div>
        </div>
        <div className="flex-1  w-1/2  max-md:w-full max-md:mt-20">
          <p className="text-blue-500 font-bold  text-sm mt-2 ">
            Fast Solution
          </p>
          <h2 className="text-black font-bold text-4xl mt-4  w-11/12 max-md:w-full max-md:text-xl">
            Make a schedule in advance with the available doctor{" "}
          </h2>
          <p className="text-sm  font-medium text-gray-500  my-4  w-9/12 max-md:w-full">
            Healthcare is a very painful process, especially if you’re not
            taking care of your health and having regular check-ups.
            HealhtyCarely makes it easier for everyone to schedule a doctor’s
            appointment.
          </p>
          <ul className="flex-col space-y-2 my-4">
            <div className="flex space-x-2 ">
              <span className="px-1 text-white  rounded-full bg-blue-500  max-md:py-1 max-md:px-2 ">
                <i class="fa-solid fa-check"></i>
              </span>
              <li className="text-sm text-black font-bold">
                Make a schedule online is easy
              </li>
            </div>
            <div className="flex space-x-2">
              <span className="px-1 text-white  rounded-full bg-blue-500  max-md:py-1 max-md:px-2">
                <i class="fa-solid fa-check"></i>
              </span>
              <li className="text-sm text-black font-bold">
                Easy to connect with doctor
              </li>
            </div>
          </ul>
          <Button
            text="Make schedule Now"
            className="bg-blue-500 text-white text-md rounded-lg px-6 py-2 max-sm:text-nowrap"
          />
        </div>
      </div>
    </div>
  );
}

export default Section4;
