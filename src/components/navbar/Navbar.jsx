import { useState } from "react";
import { Home, Menu, X, CircleDollarSign, User } from "lucide-react";
import Logo from "../../assets/Resource/Logo.png"

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Reviews",
    "Procedures",
    "Blog",
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 lg:px-10 py-4 bg-white">
      
      <div className="flex items-center gap-2">
          <img src={Logo} alt="" />
        <h1 className="text-2xl font-semibold">Finestra</h1>
      </div>

      {/* Middle Desktop Menu */}
      <div className="hidden lg:flex bg-black text-white rounded-full px-3 py-2 items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`transition flex items-center gap-2
              ${
                active === item
                  ? "bg-[#FF5F5F] px-2 py-2 rounded-full text-white"
                  : "text-white"
              }
            `}
          >
            {item === "Home" && active === "Home" && <Home size={17} />}
            {item}
          </button>
        ))}
      </div>

      {/* Right Side Desktop */}
      <div className="hidden lg:flex items-center gap-4">
        {/* Toggle Pill */}
        <div className="w-10 h-5 rounded-full border border-gray-300 flex items-center px-1 cursor-pointer">
          <div className="w-4 h-4 bg-[#FF5F5F] rounded-full"></div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#8eb4c9] flex items-center justify-center">
        <User size={18} className="text-white" />
        </div>
        <div className="flex items-center gap-1 text-black">
          <span className="font-medium">+pro</span>
          <CircleDollarSign size={18} />
        </div>

        {/* Sign In */}
        <button className="px-5 py-2 border border-black rounded-full hover:bg-gray-100 transition">
          Sign In
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button className="lg:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-8 z-50">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              className={`text-lg transition ${
                active === item ? "text-[#FF5F5F]" : "text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}

          {/* Mobile Right Section */}
          <div className="flex items-center gap-5 mt-4">
            <div className="w-10 h-5 rounded-full border border-gray-300 flex items-center px-1 cursor-pointer">
              <div className="w-4 h-4 bg-[#FF5F5F] rounded-full"></div>
            </div>

            {/* Circle Badge */}
            <div className="w-8 h-8 rounded-full bg-[#8eb4c9] flex items-center justify-center">
            <User size={18} className="text-white" />
            </div>


            {/* Icon + pro sign */}
            <div className="flex items-center gap-1 text-white">
              <span className="font-medium">+pro</span>
              <CircleDollarSign size={18} />
            </div>
          </div>

          {/* Sign In Button */}
          <button className="mt-4 px-6 py-2 border border-white rounded-full">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
