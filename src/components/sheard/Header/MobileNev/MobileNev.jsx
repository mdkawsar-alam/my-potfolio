import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between h-16 px-6 bg-[#141c27]">
        <Link href="/" className="text-2xl font-bold font-serif">KAWSAR</Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-[#0ef]"
        >
          <HiOutlineMenuAlt2 />
        </button>
      </div>
      <nav
        className={`min-h-screen absolute px-6 top-16 w-1/2 bg-[#0b101b]
          transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {['HOME', 'ABOUT ME', 'PROJECTS', 'SKILL', 'BLOG', 'CONTACT'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="block text-base relative overflow-hidden transition duration-500 my-3 text-white group"
          >
            {item}
            <span className="absolute left-0 bottom-0 block h-0.5 w-full bg-[#0ef] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MobileNav;
