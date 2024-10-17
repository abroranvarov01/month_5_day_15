import React from "react";
import HeaderTop from "./components/header-top";
import Logo from "../../assets/logo.svg";
import SelectIcon2 from "../../assets/icons/slect-icon2";
import SearchIcon from "../../assets/icons/search-icon";
const Header = () => {
  return (
    <div>
      <HeaderTop />
      <div className="container">
        <div className="py-[19px] flex items-center justify-between">
          <div className="gap-[88px] flex items-center">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
            <ul className="flex items-center gap-[35px] py-[10px]">
              <li className="flex items-center gap-[2px]">
                <p className="font-normal text-[16px]  text-accent">Home</p>
                <SelectIcon2 />
              </li>
              <li>
                <p className="font-normal text-[16px] text-[ #0d0e43]">Pages</p>
              </li>
              <li>
                <p className="font-normal text-[16px] text-[ #0d0e43]">
                  Products
                </p>
              </li>
              <li>
                <p className="font-normal text-[16px] text-[ #0d0e43]">Blog</p>
              </li>
              <li>
                <p className="font-normal text-[16px] text-[ #0d0e43]">Shop</p>
              </li>
              <li>
                <p className="font-normal text-[16px] text-[ #0d0e43]">
                  Contact
                </p>
              </li>
            </ul>
          </div>
          <div className="">
            <form className="relative">
              <input
                type="text"
                className="w-[317px] border-[2px] border-solid border-[#e7e6ef] p-[8px]"
              />
              <button className="absolute right-0 top-0 bg-accent py-[11px] px-[15px]">
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
