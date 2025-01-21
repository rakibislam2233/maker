"use client";
import React, { useState } from "react";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLink = [
  {
    title: "About",
    url: "#about",
  },
  {
    title: "How It Works",
    url: "#how-it-works",
  },
  {
    title: "Benefits",
    url: "#benefits",
  },
  {
    title: "Testimonials",
    url: "#testimonials",
  },
  {
    title:"Faq",
    url:"#faq"
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-[#FFFFFF]">
      <div className="w-full container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <Link href="/">
          {" "}
          <div className="flex items-center gap-2">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h1 className="text-xl md:text-2xl font-semibold">MakerMatch</h1>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:static md:flex md:items-center md:gap-10 md:w-auto md:shadow-none md:translate-x-0`}
        >
          <div className="flex items-center justify-between px-4 py-3 md:hidden">
            <div className="flex items-center gap-2">
              <Image src={logo} width={60} height={60} alt="logo" />
            </div>
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          {navLink.map((link, index) => (
            <li
              key={index}
              className="px-4 py-2 text-lg text-[#484D59] hover:text-pink-500 md:px-0"
            >
              <Link href={link.url} scroll={true} onClick={() => setIsMenuOpen(false)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
