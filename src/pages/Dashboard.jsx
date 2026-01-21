import React, { useState } from "react";
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

  // --- NEW CODE ADDED: State to track which card is clicked ---
  const [activeView, setActiveView] = useState("");

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
          <MembersCard />

          {/* ADDED: isActive and onClick props to all cards below */}
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

          <div className="flex md:hidden items-center justify-start">
            <button className="w-13.5 h-13.5 bg-[#7367F0] text-white rounded-xl flex items-center justify-center shadow-lg">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* ADDED: activeView prop so the table can change its design */}
        <ProjectTable activeView={activeView} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
