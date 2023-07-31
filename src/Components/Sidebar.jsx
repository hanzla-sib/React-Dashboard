import React from "react";
import { AiOutlineDashboard, AiFillSetting, AiFillTool } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { SiPagekit } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className=" h-[100vh] bg-[#4F73E0]">
      <div className="flex items-center justify-center font-bold text-xl text-white py-8 px-8 border-b-[1px] border-gray-400/[0.3] cursor-pointer">
        <h2>Admin Panel</h2>
      </div>
      <div className="flex py-4 px-6 items-center text-white border border-gray-400/[0.3] bg-blue-950/90">
        <AiOutlineDashboard size={20} />
        <h1 className="ml-2 hover:scale-110 cursor-pointer ">Dashboard</h1>
      </div>
      <div className="py-4 border border-gray-400/[0.3]">
        <div className="px-4">
          <p className="text-sm text-gray-400">INTERFACE</p>
        </div>
        <div className="px-6 py-4 flex justify-between hover:bg-blue-950/90 ">
          <div className="flex items-center text-white ">
            <AiFillSetting size={20} />
            <h1 className="text-white ml-2 hover:scale-110 cursor-pointer">
              Components
            </h1>
          </div>
          <div className="text-white flex justify-center items-center ml-2 ">
            {" "}
            <FaArrowRight size={20} />
          </div>
        </div>
        <div className="px-6 py-4 flex justify-between hover:bg-blue-950/90">
          <div className="flex items-center text-white ">
            <AiFillTool size={20} />
            <h1 className="text-white ml-2 hover:scale-110 cursor-pointer">
              Utilities
            </h1>
          </div>
          <div className="text-white flex justify-center items-center ">
            {" "}
            <FaArrowRight size={20} />
          </div>
        </div>
      </div>
      <div className="py-4 border border-gray-400/[0.3] ">
        <div className="px-4">
          <p className="text-sm text-gray-400 ">ADDONS</p>
        </div>
        <div className="px-6 py-4 flex justify-between hover:bg-blue-950/90 ">
          <div className="flex items-center text-white ">
            <SiPagekit size={20} />
            <h1 className="text-white ml-2 hover:scale-110 cursor-pointer">
              Pages
            </h1>
          </div>
          <div className="text-white flex justify-center items-center ">
            {" "}
            <FaArrowRight size={20} />
          </div>
        </div>
        <div className="px-6 py-4 flex justify-between hover:bg-blue-950/90 ">
          <div className="flex items-center text-white ">
            <VscGraph size={20} />
            <h1 className="text-white ml-2 hover:scale-110 cursor-pointer">
              Charts
            </h1>
          </div>
          <div className="text-white flex justify-center items-center ">
            {" "}
            <FaArrowRight size={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 items-center py-3 ">
        <div className=" rounded-full bg-[#3959B8] p-3 text-white flex items-center justify-center">
          <button className="rounded-full  hover:scale-125">
            <MdOutlineArrowBackIosNew size={20} />
          </button>
        </div>
        <div className="bg-[#3959B8] rounded-md flex flex-col items-center space-y-3 text-white p-6 justify-between">
          <div className=" hover:scale-150">
            <BsLightningChargeFill />
          </div>
          <div className="text-[8px] w-[100px] text-gray-400">
            Ullamco consectetur sint nisi nulla ut dolor. Dolore ex et elit
            commodo duis
          </div>
          <div>
            <button className="bg-[#209e31] rounded-md p-1 hover:scale-110 ">
              Upgrade to pro!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
