import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center">
        <div className="text-x1 md:text-4xl font-bold mb-4">Learn with us</div>
        <div className="text-white font-bold text-3xl md:text-[80px] mb-4">
          Grow with us.
        </div>
        <div className="text-[20px] md:text-[50px] text-white font-bold mb-4">
          Learn
          <ReactTyped
            className="pl-2"
            strings={[
              "Web Development",
              "Data Analytics",
              "Artifical Intagillance",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </div>
        <button className="bg-black text-white p-3 rounded font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
