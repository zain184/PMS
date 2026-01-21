import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/maxobiz.svg";
import UserProfileDropdown from "./UserProfileDropdown";
import {
  Bell,
  Edit3,
  ChevronDown,
  Menu,
  Workflow,
  Ban,
  Moon,
  Utensils,
  User,
  Cigarette,
  Bath,
} from "lucide-react";

const Header = ({ toggleMobileMenu }) => {
  // States
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("Working");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Refs for closing on outside click
  const statusRef = useRef(null);
  const profileRefMobile = useRef(null);
  const profileRefDesktop = useRef(null);

  // Optimized single effect to handle all "Click Outside" logic
  useEffect(() => {
    const handleClickOutside = (e) => {
      // 1. Handle Status Dropdown
      if (statusRef.current && !statusRef.current.contains(e.target)) {
        setIsStatusOpen(false);
      }
      // 2. Handle Profile Dropdown (Check both mobile and desktop triggers)
      const clickedMobile = profileRefMobile.current?.contains(e.target);
      const clickedDesktop = profileRefDesktop.current?.contains(e.target);

      if (!clickedMobile && !clickedDesktop) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const statusOptions = [
    { label: "working", icon: <Workflow size={18} /> },
    { label: "not working", icon: <Ban size={18} /> },
    { label: "Prayer", icon: <Moon size={18} /> },
    { label: "Lunch", icon: <Utensils size={18} /> },
    { label: "Rest", icon: <User size={18} /> },
    { label: "Cigarette", icon: <Cigarette size={18} /> },
    { label: "Toilet", icon: <Bath size={18} /> },
  ];

  return (
    <header className="w-full bg-white border-b border-[#dbdade] sticky top-0 z-60 px-4 md:px-6">
      <div className="max-w-400 mx-auto flex flex-col md:flex-row md:h-18.5 py-3 md:py-0 justify-between items-center">
        {/* --- LEFT SIDE (PC) / ROW 1 (MOBILE) --- */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start md:gap-10">
          <img src={Logo} alt="Maxobiz" className="h-7" />

          <div className="flex items-center gap-4">
            <div className="hidden md:block h-7.5 w-px bg-[#dbdade]" />

            {/* Timer */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[11px] text-[#b0adbb] uppercase font-medium leading-none mb-1">
                Today Hours
              </span>
              <span className="text-[20px] md:text-[22px] font-bold text-[#5d596c] leading-none">
                00.00.00
              </span>
            </div>

            {/* PC ACTION ICONS (Next to timer) */}
            <div className="hidden md:flex gap-2">
              <button className="relative w-9.5 h-9.5 rounded-lg bg-[#ff4d491a] text-[#ff4d49] flex items-center justify-center">
                <Bell size={20} />
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#ff4d49] rounded-full border border-white" />
              </button>
              <button className="relative w-9.5 h-9.5 rounded-lg bg-[#28c76f1a] text-[#28c76f] flex items-center justify-center">
                <Edit3 size={20} />
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#28c76f] rounded-full border border-white" />
              </button>
            </div>

            {/* MOBILE PROFILE (Visible ONLY on Mobile/Tablet Row 1) */}
            <div className="relative md:hidden" ref={profileRefMobile}>
              <div
                className="cursor-pointer active:scale-95 transition-transform"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <img
                  src="https://i.pravatar.cc/150?u=1"
                  className="w-9.5 h-9.5 rounded-full border border-[#dbdade] object-cover"
                  alt="User"
                />
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#28c76f] border-2 border-white rounded-full" />
              </div>
              <UserProfileDropdown
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
              />
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE (PC) / ROW 2 (MOBILE) --- */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-2 md:gap-4 mt-4 md:mt-0">
          {/* MOBILE ACTION ICONS (Row 2) */}
          <div className="flex md:hidden gap-2">
            <button className="relative w-11 h-11 rounded-lg bg-[#ff4d491a] text-[#ff4d49] flex items-center justify-center">
              <Bell size={20} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#ff4d49] rounded-full border border-white" />
            </button>
            <button className="relative w-11 h-11 rounded-lg bg-[#28c76f1a] text-[#28c76f] flex items-center justify-center">
              <Edit3 size={20} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#28c76f] rounded-full border border-white" />
            </button>
          </div>

          {/* Status Dropdown */}
          <div className="relative flex-1 md:flex-none" ref={statusRef}>
            <button
              onClick={() => setIsStatusOpen(!isStatusOpen)}
              className={`w-full md:w-50 flex items-center justify-between px-5 py-2.5 rounded-md border border-[#dbdade] bg-white transition-all ${isStatusOpen ? "border-indigo-500 ring-4 ring-indigo-500/5" : ""}`}
            >
              <span className="text-[#6f6b7d] text-[15px] font-medium">
                {currentStatus === "Working" ? "Current Status" : currentStatus}
              </span>
              <ChevronDown
                size={18}
                className={`text-[#b0adbb] transition-transform ${isStatusOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isStatusOpen && (
              <div className="absolute top-[calc(100%+8px)] right-0 w-full bg-white border border-[#dbdade] rounded-lg shadow-xl py-1 z-100 animate-in fade-in zoom-in-95 duration-200">
                {statusOptions.map((opt, index) => (
                  <button
                    key={opt.label}
                    onClick={() => {
                      setCurrentStatus(opt.label);
                      setIsStatusOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-3 text-[#6f6b7d] hover:bg-[#F8F7FA] hover:text-[#7367f0] transition-colors group ${index !== statusOptions.length - 1 ? "border-b border-[#dbdade]/40" : ""}`}
                  >
                    <span className="text-[#b0adbb] group-hover:text-[#7367f0]">
                      {opt.icon}
                    </span>
                    <span className="text-[15px] capitalize">{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Green Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-11 h-11 bg-[#82D633] text-white rounded-lg flex items-center justify-center shadow-md active:scale-95 transition-transform"
          >
            <Menu size={24} />
          </button>

          {/* DESKTOP PROFILE (Visible ONLY on PC) */}
          <div className="relative hidden md:block" ref={profileRefDesktop}>
            <div
              className="cursor-pointer active:scale-95 transition-transform"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <img
                src="https://i.pravatar.cc/150?u=1"
                className="w-9.5 h-9.5 rounded-full border border-[#dbdade] object-cover"
                alt="User"
              />
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#28c76f] border-2 border-white rounded-full" />
            </div>
            <UserProfileDropdown
              isOpen={isProfileOpen}
              onClose={() => setIsProfileOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
