import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-5xl font-bold text-gray-700 text-center">
        WHY CHOOSE US
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Proximity and Visibility</p>
          <p className="text-gray-500 text-center">
            You can use proximity chat with
            <br /> others with a visible
            <br />
            video charecters.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Multiple Maps</p>
          <p className="text-gray-500 text-center">
            You can get access to multiple maps <br />
            and play different types <br /> of games.
          </p>
        </div>{" "}
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Video Representation</p>
          <p className="text-gray-500 text-center">
            you can present your <br /> ideas to others through
            <br /> video presentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
