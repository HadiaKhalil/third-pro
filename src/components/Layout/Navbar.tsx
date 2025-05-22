"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Home, Building, Info, Newspaper, Phone } from "lucide-react";

const navLinks = [
  { href: "#aanbod", label: "Aanbod", icon: <Home size={18} /> },
  { href: "#waardebepaling", label: "Waardebepaling", icon: <Building size={18} /> },
  { href: "#over-ons", label: "Over ons", icon: <Info size={18} /> },
  { href: "#nieuws", label: "Nieuws", icon: <Newspaper size={18} /> },
  { href: "#contact", label: "Contact", icon: <Phone size={18} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <Image src="/images/pic44.png" alt="Logo" width={130} height={80} />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-16 text-gray-800 font-semibold text-base">
          {navLinks.map(({ href, label, icon }) => (
            <li key={label} className="group flex items-center space-x-3 cursor-pointer relative">
              <a
                href={href}
                className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </a>
              {/* Underline animation */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col px-6 py-6 space-y-6 text-gray-800 font-semibold text-base">
            {navLinks.map(({ href, label, icon }) => (
              <li
                key={label}
                className="flex items-center gap-4 cursor-pointer hover:text-blue-600 transition-colors duration-200"
              >
                <span>{icon}</span>
                <a href={href} onClick={() => setIsOpen(false)} className="block w-full">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
