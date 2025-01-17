import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="flex items-center justify-center border-b border-black">
      <div className="w-3/5 px-8 pt-12">
        {showForgotPassword ? (
          <div className="text-center h-60">
            <h1 className="text-4xl font-medium font-cormorant text-center mb-6">
              Reset Your Password
            </h1>
            <p className="text-base font-work mb-8 text-[#202025]">
              We will send you an email to reset your password.
            </p>
            <input
              type="email"
              placeholder="Email"
              className="font-work w-full p-2 mb-8 h-12 border border-[#dee2e6] rounded inline-block"
            />
            <button className="w-full bg-[#202025] text-white h-12 font-work font-medium p-2 rounded hover:opacity-80 duration-700">
              SUBMIT
            </button>
            <p
              className="text-base text-gray-600 underline font-work text-center mt-4 cursor-pointer"
              onClick={() => setShowForgotPassword(false)}
            >
              Back to login
            </p>
          </div>
        ) : (
          <div className="text-center h-80">
            <h1 className="text-4xl text-[#202025] font-cormorant font-medium mb-6">
              Login
            </h1>
            <p className="text-base font-work mb-12 text-[#202025]">
              Please enter your email and password:
            </p>
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
            <div className="flex justify-end items-center mb-4">
              <span
                className="text-sm text-[#444444] font-work hover:text-[#202025] underline cursor-pointer"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot your password?
              </span>
            </div>
            <button className="w-full bg-[#202025] text-white h-12 font-work font-medium p-2 rounded hover:opacity-80 duration-700">
              LOGIN
            </button>
            <p className="text-base font-work text-center mt-4">
              New customer?{" "}
              <Link
                to="/register"
                className="text-[#444444] hover:text-[#202025] underline"
              >
                Register
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
