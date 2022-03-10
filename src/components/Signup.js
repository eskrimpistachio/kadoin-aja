import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <div className="bg-loginbg bg-cover h-full p-6 flex flex-col">

            <Link className="text-5xl text-brandpink-100 font-logoFont2" to="/main">Kadoin Aja</Link>

            <div className="mx-auto py-8 px-12 bg-white flex flex-col rounded-[10px]">
                <p className="font-primaryFont text-xl text-brandblack font-bold">Welcome to KadoinAja</p>
                <p className="font-primaryFont text-6xl text-brandblack font-extrabold">Register</p><br/>

                <label for="fullname" className="font-bold font-logoFont">Fullname</label><br/>
                <input type="text" id="fullname" placeholder="Fullname" className="font-logoFont rounded-lg border-brandblack border-solid border-2 p-2"></input><br/>

                <label for="username" className="font-bold font-logoFont ">Username</label><br/>
                <input type="text" id="username" placeholder="Username" className="font-logoFont rounded-lg border-brandblack border-solid border-2 p-2"></input><br/>

                <label for="phone" className="font-bold font-logoFont">Enter your phone number or email address</label><br/>
                <input type="text" id="phone" placeholder="Phone number or email address" className="font-logoFont rounded-lg border-brandblack border-solid border-2 p-2"></input><br/>

                <button className="font-bold text-white font-logoFont text-2xl bg-brandblack px-8 py-2 rounded-[10px]">Register</button><br/>

                <p className="text-sm font-bold text-brandblack">Already Have An Account ?</p>
                <Link className="text-sm text-brandpink-300 font-bold" to="./Login.js">Sign In</Link>
            </div>
        </div>
    );
}

export default Signup;