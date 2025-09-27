import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="w-full fixed top-0 bg-black z-40">
      <div className="w-full flex items-center justify-between py-3 px-10 lg:px-[8rem]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="./logosvg.svg" alt="logo" className="h-[2.5rem] w-auto" />
          <h4 className="font-heading font-bold text-xl">FrameStack</h4>
        </div>

        {/* Mobile Buttons */}
        {!isOpen && (
          <button
            onClick={toggle}
            className="lg:hidden mix-blend-difference"          
            >
            <CiMenuBurger />
          </button>
        )}
        {isOpen && (
          <button
            onClick={toggle}
            className="z-30 lg:hidden mix-blend-difference"
          >
            <IoMdClose />
          </button>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full min-h-screen bg-black z-20 flex flex-col items-center justify-center gap-10 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <NavLink to="/" className="cursor-pointer hover:text-white text-[#E4E4E4] mix-blend-difference">
            Home
          </NavLink>
          <NavLink to="/" className="cursor-pointer hover:text-white text-[#E4E4E4] mix-blend-difference">
            Services
          </NavLink>
          <NavLink to="/pricing" className="cursor-pointer hover:text-white text-[#E4E4E4] mix-blend-difference">
            Pricing
          </NavLink>
          <NavLink to="/contact" className="cursor-pointer hover:text-white text-[#E4E4E4] mix-blend-difference">
            Contact
          </NavLink>
          <div className="flex items-center gap-4">
            <form action="/login" className="cursor-pointer">
                <button>Login</button>
            </form>
            <form action="/signup" className="cursor-pointer">
              <button>Signup</button>
            </form>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-16">
          <NavLink to="/" className="cursor-pointer hover:text-white text-[#E4E4E4] mix-blend-difference">
            Home
          </NavLink>
          <NavLink to="/" className="cursor-pointer hover:text-white text-[#E4E4E4] mix-blend-difference">
            Services
          </NavLink>
          <NavLink to="/pricing" className="cursor-pointer hover:text-white text-[#E4E4E4] mix-blend-difference">
            Pricing
          </NavLink>
          <NavLink to="/contact" className="cursor-pointer hover:text-white text-[#E4E4E4] mix-blend-difference">
            Contact
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <form action="/login" className="cursor-pointer">
                <button>Login</button>
            </form>
            <form action="/signup" className="cursor-pointer">
              <button className='btn'>Signup</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;
