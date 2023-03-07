import React from "react";
import Image from "next/image";
import { GlobeAltIcon, SearchIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 md:px-7">
      {/* {left} */}
      <div className="relative flex items-center h-16 cursor-pointer my-auto">
        <Image
          src="https://1000logos.net/wp-content/uploads/2017/07/Fire-Department-Logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* {middle} */}
      <div className=" flex items-center md:border-2 rounded-full justify-between px-5 md:shadow-sm">
        <input
          className="flex-grow outline-none"
          type="text"
          placeholder="start your search here"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer mx-2" />
      </div>

      {/* {right} */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <button className="border-2 p-2 rounded-full">Sign up/Sign in</button>
      </div>
    </header>
  );
}

export default Header;
