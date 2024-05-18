import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <div className="max-w-[1200px]  max-h-[50px] mx-auto bg-white my-5">
      <div className="flex justify-between  items-center ">
        <div className="flex justify-between items-center gap-20">
          <h1 className="text-xl font-meduim  text-center">
            Healhty<span className="text-blue-600">Carely</span>
          </h1>
          <div className="max-sm:hidden">
            <ul className="flex justify-center items-center  space-x-4">
              <li className="text-md text-black">Home</li>
              <li className="text-md text-black">Doctor</li>
              <li className="text-md text-black">Service</li>
              <li className="text-md text-black">Reveiw</li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-5">
          <Button text="Sign in" />

          <Button text="Sign up"  className='bg-blue-600 text-white text-md rounded-lg px-4 py-2'/>
        </div>
      </div>
    </div>
  );
}

export default Header;
