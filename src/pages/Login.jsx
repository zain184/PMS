import React, { useState, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/maxobiz.svg";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"; // 1. Import library

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null); // 2. State for security token
  const recaptchaRef = useRef(null); // 3. Ref to reset if login fails
  const navigate = useNavigate();

  // Handlers
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken(null);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Security Guard: Prevent login logic if captcha is missing
    if (!captchaToken) return;

    // --- YOUR EXISTING TIMER LOGIC (Do not change) ---
    const now = new Date();
    const todayStr = now.toDateString();
    const savedDate = localStorage.getItem("pms_last_reset_date");

    if (savedDate !== todayStr) {
      localStorage.setItem("pms_total_seconds", "0");
      localStorage.setItem("pms_last_reset_date", todayStr);
    }
    localStorage.setItem("pms_session_start", now.toISOString());
    // --------------------------------------------------

    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen bg-slate-200 flex items-center justify-center p-4 font-sans overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-[548px] min-h-[616px] bg-white rounded-2xl shadow-[0_4px_24px_0_rgba(34,41,47,0.1)] p-12 flex flex-col justify-center">
        <div className="flex flex-col items-center mb-8">
          <img src={Logo} alt="maxobiz-logo" className="h-10 mb-6" />
          <h1 className="text-[26px] font-semibold text-[#5d596c] mb-2 text-center">
            Welcome to Maxobiz!
          </h1>
          <p className="text-[#6f6b7d] text-center text-[15px]">
            Please sign-in to your account and start the adventure
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-[13px] font-medium text-[#5d596c] uppercase mb-1">
              Username
            </label>
            <input
              type="text"
              required
              placeholder="Enter your username"
              className="w-full px-4 py-2.5 rounded-md border border-[#dbdade] focus:border-[#7367f0] outline-none transition-all placeholder:text-[#b0adbb] text-[#6f6b7d]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#5d596c] uppercase mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
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

          <div className="flex flex-col gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-[#dbdade] text-[#7367f0] focus:ring-[#7367f0]"
              />
              <span className="text-[15px] text-[#6f6b7d]">Remember Me</span>
            </label>

            {/* 4. THE PRODUCTION reCAPTCHA WIDGET */}
            <div className="flex justify-center md:justify-start overflow-hidden py-1">
              <div className="transform scale-[0.85] md:scale-100 origin-left">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Using .env variable
                  onChange={handleCaptchaChange}
                  onExpired={handleCaptchaExpired}
                />
              </div>
            </div>
          </div>

          {/* 5. DYNAMIC BUTTON UX */}
          <button
            type="submit"
            disabled={!captchaToken}
            className={`w-full py-2.5 px-4 rounded-md font-medium transition-all duration-200 mt-2 border 
              ${
                !captchaToken
                  ? "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed"
                  : "bg-white hover:bg-[#7367f0] hover:text-white text-[#7367f0] border-[#7367f0]"
              }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
