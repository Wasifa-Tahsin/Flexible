import React from "react";
import logo from "../assets/logo.png";
import Menu from "./Menu";
import Link from "./Link";
import Search from "./ui/Search";
import Avatar from "./ui/Avatar";
import Upload from "./ui/Upload";
import { LuUpload } from "react-icons/lu";
const Header = () => {
  return (
    <main className=" sticky top-0 z-50 backdrop-blur-xl bg-white/30  border-b border-gray-100">
      <header className="w-7xl mx-auto px-8 py-4 flex items-center justify-between">
      <section className="flex items-center gap-8">
        <img className=" " src={logo} alt="" />
        <Menu></Menu>
      </section>
      
      <section className="flex gap-4 items-center">
        <Link  text="Apply Now" link="#"></Link>
        <Search></Search>
        <Avatar></Avatar>
        <Upload icon={<LuUpload />} text='Upload'></Upload>
      </section>
    </header>
    </main>
  );
};

export default Header;
