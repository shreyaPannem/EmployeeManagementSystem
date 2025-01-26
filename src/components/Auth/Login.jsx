import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log("form submitted");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="border-2 border-emerald-600 rounded-[45px] h-100 w-100 flex justify-center items-center">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col h-50 w-80  items-center justify-center gap-1.5"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            className="w-full placeholder:text-l px-5 py-2 rounded-full text-white font-bold outline-none border border-emerald-600"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
            className="w-full mt-3 placeholder:text-l px-5 py-2 rounded-full text-white font-bold outline-none border border-emerald-600"
            required
          />
          <button className="mt-4 bg-emerald-600 w-33 p-3  font-semibold text-xl rounded-full outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
