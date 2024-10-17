import React from "react";
import { MainCard } from "../../../../data/main-card";
const Latests = () => {
  return (
    <div className="container">
      <div className="pb-[128px]">
        <h2 className="font-bold text-[42px] text-[#1a0b5b] mb-[48px] text-center">
          Featured Products
        </h2>
        <ul className="grid grid-cols-3 gap-[37px]">
          {MainCard.map((item) => (
            <li key={item.id}>
              <div className="mb-[9px] bg-[#f7f7f7] pt-[25px] pr-[57px] pb-[7px] pl-[68px]">
                <img className="bg-transparent" src={item.img} alt="img" />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-[16px] text-text">
                  {item.title}
                </p>
                <div className="flex items-center gap-[10px]">
                  <p className="font-normal text-[14px] text-text">
                    {item.main_price}
                  </p>
                  <p className="font-normal text-[12px] text-accent line-through">
                    {item.price}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Latests;
