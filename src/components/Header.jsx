import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4 ">
      <div className="max-w [1248px] py-[12px] items-center  flex justify-between  mx-auto">
        <div className="text-3xl font-extrabold cursor-pointer">Web Tech</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        {/* {Responsive menu} */}
        <ul
          className={` duration-300 md:hidden w-full z-50 h-screen text-white fixed bg-black top-[92px] 
          ${toggle ? "left-[0]" : "left-[-100%] "}
          `}
        >
          <li className="p-5 cursor-pointer">Home</li>
          <li className="p-5 cursor-pointer">Company</li>
          <li className="p-5 cursor-pointer">Resources</li>
          <li className="p-5 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
