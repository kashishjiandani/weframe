import React from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { RxTriangleDown } from "react-icons/rx";
import usa from "../../public/assets/images/usa.png";
import activity from "../../public/assets/images/activity.png";
import bell from "../../public/assets/images/bell.png";
import check from "../../public/assets/images/check.png";
import folder from "../../public/assets/images/folder.png";
import Image from "next/image";
// import { BsFillBellFill,BsFillWalletFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="px-8 w-full h-20 flex items-center justify-between bg-[#15132b]">
      <div className="flex items-center justify-center bg-[#211a75] px-8 py-3 rounded-full">
        <LiaSearchSolid className="text-violet-300 text-2xl mr-3 font-extrabold" />
        <input
          type="text"
          placeholder="Search here"
          className=" bg-transparent border-none text-base outline-none"
        />
      </div>
      <p className=" cursor-pointer underline text-purple-800 text-xs font-bold">
        OTHER MENUS
      </p>
      <div className="flex items-center justify-center">
        <span className="cursor-pointer">
        <Image src={bell} className=" w-16" alt="bell" />
        </span> 
        <span className="cursor-pointer">
        <Image src={activity} className="w-16" alt="activity" />
        </span> 
        <span className="cursor-pointer">
        <Image src={check} className="w-16" alt="check" />
        </span> 
        <span className="cursor-pointer">
        <Image src={folder} className="w-16" alt="folder" />
        </span>
      </div>
      <div className="flex items-center justify-center bg-[#211a75] px-6 py-2 rounded-full">
        <Image src={usa} className="w-6 mr-2" alt="usa" />
        <p className="text-base font-bold">ENGLISH</p>
        <RxTriangleDown className="text-purple-800 text-3xl ml-2 mb-1" />
      </div>
      <div className="border-l-2 h-10 border-gray-800 flex items-center justify-center pl-5">
        <div className=" bg-gray-300 w-10 h-10 rounded-xl mx-3"></div>
        <div className="flex flex-col items-start justify-start py-2">
          <p className="text-[14px]">Instructor Day</p>
          <p className="text-[14px] text-purple-800">Super Admin</p>
        </div>
        <RxTriangleDown className="text-purple-800 text-3xl ml-2 mb-1" />
      </div>
    </div>
  );
};

export default Navbar;
