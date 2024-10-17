import React from "react";
import { Card_one } from "../../../../data/product-data";

const Features = () => {
  return (
    <div className="container">
      <div className="py-[128px]">
        <h2 className="font-bold text-[42px] text-[#1a0b5b] mb-[48px] text-center">
          Featured Products
        </h2>
        <ul className="grid grid-cols-4 gap-[30px]">
          {Card_one.map((item) => (
            <li
              key={item.id}
              className="text-center bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.1);] w-[270px] pb-[17px]"
            >
              <div className=" bg-[#f6f7fb] pt-[46px] pr-[52px] pb-[12px] pl-[40px]">
                <img src={item.img} alt="img" />
              </div>
              <h3 className="font-bold text-[18px] text-accent mb-[12px]">
                {item.title}
              </h3>
              <img
                className="w-[52px] mx-auto mb-[12px]"
                src={item.icon}
                alt=""
              />
              <p className="font-normal text-[14px] text-text mb-[12px]">
                {item.code}
              </p>
              <p className="font-normal text-[14px] text-text">{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
