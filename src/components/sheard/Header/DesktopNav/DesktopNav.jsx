import Link from 'next/link';

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center justify-between h-16 px-10 bg-[#141c27]">
      <Link href="/" className="text-2xl font-bold font-serif">KAWSAR</Link>
      <nav className="flex space-x-4 w-auto">
        {['HOME', 'ABOUT ME', 'PROJECTS', 'SKILL', 'BLOG', 'CONTACT'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="relative block text-base text-white transition duration-500 group"
          >
            {item}
            <span className="absolute left-0 bottom-0 block h-0.5 w-full bg-[#0ef] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DesktopNav;
