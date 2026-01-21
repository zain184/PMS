//MembersCard.jsx
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, MoreHorizontal } from "lucide-react";

const MembersCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Toggle Logic with specific coordinates
  const handleToggle = (e) => {
    e.stopPropagation();
    if (!isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + window.scrollX,
      });
    }
    setIsOpen(!isOpen);
  };

  // Click outside to close
  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("mousedown", close);
      window.addEventListener("scroll", () => setIsOpen(false));
    }
    return () => {
      document.removeEventListener("mousedown", close);
      window.removeEventListener("scroll", () => setIsOpen(false));
    };
  }, [isOpen]);

  return (
    <div className="relative w-full md:w-87 h-36.5 shrink-0 md:ml-7">
      {/* 1. Purple Notch Button (PC ONLY) */}
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="hidden md:flex absolute left-0 bottom-0 w-13.5 h-13.5 bg-[#7367F0] text-white rounded-xl items-center justify-center shadow-lg z-30 active:scale-95 transition-all"
      >
        <Menu size={24} />
      </button>

      {/* 2. Main Card Content */}
      <div className="bg-white rounded-xl pt-2.5 pb-2.5 px-1 md:pl-16 md:pr-5.75 shadow-sm border border-slate-100 w-full h-full flex flex-col justify-between relative z-10">
        <div className="flex justify-between items-start">
          <span className="text-[15px] md:text-[18px] font-semibold text-[#A5A3AE]">
            Members
          </span>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-[26px] font-bold text-[#5D596C]">15</div>
              <div className="text-[12px] font-medium text-[#28C76F]">
                Active
              </div>
            </div>
            <div className="w-px h-8 bg-slate-100 self-center" />
            <div className="text-center">
              <div className="text-[26px] font-bold text-[#5D596C]">3</div>
              <div className="text-[12px] font-medium text-[#FF4D49]">Off</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?u=${i + 60}`}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                alt="avatar"
              />
            ))}
          </div>
          <button className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-[#FF4D49] hover:bg-slate-50">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 bg-current rounded-full" />
              <div className="w-1 h-1 bg-current rounded-full" />
              <div className="w-1 h-1 bg-current rounded-full" />
              <div className="w-1 h-1 bg-current rounded-full" />
            </div>
          </button>
        </div>
      </div>

      {/* 3. Dropdown Menu via Portal */}
      {isOpen &&
        createPortal(
          <div
            ref={menuRef}
            style={{ top: coords.top, left: coords.left }}
            className="fixed w-77 bg-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-7 z-9999 animate-in fade-in slide-in-from-top-4"
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
    </div>
  );
};

export default MembersCard;
