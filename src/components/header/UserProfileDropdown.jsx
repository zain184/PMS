import React from "react";
import { User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserProfileDropdown = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  // --- THE LOGOUT "CHECK-OUT" LOGIC ---
  const handleLogout = () => {
    const sessionStartStr = localStorage.getItem("pms_session_start");

    if (sessionStartStr) {
      const now = new Date();
      const sessionStart = new Date(sessionStartStr);

      // 1. Calculate seconds worked in THIS current session
      const secondsInThisSession = Math.floor((now - sessionStart) / 1000);

      // 2. Get the previous total accumulated today
      const previousTotal = parseInt(
        localStorage.getItem("pms_total_seconds") || "0",
      );

      // 3. Save the NEW total (Previous + Current Session)
      localStorage.setItem(
        "pms_total_seconds",
        (previousTotal + secondsInThisSession).toString(),
      );
    }

    // 4. Remove the session marker so the timer stops ticking
    localStorage.removeItem("pms_session_start");

    // 5. Cleanup UI and Navigate
    onClose();
    navigate("/login");
  };

  const menuItems = [
    { label: "My Profile", icon: <User size={18} />, link: "#" },
    { label: "Settings", icon: <Settings size={18} />, link: "#" },
    {
      label: "Log Out",
      icon: <LogOut size={18} />,
      isExit: true,
    },
  ];

  return (
    <div className="absolute right-0 top-[calc(100%+10px)] w-57.5 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#dbdade]/50 py-2 z-100 animate-in fade-in zoom-in-95 duration-200">
      {/* 1. Header Section (Profile Summary) */}
      <div className="px-5 py-4 flex items-center gap-3">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/150?u=admin"
            className="w-10 h-10 rounded-full border border-[#dbdade] object-cover"
            alt="Profile"
          />
          <span className="absolute top-0 right-0 w-3 h-3 bg-[#28c76f] border-2 border-white rounded-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] font-bold text-[#5d596c] leading-tight">
            M Umer Pervez
          </span>
          <span className="text-[13px] text-[#b0adbb] font-medium">Admin</span>
        </div>
      </div>

      <div className="h-px bg-[#dbdade]/50 w-full" />

      {/* 2. Menu Items Section */}
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.isExit ? handleLogout : onClose}
            className={`w-full flex items-center gap-4 px-5 py-3 transition-colors group
              ${item.isExit ? "hover:bg-red-50" : "hover:bg-[#F8F7FA]"}
            `}
          >
            <span
              className={`transition-colors 
              ${
                item.isExit
                  ? "text-[#ea5455] group-hover:text-[#ea5455]"
                  : "text-[#6f6b7d] group-hover:text-[#7367f0]"
              }
            `}
            >
              {item.icon}
            </span>
            <span
              className={`text-[15px] font-medium transition-colors
              ${
                item.isExit
                  ? "text-[#ea5455] group-hover:text-[#ea5455]"
                  : "text-[#6f6b7d] group-hover:text-[#7367f0]"
              }
            `}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserProfileDropdown;
