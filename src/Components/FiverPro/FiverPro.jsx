import React from "react";

const FiverPro = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#003912] rounded-2xl p-10 mt-10 ">
      <div className=" flex flex-col lg:flex-row justify-center items-center">
        <div className="text-white space-y-4">
          <p className="text-2xl font-bold">
            fiverr <span className="font-medium">pro.</span>
          </p>
          <h2 className="text-5xl">
            New e-Commerce <br /> project management br service
            <span className="font-bold"> made for your business</span>
          </h2>
          <p>
            An experienced e-Commerce project manager will plan, coordinate, and
            execute your project. Overseeing a team of e-Commerce experts,
            they'll handle everything from site building, design and content to
            optimization, marketing strategies, and UGC videos.
          </p>
          <div>
            <h4 className="font-bold mb-2">To get started, you should have:</h4>
            <p className="pl-3">
              An e-Commerce project requiring expertise in various fields
            </p>
            <p className="pl-3">A budget exceeding $1000</p>
            <p className="pl-3">A desire to get things done, without the hassle</p>
          </div>
          <button className="btn-sm bg-[#FC832B] rounded-md hover:bg-slate-50 hover:text-black">Get started</button>
        </div>
        <div className=" hidden md:flex">
          <img src="https://i.ibb.co/n7jJYG1/image-Logo.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FiverPro;
