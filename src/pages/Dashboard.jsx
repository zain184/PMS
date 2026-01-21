import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import QuickNav, { navItems } from "../components/navigation/QuickNav";
import StatCard from "../components/stats/StatCard";
import MembersCard from "../components/stats/MembersCard";
import MobileMenu from "../components/navigation/MobileMenu";
import ProjectTable from "../components/table/ProjectTable";

import {
  ClipboardCheck,
  FileX,
  AlertCircle,
  Flag,
  BookOpen,
  Menu,
} from "lucide-react";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState("");

  // --- PURPLE BUTTON LOGIC ---
  const [isPurpleOpen, setIsPurpleOpen] = useState(false);
  const [purpleCoords, setPurpleCoords] = useState({ top: 0, left: 0 });
  const purpleMenuRef = useRef(null);

  // Function to calculate position and toggle
  const handlePurpleClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    // FIX: We use viewport coordinates only (no window.scrollY)
    // This prevents the "middle of screen" and "disappearing" bugs.
    setPurpleCoords({
      top: rect.bottom + 10,
      left: rect.left,
    });
    setIsPurpleOpen(!isPurpleOpen);
  };

  // Close when clicking outside or scrolling
  useEffect(() => {
    const closeMenu = () => setIsPurpleOpen(false);
    if (isPurpleOpen) {
      window.addEventListener("mousedown", closeMenu);
      window.addEventListener("scroll", closeMenu);
    }
    return () => {
      window.removeEventListener("mousedown", closeMenu);
      window.removeEventListener("scroll", closeMenu);
    };
  }, [isPurpleOpen]);

  return (
    <DashboardLayout onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={navItems}
      />

      <div className="flex flex-col gap-2">
        <div className="hidden md:block">
          <QuickNav />
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-row md:flex-nowrap md:justify-start gap-2 md:gap-8 overflow-x-auto scrollbar-hide">
          {/* We pass the click handler to MembersCard for the PC button */}
          <MembersCard onPurpleClick={handlePurpleClick} />

          <StatCard
            title="Completed Task"
            count="15"
            borderColor="#28C76F"
            iconColor="#28C76F"
            icon={<ClipboardCheck size={26} />}
            isActive={activeView === "completed"}
            onClick={() => setActiveView("completed")}
          />
          <StatCard
            title="InComplete Tasks"
            count="15"
            borderColor="#FF9F43"
            iconColor="#FF9F43"
            icon={<FileX size={26} />}
            isActive={activeView === "incomplete"}
            onClick={() => setActiveView("incomplete")}
          />
          <StatCard
            title="High Priority"
            count="15"
            borderColor="#00CFE8"
            iconColor="#00CFE8"
            icon={<AlertCircle size={26} />}
            isActive={activeView === "priority"}
            onClick={() => setActiveView("priority")}
          />
          <StatCard
            title="Red Flags"
            count="15"
            borderColor="#EA5455"
            iconColor="#EA5455"
            icon={<Flag size={26} />}
            isActive={activeView === "flags"}
            onClick={() => setActiveView("flags")}
          />
          <StatCard
            title="Knowledge Base"
            isKB={true}
            borderColor="#A8AAAE"
            iconColor="#A8AAAE"
            icon={<BookOpen size={26} />}
            isActive={activeView === "knowledge"}
            onClick={() => setActiveView("knowledge")}
          />

          {/* MOBILE PURPLE BUTTON */}
          <div className="flex md:hidden items-center justify-start">
            <button
              onClick={handlePurpleClick}
              className="w-13.5 h-13.5 bg-[#7367F0] text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        <ProjectTable activeView={activeView} />
      </div>

      {/* --- SHARED PURPLE DROPDOWN PORTAL --- */}
      {isPurpleOpen &&
        createPortal(
          <div
            ref={purpleMenuRef}
            style={{
              top: purpleCoords.top,
              left: purpleCoords.left,
              position: "fixed", // Ensures it stays relative to the screen window
            }}
            className="w-77 bg-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-7 z-[9999] animate-in fade-in slide-in-from-top-4"
          >
            <div className="text-center mb-6">
              <h2 className="text-[22px] font-bold text-[#202224] mb-1">
                M Umer Pervez
              </h2>
              <div className="w-24 h-0.5 bg-[#28C76F] mx-auto opacity-70" />
            </div>
            <div className="flex flex-col space-y-2">
              {[
                "Resource Monitor",
                "Unassigned Tasks",
                "Delayed Tasks",
                "Projects without any Tasks",
                "Escrow Status (Not Funded)",
                "Pending Payments",
                "Delayed Feedback",
                "Awaiting Rating",
              ].map((item, i) => (
                <button
                  key={item}
                  className={`w-full py-3 text-center text-[#6F6B7D] ${
                    i === 0
                      ? "border border-[#dbdade] rounded-xl font-bold shadow-sm"
                      : "font-medium hover:text-[#7367F0]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </DashboardLayout>
  );
};

export default Dashboard;
