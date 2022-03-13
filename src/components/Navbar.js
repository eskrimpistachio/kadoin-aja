import React from "react";
import Menu from "./Menu.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-customGray-500 p-6 flex flex-row">
        <Link className="text-5xl text-brandpink-100 font-logoFont2" to="/main">
          Kadoin Aja
        </Link>
        <div></div>
        <div className="ml-auto mr-16 flex flex-row">
          <Link
            to=""
            className="text-xl text-brandpink-100 font-primaryFont mt-6 mr-16"
          >
            Akun
          </Link>
          <p className="text-xl text-brandpink-100 font-primaryFont mt-6 mr-16">
            Wishlist
          </p>
          <Link
            to=""
            className="text-xl text-brandpink-300 font-primaryFont mt-6"
          >
            Keranjang<span></span>
          </Link>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;
