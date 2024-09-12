import React from "react";

const Map = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/m1.jpg" alt="" className="w-1/3 h-1/3 rounded-lg" />

        <div className="flex flex-col gap-5 items-start w-full lg:w-1/2">
          <p className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-blue-800">
            Bring your remote team closer together
          </p>
          <p className="text-sm sm:text-lg md:text-xl lg:text-xl">
            Communicate, collaborate,
            <br />
            and feel more connected in a <br />
            persistent space that reflects your unique team culture.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 py-20 lg:py-20">
        <div className="flex flex-col gap-5 items-start w-full lg:w-1/2">
          <p className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold text-blue-800">
            Connect with your team anywhere, anytime
          </p>
          <p className="text-sm sm:text-lg md:text-xl lg:text-xl">
            Explore new ways to collaborate <br />
            and streamline your workflow.
            <br /> With remote work flexibility, <br />
            your team can stay connected <br />
            across the globe.
          </p>
        </div>
        <img src="/assets/m2.jpg" alt="" className="w-1/3 h-1/3 rounded-lg" />
      </div>
    </div>
  );
};

export default Map;
