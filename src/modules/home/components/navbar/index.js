import React from "react";
import { IconContext } from "react-icons";
import { CgMenuRight } from "react-icons/cg";
import { PiTooth } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="bg-white w-full font-poppins">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center w-full  h-[10vh] px-[6%]  ">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <div className="w-[70px] h-[30px] flex items-center justify-center border border-black rounded-[14px]">
                <h4 className="text-sm">Menu</h4>
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] border border-black rounded-full">
                <CgMenuRight />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[30px] h-[30px] flex rounded-full justify-center items-center bg-[#FE4C1A]">
                <IconContext.Provider value={{ color: "white", value: "20px" }}>
                  <PiTooth />
                </IconContext.Provider>
              </div>
              <h4 className=" text-lg">DENTYTECH</h4>
            </div>
            <div className="flex items-center">
              <button className="w-[70px] h-[30px] flex items-center justify-center border border-black rounded-[14px]">
                <h4 className="text-sm">Login</h4>
              </button>
              <button className="w-[70px] h-[30px] flex items-center justify-center bg-[#FE4C1A] text-white rounded-[14px]">
                <h4 className="text-sm">Signup</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
