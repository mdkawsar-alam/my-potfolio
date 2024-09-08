import { navItems } from "@/index";
import Link from "next/link";


const DesktopNav = () => {
  return (
    <div className="hidden md:flex h-16   bg-slate-900">
      <div className="flex items-center  justify-between w-2/3 mx-auto px-10 bg-slate-800">
        <Link href="/" className="text-2xl font-bold font-serif">
          KAWSAR
        </Link>
        <nav className="flex space-x-4 w-auto">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="relative block text-base text-white transition duration-500 group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 block h-0.5 w-full bg-[#0ef] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DesktopNav;
