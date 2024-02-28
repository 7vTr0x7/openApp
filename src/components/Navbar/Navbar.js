import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../utils/OpenAppBull.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  let connected = false;

  const navLinks = [
    {
      label: "Buy",
      to: "/buy",
    },
    {
      label: "Sell",
      to: "/sell",
    },
    {
      label: "Swap",
      to: "/",
    },
    {
      label: "Account",
      to: "/account",
    },
  ];

  return (
    <nav className="flex justify-between px-8 items-center py-6 shadow-lg lg:px-14">
      <div className="flex items-center gap-16">
        <section className="flex items-center gap-5">
          <FiMenu
            className="text-4xl cursor-pointer lg:hidden"
            onClick={() => setIsSideMenuOpen(true)}
          />

          <Link to="/">
            <img src={logo} alt="logo" className="h-12" />
          </Link>
        </section>
        {navLinks.map((items) => (
          <Link
            key={items.label}
            to={items.to}
            className=" hidden lg:block text-gray-400 hover:text-black font-bold">
            {items.label}
          </Link>
        ))}
      </div>

      <div
        className={clsx(
          "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
          isSideMenuOpen && "translate-x-0"
        )}>
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-56">
          <IoCloseOutline
            onClick={() => setIsSideMenuOpen(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />

          {navLinks.map((items) => (
            <Link key={items.label} to={items.to} className="font-bold">
              {items.label}
            </Link>
          ))}
        </section>
      </div>

      <section>
        <button className="font-bold text-xl border border-gray-300 bg-gray-100 px-4 py-1 rounded-2xl hover:bg-white hover:text-black  ">
          {connected ? "Disconnect" : "Connect"}
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
