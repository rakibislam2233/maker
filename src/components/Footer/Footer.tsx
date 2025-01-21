import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaRedditAlien,
  FaEllipsisH,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-white px-5 py-16">
      {/* Call-to-Action Section */}
      <div className="w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Your Journey Today
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Love is closer than you think. Join MakerMatch and let us help you
          find the connection you’ve been searching for.
        </p>
        <div className="w-full max-w-xl mx-auto flex justify-between items-center gap-1 rounded-full bg-[#F2F3F6] p-1">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full  py-2 px-5 rounded-l-full outline-none bg-transparent text-[#696B6F]"
          />
          <button className="bg-secondary text-white px-10 py-2.5 rounded-full text-sm flex-shrink-0">
            Join Now – It’s Free
          </button>
        </div>
      </div>
      {/* Footer Section */}
      <div className="w-full max-w-7xl mx-auto mt-16">
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-700 text-sm">
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              Contacts Us
            </a>
            <a href="#" className="hover:underline">
              Guidelines
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center mt-6 md:mt-0 gap-4">
            <Link
              href="#"
              className="size-10 text-white rounded-full bg-black flex justify-center items-center hover:bg-secondary transition-all duration-300"
            >
              <FaInstagram className="size-6" />
            </Link>
            <Link
              href="#"
              className="size-10 text-white rounded-full bg-black flex justify-center items-center hover:bg-secondary transition-all duration-300"
            >
              <FaFacebookF className="size-6" />
            </Link>
            <Link
              href="#"
              className="size-10 text-white rounded-full bg-black flex justify-center items-center hover:bg-secondary transition-all duration-300"
            >
              <FaRedditAlien className="size-6" />
            </Link>
            <Link
              href="#"
              className="size-10 text-white rounded-full bg-black flex justify-center items-center hover:bg-secondary transition-all duration-300"
            >
              <FaEllipsisH className="size-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-lg text-gray-500">
          © 2025 Maker Match
        </div>
      </div>
    </div>
  );
};

export default Footer;
