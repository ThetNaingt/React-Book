import React from "react";

const BookListComponents = ({ data }) => {
  // console.log(data);
  return (
    <div className=" flex  px-4 w-[700px] h-[320px]   rounded-lg">
      <div className="w-6/12 flex items-center border-r-2 border-r-slate-400 mt-2 p-3">
        <img className="w-[400px] h-[270px]" src={data.image} />
      </div>
      <div className="w-6/12 px-3 mt-2 items-center  py-20">
        <h3 className=" text-lg font-serif font-bold">{data.book}</h3>
        <h2 className=" text-sm font-sans text-gray-500">
          Author: {data.author}
        </h2>
        <p className=" mt-4 font-sans text-base text-gray-500">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default BookListComponents;
