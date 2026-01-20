//QuickNav.jsx
import React from "react";
import {
  LayoutGrid,
  PlusSquare,
  FileEdit,
  Settings,
  Users,
  UserCog,
  Layers,
  FileText,
} from "lucide-react";

// Exported for use in Mobile Menu
export const navItems = [
  { id: 1, label: "All Projects", icon: <LayoutGrid size={18} /> },
  { id: 2, label: "New Project", icon: <PlusSquare size={18} /> },
  { id: 3, label: "In Working Projects", icon: <FileEdit size={18} /> },
  { id: 4, label: "Department Management", icon: <Settings size={18} /> },
  { id: 5, label: "Team Management", icon: <Users size={18} /> },
  { id: 6, label: "Client Management", icon: <UserCog size={18} /> },
  { id: 7, label: "Source", icon: <Layers size={18} /> },
  { id: 8, label: "Reports", icon: <FileText size={18} /> },
];

const QuickNav = () => {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-hide ">
      <div className="flex items-center justify-center gap-3.5 min-w-max">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="flex items-center gap-3 px-5 py-3.5 rounded-[10px] bg-white border border-transparent hover:border-slate-200 shadow-sm transition-all"
          >
            <span className="text-[#FF4D49]">{item.icon}</span>
            <span className="text-[14px] font-medium text-[#6F6B7D] whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickNav;
