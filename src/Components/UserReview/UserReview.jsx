import React from "react";
import ReactPlayer from "react-player";

const UserReview = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div>
        <h2 className="text-2xl md:text-5xl">
          What they're saying about Fiverr
        </h2>
      </div>
      <div className="mt-10">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 ">
              <div className="">
                <ReactPlayer
                  controls={true}
                  width="100%"
                  height="100%"
                  url="https://youtu.be/AzRYJRmuMWg?si=q5XHp7AK00Relw4e"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-xs md:text-xl text-slate-400">
                  Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                </h2>
                <p className="text-lg md:text-2xl">
                  We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world.
                </p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 ">
              <div className="">
                <ReactPlayer
                  controls={true}
                  width="100%"
                  height="100%"
                  url="https://youtu.be/AzRYJRmuMWg?si=q5XHp7AK00Relw4e"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-xs md:text-xl text-slate-400">
                  Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                </h2>
                <p className="text-lg md:text-2xl">
                  We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world.
                </p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 ">
              <div className="">
                <ReactPlayer
                  controls={true}
                  width="100%"
                  height="100%"
                  url="https://youtu.be/AzRYJRmuMWg?si=q5XHp7AK00Relw4e"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-xs md:text-xl text-slate-400">
                  Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                </h2>
                <p className="text-lg md:text-2xl">
                  We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world.
                </p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 ">
              <div className="">
                <ReactPlayer
                  controls={true}
                  width="100%"
                  height="100%"
                  url="https://youtu.be/AzRYJRmuMWg?si=q5XHp7AK00Relw4e"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-xs md:text-xl text-slate-400">
                  Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                </h2>
                <p className="text-lg md:text-2xl">
                  We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world.
                </p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
