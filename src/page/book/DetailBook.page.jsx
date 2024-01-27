import React from "react";
import { GetBookData } from "../../service/book.service";
import useFetch from "../../hook/useFetch";
import { useParams, useNavigate } from "react-router-dom";

const DetailBookPage = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(GetBookData, `book/${id}`);

  const nav = useNavigate();

  const handleBack = () => {
    nav(-1);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading .... </h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <>
              <div className="  px-4 w-full h-[400px] gap-2 ">
                <div className="w-full border-b py-4  flex justify-center">
                  {" "}
                  <img
                    className="w-96 h-96 rounded-md"
                    src={data.image}
                    alt=""
                  />
                </div>
                <div className="w-6/12 px-3 mt-5">
                  <h3 className=" text-2xl font-serif font-bold">
                    {data.book}
                  </h3>
                  <h2 className=" text-sm font-sans text-gray-500">
                    Author: {data.author}
                  </h2>
                  <p className=" mt-4  font-sans text-base text-gray-500">
                    {data.description}
                  </p>
                  <button
                    onClick={handleBack}
                    className="flex justify-center mt-4 w-24 border-2 bg-black text-white font-sans font-bold rounded-md text-lg"
                  >
                    Back
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
