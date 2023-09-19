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
      </ul>
    </div>
  );
};

export default Sidebar;
