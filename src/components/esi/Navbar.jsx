import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUsernameDropdownOpen, setIsUsernameDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleUsernameDropdown = () => {
    setIsUsernameDropdownOpen(!isUsernameDropdownOpen);
  };

  return (
    <>
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
      <div className="flex flex-col flex-grow">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between py-2 px-4">
            <div className="flex items-center">
              {/* Sidebar toggle button */}
              <button
                className="text-gray-600 focus:outline-none"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>

              {/* Page title */}
              <h1 className="text-lg font-semibold ml-4 text-gray-600">ESI</h1>
            </div>

            {/* User dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-600 px-3 py-2 outline outline-1 outline-blue-800 hover:bg-blue-800 hover:text-white focus:outline-none rounded drop-shadow-md"
                onClick={toggleUsernameDropdown}
              >
                <FaUser className={`text-sm font-semibold`} />
                <span
                  className={`text-sm font-semibold ${
                    isSidebarOpen ? "hidden" : ""
                  } lg:block ml-2`}
                >
                  Rido Martupa
                </span>
              </button>
              {isUsernameDropdownOpen && (
                <ul className="absolute right-0 mt-2 py-2 px-2 bg-blue-800 shadow-lg rounded">
                  <li className="px-4 py-1 hover:bg-slate-200 rounded-sm drop-shadow-sm">
                    <a
                      href="#"
                      className="text-sm text-gray-200 hover:text-gray-800"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="px-4 pt-1 hover:bg-slate-200 rounded-sm drop-shadow-sm">
                    <a
                      href="#"
                      className="text-sm text-gray-200 hover:text-gray-800"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
