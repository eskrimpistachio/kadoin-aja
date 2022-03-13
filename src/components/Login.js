import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { api } from "../config/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(email);
      console.log(password);
      try{
        const {data} = await api.post("/auth/login",{usernameOrEmail:email,password});
        localStorage.setItem("token",data.data.token);
        window.location.reload();
      }
      catch(err){
        console.log(err.message);
      }
  }

  return (
    <div className="bg-loginbg bg-cover h-full p-6 flex flex-col">
      <Link className="text-5xl text-brandpink-100 font-logoFont2" to="/main">
        Kadoin Aja
      </Link>

      <form className="mx-auto py-8 px-12 bg-white flex flex-col rounded-[10px]" onSubmit={handleSubmit}>
        <p className="font-primaryFont text-xl text-brandblack font-bold">
          Welcome to KadoinAja
        </p>
        <p className="font-primaryFont text-6xl text-brandblack font-extrabold">
          Login
        </p>
        <br />

        <label for="phone" className="font-bold font-logoFont">
          Enter your phone number or email address
        </label>
        <br />
        <input
          type="text"
          id="phone"
          placeholder="Phone number or email address"
          className="font-logoFont rounded-lg border-brandblack border-solid border-2 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label for="pass" className="font-bold font-logoFont ">
          Enter your Password
        </label>
        <br />
        <input
          type="password"
          id="phone"
          placeholder="Password"
          className="font-logoFont rounded-lg border-brandblack border-solid border-2 p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <p className="font-logoFont text-brandpink-300 ml-auto">
          Forgot Password
        </p>
        <br />

        <button className="font-bold text-white font-logoFont text-2xl bg-brandblack px-8 py-2 rounded-[10px]" type="submit">
          Login
        </button>
        <br />

        <p className="text-sm font-bold text-brandblack">No Account?</p>
        <Link className="text-sm text-brandpink-300 font-bold" to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
  );
};
export default Login;
