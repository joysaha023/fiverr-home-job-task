import React from "react";
import { FaStar } from "react-icons/fa";

const RecentTask = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6">
      <div className="p-5">
        <div className="">
          <h2 className="text-2xl md:text-5xl">Recently Viewed & More</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
          <div>
            <div className=" p-0  w-full ">
              <figure>
                <img
                className="rounded-xl"
                  src="https://i.ibb.co/HXQrN6G/img1.webp"
                  alt="img"
                />
              </figure>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-[30px] h-[30px] rounded-full" src="https://i.ibb.co/nknMff5/fdas.jpg" alt="" />
                    </div>
                    <h2>Adnan Hossain</h2>
                </div>
                
                <p className="hover:underline cursor-pointer">I will be your full stack web developer in mern stack, python...</p>
                <div className=" ">
                  <h2 className="flex items-center gap-1"><FaStar />5.0 <span>(10)</span></h2>
                  <h2>From $95</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" p-0  w-full ">
              <figure>
                <img
                className="rounded-xl"
                  src="https://i.ibb.co/7rpjnkn/img2.jpg"
                  alt="img"
                />
              </figure>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-[30px] h-[30px] rounded-full" src="https://i.ibb.co/nknMff5/fdas.jpg" alt="" />
                    </div>
                    <h2>Adnan Hossain</h2>
                </div>
                
                <p className="hover:underline cursor-pointer">I will be your full stack web developer in mern stack, python...</p>
                <div className=" ">
                  <h2 className="flex items-center gap-1"><FaStar />5.0 <span>(10)</span></h2>
                  <h2>From $95</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" p-0  w-full ">
              <figure>
                <img
                className="rounded-xl"
                  src="https://i.ibb.co/HD8mzf4/img3.jpg"
                  alt="img"
                />
              </figure>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-[30px] h-[30px] rounded-full" src="https://i.ibb.co/nknMff5/fdas.jpg" alt="" />
                    </div>
                    <h2>Adnan Hossain</h2>
                </div>
                
                <p className="hover:underline cursor-pointer">I will be your full stack web developer in mern stack, python...</p>
                <div className=" ">
                  <h2 className="flex items-center gap-1"><FaStar />5.0 <span>(10)</span></h2>
                  <h2>From $95</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" p-0  w-full ">
              <figure>
                <img
                className="rounded-xl"
                  src="https://i.ibb.co/3BVkmvz/img4.jpg"
                  alt="img"
                />
              </figure>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-[30px] h-[30px] rounded-full" src="https://i.ibb.co/nknMff5/fdas.jpg" alt="" />
                    </div>
                    <h2>Adnan Hossain</h2>
                </div>
                
                <p className="hover:underline cursor-pointer">I will be your full stack web developer in mern stack, python...</p>
                <div className=" ">
                  <h2 className="flex items-center gap-1"><FaStar />5.0 <span>(10)</span></h2>
                  <h2>From $95</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" p-0  w-full ">
              <figure>
                <img
                className="rounded-xl"
                  src="https://i.ibb.co/mhDxbKV/img5.jpg"
                  alt="img"
                />
              </figure>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-[30px] h-[30px] rounded-full" src="https://i.ibb.co/nknMff5/fdas.jpg" alt="" />
                    </div>
                    <h2>Adnan Hossain</h2>
                </div>
                
                <p className="hover:underline cursor-pointer">I will be your full stack web developer in mern stack, python...</p>
                <div className=" ">
                  <h2 className="flex items-center gap-1"><FaStar />5.0 <span>(10)</span></h2>
                  <h2>From $95</h2>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecentTask;
