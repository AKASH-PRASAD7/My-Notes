import React, { useState } from "react";
import { Link } from "react-router-dom";
import Notelogo from "../Images/MyNote-logo.png";
import { FaMagnifyingGlass, FaCircleUser } from "react-icons/fa6";

const Navabar = () => {
  const [toggleHidden, setToggleHidden] = useState("hidden");

  const handleUser = () => {
    toggleHidden === "hidden"
      ? setToggleHidden("block")
      : setToggleHidden("hidden");
  };
  const handlSignOut = () => {
    console.log("sign out");
  };
  return (
    <>
      <nav className="w-vw z-10 sticky top-0 bg-gray-900 text-white h-16 flex justify-between px-4 items-center gap-2 relative">
        <div className="flex item-center gap-6">
          <div className="flex gap-2 items-center">
            <img className="w-10 " src={Notelogo} alt="logo" />
            <Link
              className="sm:flex text-xl font-semibold font-mono xs:hidden xxs:hidden"
              to="/home"
            >
              My Notes
            </Link>
            <div className=" sm:hidden h-4/5 xs:flex xxs:flex">
              <select
                className="bg-gray-600 outline-none rounded-lg "
                name="My Notes"
                id="notes"
              >
                <option value="Home">Home</option>
                <option value="About">About</option>
                <option value="About">Account</option>
              </select>
            </div>
          </div>
          <ul className="flex items-center gap-4 sm:flex xs:hidden xxs:hidden">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </ul>
        </div>
        <div className="flex item-center h-1/2">
          <div className="flex items-center gap-2 sm:flex xs:hidden xxs:hidden">
            <input
              className="h-full text-blue-900  outline-none  rounded-lg p-2 md:w-96 sm:w-64 "
              type="text"
              placeholder="Search Notes..."
            />
            <i className="text-xl cursor-pointer">
              <FaMagnifyingGlass />
            </i>
          </div>
        </div>
        <div className="flex item-center ">
          <span onClick={handleUser} className="text-3xl cursor-pointer">
            <FaCircleUser />
          </span>
          <p
            onClick={handlSignOut}
            className={`text-sm ${toggleHidden} bg-gray-700 w-20 text-center rounded-md h-6 cursor-pointer font-semibold absolute bottom-0 right-10`}
          >
            Sign Out
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navabar;
