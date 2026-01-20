// src/components/navigation/MobileMenu.jsx
import React from "react";

const MobileMenu = ({ isOpen, onClose, items }) => {
  return (
    <>
      {/* 1. BACKDROP (Dimmable background) */}
      <div
        className={`fixed inset-0  backdrop-blur-[30px] z-80 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* 2. SLIDING PANEL */}
      <div
        className={`fixed top-20 left-0 w-full bg-slate-200 z-90 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-2.75   ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Individual Cards */}
        <div className="flex flex-col gap-2 items-center h-screen">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={onClose} // Close menu when a link is clicked
              className="w-[80%] bg-white p-4 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] border border-transparent active:border-slate-200 flex items-center gap-3 transition-all group"
            >
              <span className="text-[#FF4D49] group-active:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="text-[14px] font-normal text-[#6F6B7D]">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
