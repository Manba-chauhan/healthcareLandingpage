import React from 'react';

const Card = (props) => {
  return (
    <div
      className="max-w-[287px] max-h-[230px]  mx-auto bg-white shadow border-t-4
     border-blue-500 rounded-md"
    >
      <div className="flex flex-col space-y-4 p-8">
        <img src={props.img} alt=""  className='w-10 h-10 object-cover' />
        <h1 className="text-black font-bold"> {props.heading}</h1>
        <p className="text-sm text-zinc-500 font-medium">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default Card;
