import React from "react";
import GmailIcon from "../../../assets/icons/gmail";
import SelectIcon from "../../../assets/icons/select-icon";
import Login from "../../../assets/icons/login";
import LikeIcon from "../../../assets/icons/like-icon";
import BucketIcon from "../../../assets/icons/bucket-icon";

const HeaderTop = () => {
  return (
    <div className="bg-violet">
      <div className="container">
        <div className="py-[13px] flex justify-between items-center">
          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[10px]">
              <GmailIcon />
              <a className="text-[#f1f1f1] font-semibold text-[16px]" href="#">
                mhhasanul@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-[10px]">
              <GmailIcon />
              <a className="text-[#f1f1f1] font-semibold text-[16px]" href="#">
                (12345)67890
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[26px]">
            <ul className="flex items-center gap-[15px]">
              <li className="flex items-center gap-[3px]">
                <p className="text-[#f1f1f1] font-semibold text-[16px]">
                  English
                </p>
                <SelectIcon />
              </li>
              <li className="flex items-center gap-[3px]">
                <p className="text-[#f1f1f1] font-semibold text-[16px]">USD</p>
                <SelectIcon />
              </li>
              <li className="flex items-center gap-[3px]">
                <p className="text-[#f1f1f1] font-semibold text-[16px]">
                  Login
                </p>
                <Login />
              </li>
              <li className="flex items-center gap-[3px]">
                <p className="text-[#f1f1f1] font-semibold text-[16px]">
                  Wishlist
                </p>
                <LikeIcon />
              </li>
            </ul>
            <button>
              <BucketIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
