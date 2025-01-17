import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center border-b border-black">
      <div className="w-3/5 px-8 pt-12 text-center h-screen">
        <h1 className="text-4xl text-[#202025] font-cormorant font-medium mb-6">
          Register
        </h1>
        <p className="text-base font-work mb-8 text-[#202025]">
          Please fill in the fields below:
        </p>
        <input
          type="text"
          placeholder="First Name"
          className="font-work w-full p-2 mb-6 h-12 border border-[#dee2e6] rounded inline-block"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="font-work w-full p-2 mb-6 h-12 border border-[#dee2e6] rounded inline-block"
        />
        <input
          type="email"
          placeholder="Email"
          className="font-work w-full p-2 mb-6 h-12 border border-[#dee2e6] rounded inline-block"
        />
        <input
          type="password"
          placeholder="Password"
          className="font-work w-full p-2 mb-6 h-12 border border-[#dee2e6] rounded inline-block"
        />
        <button className="w-full bg-[#202025] text-white h-12 uppercase font-work font-medium p-2 rounded hover:opacity-80 duration-700">
          Submit
        </button>
        <p className="text-base font-work text-center mt-4">
          Already a member ?{" "}
          <Link
            to="/login"
            className="text-[#444444] hover:text-[#202025] underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
