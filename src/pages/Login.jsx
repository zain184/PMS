import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/maxobiz.svg";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    // later you will add real auth logic here
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen bg-slate-200 flex items-center justify-center p-4 font-sans overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-white/40 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-white/40 rounded-full blur-3xl" />

      {/* Main Card: Fixed dimensions based on your Figma (548x616) */}
      <div className="relative z-10 w-full max-w-137 min-h-154 bg-white rounded-2xl shadow-[0_4px_24px_0_rgba(34,41,47,0.1)] p-12 flex flex-col justify-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <img src={Logo} alt="maxobiz-logo" className="h-10 mb-6" />
          <h1 className="text-[26px] font-semibold text-[#5d596c] mb-2 text-center">
            Welcome to Maxobiz!
          </h1>
          <p className="text-[#6f6b7d] text-center text-[15px]">
            Please sign-in to your account and start <br /> the adventure
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Username Field */}
          <div>
            <label className="block text-[13px] font-medium text-[#5d596c] uppercase tracking-[0.4px] mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2.5 rounded-md border border-[#dbdade] focus:border-[#7367f0] outline-none transition-all placeholder:text-[#b0adbb] text-[#6f6b7d]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-[13px] font-medium text-[#5d596c] uppercase tracking-[0.4px] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="············"
                className="w-full px-4 py-2.5 rounded-md border border-[#dbdade] focus:border-[#7367f0] outline-none transition-all placeholder:text-[#b0adbb] text-[#6f6b7d]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b0adbb] hover:text-[#6f6b7d]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Captcha */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-[#dbdade] text-[#7367f0] focus:ring-[#7367f0]"
              />
              <span className="text-[15px] text-[#6f6b7d]">Remember Me</span>
            </label>

            {/* reCAPTCHA Mockup */}
            <div className="flex flex-col items-center">
              <div className="bg-[#f8f7fa] p-1.5 rounded border border-[#dbdade]">
                <svg
                  className="w-5 h-5 text-[#7367f0]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <span className="text-[9px] text-[#b0adbb] mt-0.5 uppercase font-bold">
                reCAPTCHA
              </span>
            </div>
          </div>

          {/* Login Button - Outlined style*/}
          <button
            onClick={handleLogin}
            className="w-full bg-white hover:bg-[#7367f0] hover:text-white text-[#7367f0] border border-[#7367f0] py-2.5 px-4 rounded-md font-medium transition-all duration-200 mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
