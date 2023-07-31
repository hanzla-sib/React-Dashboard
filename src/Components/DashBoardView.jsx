import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineBell ,AiFillMessage} from "react-icons/ai";
const DashBoardView = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between shadow-2xl p-1">
        <div className="flex items-center justify-center px-4">
          <input
            className="bg-gray-100 outline-none rounded-md p-1"
            type="text"
            placeholder="Search For"
          />
          <BiSearchAlt2
            className=" bg-[#4F73E0] p-2 rounded-md text-white"
            size={30}
          />
        </div>
        <div className="md:flex md:space-x-3 items-center hidden md:visible ">
            <div className="hover:scale-150"><AiOutlineBell /></div>
            <div className="hover:scale-150"><AiFillMessage /></div>
            <div className="border border-gray-600/[0.2] h-full"></div>
            <div >Hanzla Sibghat</div>
            <div className="rounded-full w-[40px] hover:scale-105">
                <img className="object-contain rounded-full" src="../../public/pic.jpg"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardView;
