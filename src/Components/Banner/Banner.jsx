import React from "react";
import { IoIosSearch } from "react-icons/io";

const Banner = () => {
  return (
    <div className="lg:max-w-7xl  mx-auto mt-5">
      <div className="hero bg-[#013A12] lg:rounded-2xl min-h-full">
        <div className="hero-content text-center">
          <div className="max-w-xl my-20">
            <h1 className="text-5xl text-white font-bold">
              Find the right <span className="text-[#1DBF73]">freelance</span> service, right away
            </h1>

            <label className="input input-bordered flex items-center gap-3 mt-10">
              <input
                type="text"
                className="grow"
                placeholder="What service are you looking for?"
              />
              <p className="btn bg-[#013A12] text-white hover:text-black">
                <IoIosSearch />
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
