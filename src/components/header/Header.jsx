//StatCard.jsx
import React, { useState, useRef, useEffect } from "react";
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
import Logo from "../../assets/maxobiz.svg";

const Header = ({ toggleMobileMenu }) => {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("Working");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsStatusOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
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
        {/* --- MOBILE ROW 1 / DESKTOP LEFT --- */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start md:gap-10">
          {/* Logo */}
          <img src={Logo} alt="Maxobiz" className="h-7" />

          <div className="flex items-center gap-4">
            <div className="hidden md:block h-7.5 w-px bg-[#dbdade]" />

            {/* Timer Display */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[11px] text-[#b0adbb] uppercase font-medium leading-none mb-1">
                Today Hours
              </span>
              <span className="text-[20px] md:text-[22px] font-bold text-[#5d596c] leading-none">
                00.00.00
              </span>
            </div>

            {/* Avatar (Far right on mobile row 1, far right on desktop) */}
            <div className="relative md:hidden">
              <img
                src="https://i.pravatar.cc/150?u=1"
                className="w-9.5 h-9.5 rounded-full border border-[#dbdade] object-cover"
                alt="User"
              />
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#28c76f] border-2 border-white rounded-full" />
            </div>
          </div>
        </div>

        {/* --- MOBILE ROW 2 / DESKTOP RIGHT --- */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-2 md:gap-4 mt-4 md:mt-0">
          {/* Notification Icons (Bell & Edit) */}
          <div className="flex gap-2">
            <button className="relative w-11 h-11 md:w-9.5 md:h-9.5 rounded-lg bg-[#ff4d491a] text-[#ff4d49] flex items-center justify-center">
              <Bell size={20} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#ff4d49] rounded-full border border-white" />
            </button>
            <button className="relative w-11 h-11 md:w-9.5 md:h-9.5 rounded-lg bg-[#28c76f1a] text-[#28c76f] flex items-center justify-center">
              <Edit3 size={20} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#28c76f] rounded-full border border-white" />
            </button>
          </div>

          {/* Status Dropdown */}
          <div className="relative flex-1 md:flex-none" ref={dropdownRef}>
            <button
              onClick={() => setIsStatusOpen(!isStatusOpen)}
              className={`w-full md:w-50 flex items-center justify-between px-4 py-2.5 md:py-2.5 rounded-md border border-[#dbdade] bg-white transition-all ${
                isStatusOpen ? "border-indigo-500 ring-2 ring-indigo-500/5" : ""
              }`}
            >
              <span className="text-[#6f6b7d] text-[15px] font-medium">
                {currentStatus === "Working" ? "Current Status" : currentStatus}
              </span>
              <ChevronDown
                size={18}
                className={`text-[#b0adbb] transition-transform duration-200 ${
                  isStatusOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isStatusOpen && (
              <div className="absolute top-[calc(100%+8px)] right-0 w-full bg-white border border-[#dbdade] rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-1 z-100 animate-in fade-in zoom-in-95 duration-200">
                {statusOptions.map((opt, index) => (
                  <button
                    key={opt.label}
                    onClick={() => {
                      setCurrentStatus(opt.label);
                      setIsStatusOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-3 text-[#6f6b7d] hover:bg-[#F8F7FA] hover:text-[#7367f0] transition-colors group
                      ${
                        index !== statusOptions.length - 1
                          ? "border-b border-[#dbdade]/40"
                          : ""
                      }
                    `}
                  >
                    <span className="text-[#b0adbb] group-hover:text-[#7367f0] transition-colors">
                      {opt.icon}
                    </span>
                    <span className="text-[15px] capitalize font-normal">
                      {opt.label}
                    </span>
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

          {/* Desktop Avatar (Hidden on mobile row 2) */}
          <div className="relative hidden md:block">
            <img
              src="https://i.pravatar.cc/150?u=1"
              className="w-9.5 h-9.5 rounded-full border border-[#dbdade] object-cover"
              alt="User"
            />
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#28c76f] border-2 border-white rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
