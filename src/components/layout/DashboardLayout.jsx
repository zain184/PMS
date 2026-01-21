import React from "react";
import Header from "../header/Header";

const DashboardLayout = ({ children, onMenuToggle }) => {
  return (
    <div className="min-h-screen bg-slate-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40">
        <div className="absolute top-[10%] left-[-5%] w-150 h-150 bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-200 h-200 bg-white rounded-full blur-[100px]" />
      </div>

      {/* Main Content Area  Body */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header toggleMobileMenu={onMenuToggle} />

        <main className="p-2">{children}</main>

        {/* Floating Chat Icon */}
        <button className="fixed bottom-6 right-8 w-12 h-12 bg-[#5D596C] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-700 transition-all">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardLayout;
