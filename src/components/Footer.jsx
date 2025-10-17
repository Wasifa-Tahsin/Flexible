import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto mt-10 px-5 py-10 text-gray-700">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10 border-b border-gray-200 pb-8">
        {/* Left side: Logo + description + icons */}
        <div className="md:w-1/3 space-y-5">
          <img src={logo} alt="Logo" className="w-28" />
          <p className="text-sm leading-relaxed">
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>

          <div className="flex gap-3 text-xl text-gray-600">
            <FaTelegram className="border cursor-pointer rounded-full" />{" "}
            <FaInstagram className="border cursor-pointer  rounded-full" />{" "}
            <FaTiktok className="border cursor-pointer  rounded-full" />{" "}
            <FaWhatsapp className="border cursor-pointer  rounded-full" />
          </div>
        </div>

        {/* Right side: Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h2 className="font-bold text-lg mb-3">For Designers</h2>
            <ul className="space-y-1">
              <li>Go Pro!</li>
              <li>Explore design work</li>
              <li>Design blog</li>
              <li>Overtime podcast</li>
              <li>Playoffs</li>
              <li>Refer a Friend</li>
              <li>Code of conduct</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">Hire Designers</h2>
            <ul className="space-y-1">
              <li>Post a job opening</li>
              <li>Post a freelance project</li>
              <li>Search for designers</li>
            </ul>
            <h2 className="font-bold text-lg mt-4 mb-3">Brands</h2>
            <ul className="space-y-1">
              <li>Advertise with us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">Company</h2>
            <ul className="space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Media Kit</li>
              <li>Testimonials</li>
              <li>API</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">Directories</h2>
            <ul className="space-y-1">
              <li>Design jobs</li>
              <li>Designers for hire</li>
              <li>Freelance designers</li>
              <li>Tags</li>
              <li>Places</li>
            </ul>
            <h2 className="font-bold text-lg mt-2 mb-3">Design assets</h2>
            <ul className="space-y-1">
                <li>Flexibble Marketplace</li>
                <li>Creative Market</li>
                <li>Fontspring</li>
                <li>Font Squirrel</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">Design Resources</h2>
            <ul className="space-y-1">
              <li>Freelancing</li>
              <li>Design Hiring</li>
              <li>Design Portfolio</li>
              <li>Design Education</li>
              <li>Creative Process</li>
              <li>Playoffs</li>
              <li>Design Industry</li>
              <li>Trends</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="flex justify-between items-center">
        <p className=" text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Flexibble. All rights reserved
        </p>
        <p className="text-xs text-gray-500">21,160,075 shots flexibble</p>
      </div>
    </footer>
  );
};

export default Footer;
