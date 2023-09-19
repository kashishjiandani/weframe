import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaCommentDots,
  FaCalendar,
  FaCog,
  FaStore,
  FaTasks,
  FaAddressBook,
  FaRegNewspaper,
  FaShoppingCart,
} from "react-icons/fa";
import {
    AiTwotoneDashboard
} from "react-icons/ai";
import {
    GiHamburgerMenu
} from "react-icons/gi";


const Sidebar = () => {
  return (
    <div className="w-1/4 shadow-2xl h-full bg-[#15132b] text-white p-12">
        <div className="w-full flex items-start justify-start">
      <h1 className="text-2xl mx-5 mb-8">weframetech</h1>
      <GiHamburgerMenu className="mt-2 text-2xl text-[#7879f1]"/>    
        </div>

      <ul>
        <li className="mb-2 flex items-center">
          <Link href="/dashboard">
            <p className="block text-gray-400 font-bold px-4 py-2 ">MAIN MENU</p>
          </Link>
        </li>
        <li className="mb-2 flex items-center">
          <AiTwotoneDashboard className="mr-2 text-2xl text-gray-600" />

          <Link href="/dashboard">
            <p className="block text-gray-600 px-4 py-2 ">Dashboard</p>
          </Link>
        </li>
        <li className="mb-2 relative flex items-center">
          <FaEnvelope className="mr-2 text-2xl text-gray-600" />
          <Link href="/email">
            <p className="block text-gray-600 px-4 py-2 ">Email</p>
          </Link>
        </li>
        <li className="mb-2 flex items-center">
          <FaCommentDots className="mr-2 text-2xl text-[#7879f1]" />
          <Link href="/chat">
            <p className="block text-[#7879f1] px-4 py-2 ">Chat</p>
          </Link>
        </li>
        <li className="mb-2 flex items-center">
          <FaTasks className="mr-2 text-2xl text-[#6418c3]" />
          <Link href="/kanban">
            <p className="block text-[#6418c3] px-4 py-2 ">Kanban</p>
          </Link>
        </li>
        <li className="mb-2 flex items-center">
          <FaAddressBook className="mr-2 text-2xl text-[#7879f1]" />
          <Link href="/contact">
            <p className="block text-[#7879f1] px-4 py-2 ">Contact</p>
          </Link>
        </li>
        <li className="mb-2 flex items-center">
          <FaCalendar className="mr-2 text-2xl text-[#7879f1]" />
          <Link href="/calendar">
            <p className="block text-[#7879f1] px-4 py-2 ">Calendar</p>
          </Link>
        </li>
        <li className="mb-2 flex items-center ">
          <FaRegNewspaper className="mr-2 text-2xl text-gray-600" />
          <Link href="/courses">
            <p className="block text-[#7879f1] px-4 py-2 ">Courses</p>
          </Link>
        </li>
        <li className="mb-2 flex items-center">
          <FaShoppingCart className="mr-2 text-2xl text-gray-600" />
          <Link href="/shop">
            <p className="block text-[#7879f1] px-4 py-2 ">Shop</p>
          </Link>
        </li>
        <li className="mb-2 flex items-center">
          <FaStore className="mr-2 text-2xl text-[#7879f1]" />
          <Link href="/invoices">
            <p className="block text-[#7879f1] px-4 py-2 ">Invoices</p>
          </Link>
        </li>
        <li className="mb-2 flex items-center">
          <FaCog className="mr-2 text-2xl text-[#7879f1]" />
          <Link href="/settings">
            <p className="block text-[#7879f1] px-4 py-2 ">Settings</p>
          </Link>
        </li>
        <div class="mt-8 w-56 h-48 relative">
  <div class="w-56 h-48 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 rounded-3xl absolute top-0 left-0"></div>
  <div class="w-56 h-48 absolute top-0 left-0">
    <img src="https://c.animaapp.com/AVj2O5BR/img/mask-group@2x.png" class="w-56 h-48" />
  </div>
  <div class="w-6 h-8 absolute top-8 left-8">
    <img src="https://c.animaapp.com/AVj2O5BR/img/vector.svg" class="w-6 h-8" />
  </div>
  <div class="w-8 h-4 absolute bottom-4 left-8">
    <img src="https://c.animaapp.com/AVj2O5BR/img/vector-1.svg" class="w-8 h-4" />
  </div>
  <p class="absolute top-20 left-16 text-white text-xl font-bold">
    <span class="text-white">Increase your </span>
    <span class="text-white text-md">work with kanban</span>
  </p>
</div>



      </ul>
    </div>
  );
};

export default Sidebar;
