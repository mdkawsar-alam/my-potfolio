'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../Button/button';
y

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-screen bg-[#09101a] text-white fixed top-0 z-50 shadow-2xl">
      <div className="flex items-center justify-between h-16 px-4 lg:px-10 bg-[#141c27]">
        <a href="#" className="text-2xl font-bold font-serif">KAWSAR</a>

        <nav className={`lg:flex lg:space-x-4 bg-[#0b101b] lg:bg-[#141c27]
             absolute top-16 lg:relative w-full lg:w-auto transition-transform duration-300 
             ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

          {['HOME', 'ABOUT ME', 'PROJECTS', 'SKILL', 'EDUCATION', 'SERVICES', 'BLOG', 'CONTACT'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block lg:inline text-base transition duration-500 hover:text-[#0ef] m-3 lg:m-0">
              {item}
            </Link>
          ))}
        </nav>
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-3xl text-[#0ef]">
          {isMenuOpen ? 'Close Menu' : 'Open Menu'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
