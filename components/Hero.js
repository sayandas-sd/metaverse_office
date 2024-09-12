import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10">
      <Navbar />

      <div className="bg-[#3939b8] px-16 lg:px-20 py-20 rounded-3xl mt-6">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10 text-center lg:text-left">
            <p className="text-6xl sm:text-6xl md:text-6xl xl lg:text-6xl font-bold text-white">
              Your <br className="lg:hidden" /> Virtual{" "}
              <br className="lg:hidden" /> HQ
            </p>
            <p className="text-sm sm:text-base lg:text-base text-white">
              Metaverse brings the best of in-person collaboration to
              distributed teams.
            </p>
            <button className="btn btn-sm lg:btn-lg bg-green-600 hover:bg-green-400 text-white rounded-xl border-none w-36 lg:w-44 capitalize">
              Get Started
            </button>
          </div>

          <img
            src="/assets/hero.png"
            alt="Hero Image"
            className="w-96 lg:w-96 rounded-lg mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
