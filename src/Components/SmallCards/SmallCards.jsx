import React from "react";
import { BsMusicNoteList } from "react-icons/bs";

const SmallCards = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-5 p-4 mt-3">
        <div className="shadow-md rounded-2xl hover:bg-[#CDFFE7] py-3">
          <h2 className="pt-2 pl-2 text-xl">
            <BsMusicNoteList />
          </h2>
          <p className="p-2 text-sm md:text-base font-semibold">Programming & Tech</p>
        </div>
        <div className="shadow-md  rounded-2xl hover:bg-[#CDFFE7] py-3">
          <h2 className="pt-2 pl-2 text-xl">
            <BsMusicNoteList />
          </h2>
          <p className="p-2 text-sm md:text-base font-semibold">Graphics & Design</p>
        </div>
        <div className="shadow-md rounded-2xl hover:bg-[#CDFFE7] py-3">
          <h2 className="pt-2 pl-2 text-xl">
            <BsMusicNoteList />
          </h2>
          <p className="p-2 text-sm md:text-base font-semibold">Digital Marketing</p>
        </div>
        <div className="shadow-md rounded-2xl hover:bg-[#CDFFE7] py-3">
          <h2 className="pt-2 pl-2 text-xl">
            <BsMusicNoteList />
          </h2>
          <p className="p-2 text-sm md:text-base font-semibold">Writing & Translation</p>
        </div>
        <div className="shadow-md rounded-2xl hover:bg-[#CDFFE7] py-3">
          <h2 className="pt-2 pl-2 text-xl">
            <BsMusicNoteList />
          </h2>
          <p className="p-2 text-sm md:text-base font-semibold">Video & Animation</p>
        </div>
        <div className="shadow-md rounded-2xl hover:bg-[#CDFFE7] py-3">
          <h2 className="pt-2 pl-2 text-xl">
            <BsMusicNoteList />
          </h2>
          <p className="p-2 text-sm md:text-base font-semibold">AI Service</p>
        </div>
        <div className="shadow-md rounded-2xl hover:bg-[#CDFFE7] py-3">
          <h2 className="pt-2 pl-2 text-xl">
            <BsMusicNoteList />
          </h2>
          <p className="p-2 text-sm md:text-base font-semibold">Music & Audio</p>
        </div>
        <div className="shadow-md rounded-2xl hover:bg-[#CDFFE7] py-3">
          <h2 className="pt-2 pl-2 text-xl">
            <BsMusicNoteList />
          </h2>
          <p className="p-2 text-sm md:text-base font-semibold">Business </p>
        </div>
        <div className="shadow-md rounded-2xl hover:bg-[#CDFFE7] py-3">
          <h2 className="pt-2 pl-2 text-xl">
            <BsMusicNoteList />
          </h2>
          <p className="p-2 text-sm md:text-base font-semibold">Consulting </p>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
