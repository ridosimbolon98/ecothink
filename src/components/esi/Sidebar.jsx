import React, { useState } from "react";
import {
  FaDatabase,
  FaMoneyBill,
  FaChartBar,
  FaAngleDown,
} from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <aside
      className={`bg-[#202123] text-white w-64 ${
        isSidebarOpen ? "" : "hidden"
      }`}
    >
      {/* Sidebar content */}
      <nav className="flex flex-col">
        {/* Sidebar logo */}
        <div className="py-4 px-6 bg-zinc-900 drop-shadow-md">
          {/* Add your logo here */}
          <h5 className="font-bold text-center text-gray-200 mb-[-3px]">
            WEB-PORTAL
          </h5>
        </div>

        {/* Navigation items */}
        <ul className="mt-2 flex flex-col gap-1">
          {/* Master */}
          <li className="px-3 relative">
            <a
              className="flex items-center hover:bg-[#343541] cursor-pointer px-3 py-2 rounded-sm"
              onClick={() => toggleDropdown("master")}
            >
              <FaDatabase className="mr-2 text-gray-200" />
              <span className="text-[14px] tracking-wide text-gray-200 font-semibold">
                Master
              </span>
              <div className="ml-auto">
                <button
                  className="text-gray-400 hover:text-gray-300 focus:outline-none"
                  onClick={() => toggleDropdown("master")}
                >
                  <FaAngleDown
                    className={`transform transition-transform ${
                      activeDropdown === "master" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </a>
            {activeDropdown === "master" && (
              <ul className="pl-6 flex flex-col gap-1">
                <li className="hover:bg-[#343541] cursor-pointer px-3 py-1 rounded-sm">
                  <a href="#" className="text-[14px] text-gray-200">
                    Menu 1
                  </a>
                </li>
                <li className="hover:bg-[#343541] cursor-pointer px-3 py-1 rounded-sm">
                  <a href="#" className="text-[14px] text-gray-200">
                    Menu 2
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Transaction */}
          <li className="px-3 relative">
            <a
              className="flex items-center hover:bg-[#343541] cursor-pointer px-3 py-2 rounded-sm"
              onClick={() => toggleDropdown("transaction")}
            >
              <FaMoneyBill className="mr-2 text-gray-200" />
              <span className="text-[14px] tracking-wide text-gray-200 font-semibold">
                Transaction
              </span>
              <div className="ml-auto">
                <button
                  className="text-gray-400 hover:text-gray-300 focus:outline-none"
                  onClick={() => toggleDropdown("transaction")}
                >
                  <FaAngleDown
                    className={`transform transition-transform ${
                      activeDropdown === "transaction" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </a>
            {activeDropdown === "transaction" && (
              <ul className="pl-6 flex flex-col gap-1">
                <li className="hover:bg-[#343541] cursor-pointer px-3 py-1 rounded-sm">
                  <a href="#" className="text-[14px] text-gray-200">
                    Menu 1
                  </a>
                </li>
                <li className="hover:bg-[#343541] cursor-pointer px-3 py-1 rounded-sm">
                  <a href="#" className="text-[14px] text-gray-200">
                    Menu 2
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Report */}
          <li className="px-3 relative">
            <a
              className="flex items-center hover:bg-[#343541] cursor-pointer px-3 py-2 rounded-sm"
              onClick={() => toggleDropdown("report")}
            >
              <FaChartBar className="mr-2 text-gray-200" />
              <span className="text-[14px] tracking-wide text-gray-200 font-semibold">
                Report
              </span>
              <div className="ml-auto">
                <button
                  className="text-gray-400 hover:text-gray-300 focus:outline-none"
                  onClick={() => toggleDropdown("report")}
                >
                  <FaAngleDown
                    className={`transform transition-transform ${
                      activeDropdown === "report" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </a>
            {activeDropdown === "report" && (
              <ul className="pl-6 flex flex-col gap-1">
                <li className="hover:bg-[#343541] cursor-pointer px-3 py-1 rounded-sm">
                  <a href="#" className="text-[14px] text-gray-200">
                    Menu 1
                  </a>
                </li>
                <li className="hover:bg-[#343541] cursor-pointer px-3 py-1 rounded-sm">
                  <a href="#" className="text-[14px] text-gray-200">
                    Menu 2
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
