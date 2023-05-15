import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
//import icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
// import logo
import Logo from "../img/logo2.jpg";

const Header = () => {
  //Header state
  const [isActive, setIsActive] = useState(true);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  //Event Listener

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container flex mx-auto items-center justify-between h-full">
        {/* Logo */}
        <Link>
          <div>
            <img className="w-[40px]" src={Logo} alt="Mistic" />
          </div>
        </Link>
        {/* Cart */}
        <div
          className="cursor-pointer flex relative "
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="-right-2 -bottom-2 absolute bg-red-500 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}{" "}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
