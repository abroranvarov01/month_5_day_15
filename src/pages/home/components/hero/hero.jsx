import React from "react";
const Hero = () => {
  return (
    <div className="bg-[#f2f0ff] bg-[url('./assets/bgimg.svg')] bg-no-repeat bg-[90%_center]">
      <div className="container">
        <div className="pt-[203px] pb-[236px]">
          <p className="font-semibold text-[16px] text-accent mb-[12px]">
            Best Furniture For Your Castle....
          </p>
          <h1 className="font-bold text-[53px] text-black mb-[12px] w-[644px]">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="font-bold text-[16px] text-sub-text-color mb-[27px] w-[560px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-accent text-white font-semibold text-[17px]border-radius: 2px  py-[16px] px-[40px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
