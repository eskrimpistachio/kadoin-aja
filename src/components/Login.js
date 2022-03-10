import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (  
        <div className="bg-loginbg bg-cover h-full p-6 flex flex-col">

            <Link className="text-5xl text-brandpink-100 font-logoFont2" to="/main">Kadoin Aja</Link>

            <div className="mx-auto py-8 px-12 bg-white flex flex-col rounded-[10px]">
                <p className="font-primaryFont text-xl text-brandblack font-bold">Welcome to KadoinAja</p>
                <p className="font-primaryFont text-6xl text-brandblack font-extrabold">Login</p><br/>

                <label for="phone" className="font-bold font-logoFont">Enter your phone number or email address</label><br/>
                <input type="text" id="phone" placeholder="Phone number or email address" className="font-logoFont rounded-lg border-brandblack border-solid border-2 p-2"></input><br/>

                <label for="pass" className="font-bold font-logoFont ">Enter your Password</label><br/>
                <input type="text" id="phone" placeholder="Password" className="font-logoFont rounded-lg border-brandblack border-solid border-2 p-2"></input><br/>

                <p className="font-logoFont text-brandpink-300 ml-auto">Forgot Password</p><br/>

                <button className="font-bold text-white font-logoFont text-2xl bg-brandblack px-8 py-2 rounded-[10px]">Login</button><br/>

                <p className="text-sm font-bold text-brandblack">No Account?</p>
                <Link className="text-sm text-brandpink-300 font-bold" to="./Signup.js">Sign Up</Link>
            </div>
        </div>
    );
}
export default Login;