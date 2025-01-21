import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

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
];
const Navbar = () => {
  return (
    <nav className="w-full bg-[#FFFFFF]">
      <div className="w-full container flex items-center justify-between p-3">
        <div className="flex items-center gap-1">
          <Image src={logo} width={80} height={80} alt="logo" />
          <h1 className="text-xl md:text-2xl font-semibold mt-3">MakerMatch</h1>
        </div>
        <ul className="flex items-center gap-10 md:gap-14">
          {navLink?.map((link, index) => (
            <li key={index} className="text-lg text-[#484D59]">
              <Link href={link?.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
