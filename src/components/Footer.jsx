import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-[1440px] max-h-[150px] mx-auto mt-40 max-md:mt-80 max-md:p-4">
      <div className="max-w-[1230px] max-h-[125px] mx-auto flex justify-evenly max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <div className="w-8/12 max-md:w-full max-md:mb-4">
            <h1 className="text-black font-medium text-lg">
              Healthy<span className="text-blue-500">carely</span>
            </h1>
            <p className="text-sm text-gray-600">
              This free App provides a solution to your health needs by offering
              you a one-stop access to complete information about various
              medical checkups. This App carries simple tips and advice to help
              you maintain a healthy lifestyle.
            </p>
          </div>
        </div>
        <div className="flex  space-x-12 max-md:space-x-6">
          <div className="max-sm:hidden">
            <h2 className="text-lg font-bold my-2">Overview</h2>
            <ul>
              <li className="text-sm text-gray-500">Checking Health</li>
              <li className="text-sm text-gray-500">Find Docter</li>
              <li className="text-sm text-gray-500">Make a Schedule</li>
            </ul>
          </div>
          <div className="max-sm:hidden">
            <h2 className="text-lg font-bold my-2">Company</h2>
            <ul>
              <li className="text-sm text-gray-500">Home</li>
              <li className="text-sm text-gray-500">About</li>
              <li className="text-sm text-gray-500">Services</li>
            </ul>
          </div>
          <div className="max-sm:hidden">
            <h2 className="text-lg font-bold my-2">Explore</h2>
            <ul>
              <li className="text-sm text-gray-500">Terms & Conds</li>
              <li className="text-sm text-gray-500">Privacy Policies</li>
              <li className="text-sm text-gray-500">Cookies</li>
            </ul>
          </div>
          <div className="max-sm:w-full">
            <h2 className="text-lg  max-sm:text-2xl font-bold my-2 max-lg:text-nowrap max-sm:text-center">
              Social Media
            </h2>
            <ul className="flex space-x-5 items-center justify-center max-sm:space-x-20">
              <li className="text-lg text-black max-sm:text-xl">
                {" "}
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="text-lg text-black max-sm:text-xl">
                {" "}
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li className="text-lg text-black max-sm:text-xl">
                <i class="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
