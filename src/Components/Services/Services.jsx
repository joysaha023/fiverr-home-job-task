import React from "react";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div>
        <h2 className="text-2xl md:text-5xl">Popular Services</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-2 mt-6">
        <div className="p-2 bg-[#00732E] rounded-2xl">
          <div>
            <h2 className="text-white text-base font-bold px-2 my-6">
              Website Development
            </h2>
          </div>
          <div>
            <img
              className="rounded-2xl"
              src="https://i.ibb.co/QmqFRWS/img1.webp"
              alt=""
            />
          </div>
        </div>
        <div className="p-2 bg-[#FF7640] rounded-2xl">
          <div>
            <h2 className="text-white text-base font-bold px-2 my-6">
              Logo Design & Creative
            </h2>
          </div>
          <div>
            <img
              className="rounded-2xl"
              src="https://i.ibb.co/HBFsxCR/img2.webp"
              alt=""
            />
          </div>
        </div>
        <div className="p-2 bg-[#003912] rounded-2xl">
          <div>
            <h2 className="text-white text-base font-bold px-2 my-6">SEO and Optimization</h2>
          </div>
          <div>
            <img
              className="rounded-2xl"
              src="https://i.ibb.co/xhjdnCM/img3.webp"
              alt=""
            />
          </div>
        </div>
        <div className="p-2 bg-[#4D1727] rounded-2xl">
          <div>
            <h2 className="text-white text-base font-bold px-2 my-6">
              Architecture & Design
            </h2>
          </div>
          <div>
            <img
              className="rounded-2xl"
              src="https://i.ibb.co/hRTPfDP/img4.webp"
              alt=""
            />
          </div>
        </div>
        <div className="p-2 bg-[#7A831F] rounded-2xl">
          <div>
            <h2 className="text-white text-base font-bold px-2 my-6">
              Social Media Marketing
            </h2>
          </div>
          <div>
            {" "}
            <img
              className="rounded-2xl"
              src="https://i.ibb.co/6FnYSnC/img5.webp"
              alt=""
            />
          </div>
        </div>
        <div className="p-2 bg-[#59301F] rounded-2xl flex-col justify-between ">
          <div>
            <h2 className="text-white text-base font-bold px-2 my-6">
              Voice Over & Voice Artist
            </h2>
          </div>
          <div>
            <img
              className="rounded-2xl "
              src="https://i.ibb.co/9HV4g5y/img6.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
