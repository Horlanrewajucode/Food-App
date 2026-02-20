import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNavBar() {
    setIsOpen((open) => !open);
  }
  return (
    <nav className=" py-6">
      {/* Desktop NavBar */}
      <header className="hidden md:flex font-medium font-serif md:items-center md:justify-between gap-40">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[rgba(255,122,24,1)] font-bold "
              : "hover:text-[rgba(255,122,24,1)] transition-all ease-in duration-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive
              ? "text-[rgba(255,122,24,1)] font-bold"
              : "hover:text-[rgba(255,122,24,1)] transition-all ease-in duration-500"
          }
        >
          Explore
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive
              ? "text-[rgba(255,122,24,1)] font-bold"
              : "hover:text-[rgba(255,122,24,1)] transition-all ease-in duration-500"
          }
        >
          My Orders
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive
              ? "text-[rgba(255,122,24,1)] font-bold"
              : "hover:text-[rgba(255,122,24,1)] transition-all ease-in duration-500"
          }
        >
          Account
        </NavLink>
        <NavLink
          to="/login"
          className="bg-[rgba(255,122,24,1)] rounded-[10px] px-10 py-2 text-white hover:bg-amber-500 transition-all duration-300 font-bold ease-in-out"
        >
          Login
        </NavLink>
      </header>

      {/* open Hamburger */}
      {!isOpen && (
        <div
          className="md:hidden lg:hidden cursor-pointer"
          onClick={toggleNavBar}
        >
          <HiMenu size={30} />
        </div>
      )}
      {/* Close Hamburger */}
      {isOpen && (
        <div
          className="md:hidden lg:hidden cursor-pointer z-30 fixed top-12 right-8"
          onClick={toggleNavBar}
        >
          <IoClose size={30} />
        </div>
      )}
      {/* Mobile NavBar */}
      {isOpen && (
        <div className="overflow-y-hidden fixed z-10 top-0 left-0 w-screen min-h-screen flex flex-col justify-center items-center al gap-15 duration-300 ease-in py-8 text-[1.5rem] bg-white ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[rgba(255,122,24,1)] font-bold"
                : "hover:text-[rgba(255,122,24,1)] transition-all ease-in duration-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "text-[rgba(255,122,24,1)] font-bold"
                : "hover:text-[rgba(255,122,24,1)] transition-all ease-in duration-500"
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? "text-[rgba(255,122,24,1)] font-bold"
                : "hover:text-[rgba(255,122,24,1)] transition-all ease-in duration-500"
            }
          >
            My Orders
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive
                ? "text-[rgba(255,122,24,1)] font-bold"
                : "hover:text-[rgba(255,122,24,1)] transition-all ease-in duration-500"
            }
          >
            Account
          </NavLink>
          <NavLink
            to="/login"
            className="bg-[rgba(255,122,24,1)] rounded-[10px] px-10 py-2 text-white"
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
