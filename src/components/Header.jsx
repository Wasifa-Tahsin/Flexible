import React from "react";
import { NavLink } from "react-router";
import { LuUpload } from "react-icons/lu";

import logo from "../assets/logo.png";
import Menu from "./Menu";

import Search from "./ui/Search";
import Avatar from "./ui/Avatar";
import Upload from "./ui/Upload";

const Header = () => {
  const isLoggedIn = true;

  return (
    <main className=" sticky top-0 z-50 backdrop-blur-xl bg-white/30 border-b border-gray-100">
      <header className="container mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Left Section */}
        <section className="flex items-center gap-8">
          <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
          <Menu />
        </section>

        {/* Right Section */}
        <section className="flex items-center gap-4">
          <NavLink to='/applyNow' className="text-purple-600">Apply Now</NavLink>
          <Search />

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
             <NavLink to="/userProfile"> <Avatar /></NavLink>
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
        </section>
      </header>
    </main>
  );
};

export default Header;
