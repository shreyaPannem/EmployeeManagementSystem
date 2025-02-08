import React, { useState } from "react";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center border h-screen w-screen border-amber-600">
      <div className="">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=" flex flex-col border border-amber-400 p-7 rounded-2xl w-90 h-80 gap-3"
        >
          <h2 className="font-semibold text-xl  text-center">Login</h2>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="w-full  focus:ring-1 focus:ring-amber-400 p-2 outline-none rounded-xl mb-2 bg-gray-700"
            required
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
            className="w-full  focus:ring-1 focus:ring-amber-400 p-2 outline-none rounded-xl mb-2 bg-gray-700"
            required
          />

          <div className="flex items-center justify-baseline">
            <input type="checkbox" name="" id="" className="h-4 w-5" />
            Remember me
            <a href="#" className="hover:underline  ml-15">
              Forgot Password
            </a>
          </div>

          <input
            type="submit"
            value="Login"
            className="w-full bg-amber-500 p-3 font-bold mt-4 rounded-xl text-white hover:bg-amber-400"
          />
          {/* <button className="w-full bg-amber-500 p-3 font-bold mt-4 rounded-xl text-white hover:bg-amber-400">Login</button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
