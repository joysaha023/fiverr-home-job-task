import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Fingertips = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div>
        <h2 className="text-2xl md:text-5xl">
          A whole world of freelance <br /> talent at your fingertips
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
          <div className="card card-compact bg-base-100 w-full ">
            <div className="card-body">
              <p className="text-4xl">
                <AiOutlineThunderbolt />
              </p>
              <h2 className="card-title">Over 700 categories</h2>
              <p className="text-lg text-slate-400 mt-5">
                Get results from skilled freelancers from all over the world,
                for every task, at any price point.
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-full ">
            <div className="card-body">
              <p className="text-4xl">
                <AiOutlineThunderbolt />
              </p>
              <h2 className="card-title">Clear, transparent pricing</h2>
              <p className="text-lg text-slate-400 mt-5">
              Pay per project or by the hour (Pro). Payments only get released when you approve.
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-full ">
            <div className="card-body">
              <p className="text-4xl">
                <AiOutlineThunderbolt />
              </p>
              <h2 className="card-title">Quality work done faster</h2>
              <p className="text-lg text-slate-400 mt-5">
              Filter to find the right freelancers quickly and get great work delivered in no time, every time.
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-full ">
            <div className="card-body">
              <p className="text-4xl">
                <AiOutlineThunderbolt />
              </p>
              <h2 className="card-title">24/7 award-winning support</h2>
              <p className="text-lg text-slate-400 mt-5">
              Chat with our team to get your questions answered or resolve any issues with your orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fingertips;
