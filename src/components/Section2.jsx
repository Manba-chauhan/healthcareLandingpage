import React from 'react';
import Card from './Card';
import Profile from '../assets/img/Profile.png'
import Search  from '../assets/img/Search.png'
import Star from "../assets/img/Star.png";
import Calendar from "../assets/img/Calendar.png";


const Section2 = () => {
  return (
    <div className="max-w-[1400px]  max-h-[350px]  mx-auto mt-[500px] sm:mt-[700px]  lg:mt-[700px]">
      <div className="max-w-[1200px]  max-h-[350px]  mx-auto ">
        <h3 className="text-blue-500 text-sm font-bold text-center">
          Fast Solutions
        </h3>
        <h1 className="font-meduim text-black text-center text-4xl tracking-wide">
          step by step to get your solutions
        </h1>
        <div className="mt-10 grid grid-cols-4 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          <Card
            img={Search}
            heading="Check health complaints"
            text="Check the disease so you can easily choose the right specialist"
          />
          <Card
            img={Profile}
            heading="Check health complaints"
            text="Check the disease so you can easily choose the right specialist"
          />
          <Card
            img={Star}
            heading="Check health complaints"
            text="Check the disease so you can easily choose the right specialist"
          />
          <Card
            img={Calendar}
            heading="Check health complaints"
            text="Check the disease so you can easily choose the right specialist"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
