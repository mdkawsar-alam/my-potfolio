import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // Reference for the nav menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on clicking or scrolling outside
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleScrollOutside = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleScrollOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScrollOutside);
    }

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScrollOutside);
    };
  }, [isMenuOpen]);

  const navItems = ["HOME", "ABOUT ME", "PROJECTS", "SKILL", "BLOG", "CONTACT"];

  return (
    <>
      {/* Mobile navigation header */}
      <div className="flex items-center justify-between h-16 px-6 bg-[#141c27]">
        <Link href="/" className="text-2xl font-bold font-serif">
          KAWSAR
        </Link>
        <button
          onClick={toggleMenu}
          className="text-3xl text-[#0ef]"
          aria-label="Toggle Menu"
        >
          <HiOutlineMenuAlt2 />
        </button>
      </div>

      {/* Mobile navigation menu */}
      <nav
        ref={navRef}
        className={`absolute top-16 left-0 w-1/2 min-h-screen bg-[#0b101b] px-6 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="block my-3 text-base text-white relative overflow-hidden group"
            onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
          >
            {item}
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#0ef] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MobileNav;
