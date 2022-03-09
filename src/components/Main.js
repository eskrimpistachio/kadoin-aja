import React from "react";
import LineMask from "./img/linemask.svg" ;
import Hero from "./img/hero.svg" ;
import Flower from "./img/flower.svg";
import Dress from "./img/dress.svg";
import Circle1 from "./img/circle1.svg";
import Circle2 from "./img/circle2.svg";
import TopItem from "./TopItem";
import { Link } from "react-router-dom";

const Main = ()=>{
    return(
        <>
            <div className="bg-black flex flex-row overflow-x-hidden">
                <img src={LineMask} width="70%"></img>
                <div className="bg-black absolute z-40 py-16 px-8 m-28">
                    <p className="text-brandpink-100 font-primaryFont font-bold text-6xl mb-6">Having a hard time</p>
                    <p className="text-brandpink-300 font-primaryFont font-bold text-6xl mb-6">Choosing a Gift?</p>
                    <p className="text-brandpink-100 font-primaryFont text-3xl mb-12">Leave it to us!</p>
                    <Link to="./Product.js" className="text-white font-primaryFont px-5 py-4 bg-transparent border border-solid border-white z-50 hover:text-black hover:bg-white">
                        CUSTOM FILTER SEARCH
                    </Link>
                </div>
                <img src={Hero} width="50%"></img>
            </div>

            <div className="flex flex-col">
                <h1 className="text-4xl font-primaryFont mx-auto my-10">SHOP BY CATEGORY</h1>
                <div className="font-logoFont flex flex-row mx-auto text-center">
                    
                    <div className="text-brandpink-300 flex flex-col mr-4">
                        <img src={Circle1}></img>
                        Flowers
                        <img className= "absolute" src={Flower}></img>
                    </div>

                    <div className="text-brandpink-300 flex flex-col mr-4">
                        <img src={Circle2}></img>
                        Fashion
                        <img className= "absolute ml-7" src={Dress}></img>
                    </div>

                    <div className="text-brandpink-300 flex flex-col">
                        <img src={Circle2}></img>
                        Sweets
                        <img className= "absolute" src={Flower}></img>
                    </div>

                    <div className="text-brandpink-300 flex flex-col ml-4">
                        <img src={Circle2}></img>
                        Personalized
                        <img className= "absolute" src={Flower}></img>
                    </div>

                    <div className="text-brandpink-300 flex flex-col ml-4">
                        <img src={Circle2}></img>
                        Couple Gift
                        <img className= "absolute" src={Flower}></img>
                    </div>

                </div>
                <div className="font-logoFont flex flex-row mx-auto my-10 text-center">

                    <div className="text-brandpink-300 flex flex-col mr-4">
                        <img src={Circle2}></img>
                        Toys
                        <img className= "absolute" src={Flower}></img>
                    </div>

                    <div className="text-brandpink-300 flex flex-col mr-4">
                        <img src={Circle2}></img>
                        Candles
                        <img className= "absolute" src={Flower}></img>
                    </div>

                    <div className="text-brandpink-300 flex flex-col">
                        <img src={Circle2}></img>
                        Perfumes
                        <img className= "absolute" src={Flower}></img>
                    </div>

                    <div className="text-brandpink-300 flex flex-col ml-4">
                        <img src={Circle2}></img>
                        Watches
                        <img className= "absolute" src={Flower}></img>
                    </div>

                    <div className="text-brandpink-300 flex flex-col ml-4">
                        <img src={Circle2}></img>
                        Home Decor
                        <img className= "absolute" src={Flower}></img>
                    </div>
                </div>
            </div>

            <TopItem/>
        </>
        
    );
};

export default Main ;