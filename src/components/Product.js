import React from "react";
import LineMask2 from "./img/linemask2.svg";
import Flower2 from "./img/flower2.svg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Product = () => {
  return (
    <>
    <Navbar/>
      <div className="bg-black flex flex-row">
        <img src={LineMask2}></img>

        <div className="bg-black absolute z-40 my-8 py-16 px-8 w-full">
          <p className="font-primaryFont font-bold text-white text-6xl text-center">
            Having a hard time{" "}
            <span className="text-brandpink-300">Choosing a gift?</span>
          </p>
          <p className="font-primaryFont font-bold text-white text-3xl text-center my-10">
            Fill this and we’ll do it for you!
          </p>
          Link
          <div className="flex flex-row bg-brandpink-100 rounded-[10px] justify-around py-2">
            <div className="flex flex-col my-2">
              <label for="who" className="text-xl font-primaryFont font-bold">
                For Who?
              </label>
              <select
                name="who"
                className="mt-4 py-1 bg-customGray-200 rounded-[10px]"
              >
                <option disabled selected value></option>
                <option>Boyfriend</option>
                <option>Girlfriend</option>
                <option>Friends</option>
                <option>Parents</option>
              </select>
            </div>

            <div className="flex flex-col my-2">
              <label for="who" className="text-xl font-primaryFont font-bold">
                Whats the occasion?
              </label>
              <select
                name="who"
                className="mt-4 py-1 bg-customGray-200 rounded-[10px]"
              >
                <option disabled selected value></option>
                <option>Birthday</option>
                <option>Wedding</option>
              </select>
            </div>

            <div className="flex flex-col my-2">
              <label for="who" className="text-xl font-primaryFont font-bold">
                Whats their characteristic?
              </label>
              <select
                name="who"
                className="mt-4 py-1 bg-customGray-200 rounded-[10px]"
              >
                <option disabled selected value></option>
                <option>Feminime</option>
                <option>Masculine</option>
              </select>
            </div>

            <div className="flex flex-col my-2">
              <label for="who" className="text-xl font-primaryFont font-bold">
                How old are they?
              </label>
              <select
                name="who"
                className="mt-4 py-1 bg-customGray-200 rounded-[10px]"
              >
                <option disabled selected value></option>
                <option>Child</option>
                <option>Teenager</option>
                <option>Adults</option>
              </select>
            </div>

            <div className="flex flex-col my-2">
              <label for="who" className="text-xl font-primaryFont font-bold">
                How much is your budget?
              </label>
              <select
                name="who"
                className="mt-4 py-1 bg-customGray-200 rounded-[10px]"
              >
                <option disabled selected value></option>
                <option>&lt;Rp.50.000</option>
                <option>Rp.50.000 - Rp.200.000</option>
                <option>Rp.200.000 - Rp.500.000</option>
                <option>Rp.500.000 - Rp.1.000.000</option>
                <option>&gt;Rp.1.000.000</option>
              </select>
            </div>
          </div>
          <button className="text-white font-logoFont px-12 py-4 bg-transparent border border-solid border-white hover:text-black hover:bg-white ml-half mt-8">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-row bg-brandpink-100">
        <div className="ml-4 mr-6"></div>
        <div className="flex flex-col mx-auto">
          <div className="flex flex-row mb-10">
            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>

            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>

            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>

            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>
          </div>

          <div className="flex flex-row mb-10">
            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>

            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>

            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>

            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>
          </div>

          <div className="flex flex-row mb-10">
            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>

            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>

            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>

            <Link
              to="Detail.js"
              className="flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white"
            >
              <img src={Flower2}></img>

              <div className="mx-auto">
                <p className="font-primaryFont font-bold text-2xl">
                  Beautiful Red & Pink
                </p>
                <p className="font-primaryFont font-bold text-2xl ">
                  Rose Hand Bouquet
                </p>
                <p className="line-through text-xs font-logoFont mt-6">
                  {" "}
                  Rp 100.000 (-25%){" "}
                </p>
                <p className="font-logoFont font-bold text-xl mb-6">
                  Rp 75.000{" "}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Product;
