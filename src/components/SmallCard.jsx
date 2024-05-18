import React from 'react';

const SmallCard = (props) => {
  return (
    <div className="shadow-md  py-4 bg-white shadow-sm  border-t-4 border-blue-500">
      <div className="flex flex-col justify-center items-center  ">
        <h1 className="mt-6 mb-4 text-4xl text-black font-semibold">{props.price}</h1>
        <h4 className="text-black text-md  font-semibold">
          {props.heading}
        </h4>
        <h6 className="text-sm text-gray-600 font-semibold tracking-wide">
           {props.text}
        </h6>
      </div>
    </div>
  );
}

export default SmallCard;
