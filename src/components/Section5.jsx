import React from 'react';
import SmallCard from './SmallCard';

const Section5 = () => {
  return (
    <div className="max-w-[1400px] max-h-[400px] mt-20 mx-auto">
      <div className="max-w-[921px] max-h-[353px] mx-auto">
        <h5 className="text-blue-500 font-bold text-sm text-center">
          Our Rating
        </h5>
        <h1 className="text-black text-4xl font-medium text-center w-1/2 mx-auto max-md:text-xl max-md:w-full ">
          We’re employee benefit at 7500+ hospital{" "}
        </h1>

        <div className=" grid grid-cols-3 gap-10  mt-20 max-md:grid-cols-1 max-md:px-10">
          <SmallCard
            price="900+"
            heading=" Verified Specialist"
            text=" Highly Verified"
          />
          <SmallCard
            price="45000+"
            heading="Happy Costumers"
            text="Highly Performance"
          />
          <SmallCard
            price="99.7 %"
            heading="Positive Feedback"
            text="Costumers Apporove"
          />
        </div>
      </div>
    </div>
  );
}

export default Section5;
