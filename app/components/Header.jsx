"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border-b">
      <div className="flex items-center justify-between h-16 max-w-6xl px-6 mx-auto">
        
        {/* Logo / Name */}
        <div className="text-lg font-bold">
          Maku<span className="text-indigo-500">.dev</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 md:flex">
          <a href="#about" className="text-gray-600 transition hover:text-black">
            About
          </a>
          <a href="#skills" className="text-gray-600 transition hover:text-black">
            Skills
          </a>
          <a href="#projects" className="text-gray-600 transition hover:text-black">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 transition hover:text-black">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="bg-white border-t md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
