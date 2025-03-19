import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Register:", { name, email, password });
  };
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 md:p-12 border shadow-xl rounded"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-center text-2xl font-bold mb-6">Welcome!</h2>
          <p className="text-center mb-6 tracking-tighter">
            Please fill in your details to create an account.
          </p>

          <div className="mb-4">
            <label className="text-sm font-semibold block mb-2">Name</label>
            <input
              type="text"
              className="border w-full p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button className="bg-black text-white w-full p-2 rounded-lg mb-6 font-semibold hover:bg-gray-800 transition">
            Sign Up
          </button>
          <p className="text-sm font-medium text-center tracking-tighter">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="text-blue-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="Register to account"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
