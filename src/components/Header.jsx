import React, { useState } from "react";
import { NavLink } from "react-router";
import { LuUpload, LuMenu, LuX } from "react-icons/lu";

import logo from "../assets/logo.png";
import Menu from "./Menu";

import Search from "./ui/Search";
import Avatar from "./ui/Avatar";
import Upload from "./ui/Upload";

const Header = () => {
  const [isLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="sticky top-0 z-50 backdrop-blur-xl bg-white/30 border-b border-gray-100">
      <header className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        
        {/* Left Section */}
        <section className="flex items-center gap-8">
          <NavLink to="/"><img src={logo} alt="Logo" className="h-8 md:h-10" /></NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex"><Menu /></div>
        </section>

        {/* Right Section */}
        <section className="flex items-center gap-4">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to='/applyNow' className="text-purple-600">Apply Now</NavLink>
            <Search />
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <NavLink to="/userProfile"><Avatar /></NavLink>
                <Upload icon={<LuUpload />} text="Upload" />
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
              >
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </section>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <NavLink to='/' className="hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to='/applyNow' className="hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</NavLink>
              <Menu isMobile={true} closeMenu={() => setIsMobileMenuOpen(false)} />
              {isLoggedIn ? (
                <div className="flex flex-col gap-2">
                  <NavLink to="/userProfile" onClick={() => setIsMobileMenuOpen(false)}>Profile</NavLink>
                  <Upload icon={<LuUpload />} text="Upload" />
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        )}
      </header>
    </main>
  );
};

export default Header;
