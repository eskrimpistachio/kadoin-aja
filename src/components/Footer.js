import React from "react" ;
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Tiktok from "./img/tiktok.svg";
import Twitter from "./img/twitter.svg";
import Bca from "./img/bca.svg";
import Bri from "./img/bri.svg";
import Dana from "./img/dana.svg";
import Gopay from "./img/gopay.svg";
import Linkaja from "./img/linkaja.svg";
import Mandiri from "./img/mandiri.svg";
import Mastercard from "./img/mastercard.svg";
import Ovo from "./img/ovo.svg";
import Shopeepay from "./img/shopeepay.svg";
import Visa from "./img/visa.svg";


const Footer = ()=>{
    return(
        <div className="bg-brandblack flex flex-col mt-16">
            <div className="flex flex-row text-brandpink-200 text-2xl mt-4">
                <p className="ml-9">Trending</p>
                <p className="ml-80 pl-12">Kategori</p>
                <p className="ml-96">Follow us on: </p>
            </div>
            <div className="flex flex-row mt-4 mb-8">
                <div className="flex flex-col text-base text-white ml-9">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex flex-col text-base text-white ml-9">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex flex-col text-base text-white ml-9">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex flex-col text-base text-white ml-9">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex flex-row w-11 ml-10">
                    <img src={Facebook}></img>
                    <img src={Twitter} className="ml-4"></img>
                    <img src={Instagram} className="ml-4"></img>
                    <img src={Tiktok} className="ml-4"></img>
                </div>
            </div>
            <div className="flex flex-col ">
                <p className="text-brandpink-200 text-2xl mx-auto">Metode Pembayaran</p>
                <div className="flex flex-row mx-auto my-4">
                    <img src={Bca}></img>
                    <img src={Bri} className="ml-1"></img>
                    <img src={Dana} className="ml-1"></img>
                    <img src={Gopay} className="ml-1"></img>
                    <img src={Linkaja} className="ml-1"></img>
                    <img src={Mandiri} className="ml-1"></img>
                    <img src={Mastercard} className="ml-1"></img>
                    <img src={Ovo} className="ml-1"></img>
                    <img src={Shopeepay} className="ml-1"></img>
                    <img src={Visa} className="ml-1"></img>
                </div>
                <p className="text-brandpink-200 text-base font-light mx-auto">©2022 KadoinAja All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer ;
