import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Eye,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Plus,
  Edit2,
  Trash2,
} from "lucide-react";

const ProjectTable = ({ activeView }) => {
  const [activeDept, setActiveDept] = useState("All Departments");
  const [activeFlagTab, setActiveFlagTab] = useState("Projects");

  const departments = [
    "All Departments",
    "Designers",
    "Developers",
    "SEO",
    "Content Writers",
  ];
  const flagTabs = ["Projects", "Resource", "CSR", "Attendance"];

  // Helper for Status Badge Colors in Split View
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "COMPLETED":
        return "bg-[#28c76f1a] text-[#28c76f]";
      case "IN COMPLETE":
        return "bg-[#ff9f431a] text-[#ff9f43]";
      case "HIGH PRIORITY":
        return "bg-[#00cfe81a] text-[#00cfe8]";
      case "RED FLAGS":
        return "bg-[#ea54551a] text-[#ea5455]";
      default:
        return "bg-slate-100 text-slate-500";
    }
  };

  const tableConfigs = {
    completed: {
      headers: [
        "RESOURCE",
        "PROJECT NAME",
        "CLIENT NAME",
        "URL",
        "SOURCE",
        "END DATE",
        "REMARKS",
      ],
    },
    incomplete: {
      headers: [
        "PROJECT ID",
        "RESOURCE",
        "TASK NAME",
        "URL",
        "TASK TYPE",
        "STAGE",
        "STATUS",
        "ACTION",
      ],
    },
    priority: {
      headers: [
        "PROJECT ID",
        "PROJECT NAME",
        "CLIENT",
        "URL",
        "SOURCE",
        "START",
        "END",
        "STATUS",
      ],
    },
    flags: {
      headers: [
        "RESOURCE",
        "PROJECT NAME",
        "CLIENT NAME",
        "URL",
        "SOURCE",
        "END DATE",
        "REMARKS",
      ],
    },
    knowledge: {
      headers: [
        "DOCUMENT NAME",
        "DEPARTMENT",
        "TAGS",
        "UPLOADED BY",
        "ACTIONS",
      ],
    },
    split: {
      headers: [
        "PROJECT ID",
        "TASK ID",
        "TASK NAME",
        "TASK TYPE",
        "TASK PRIORITY",
        "URL",
        "SOURCE",
        "CLIENT NAME",
        "TASK STAGE",
        "RESOURCE",
        "R.T.C",
      ],
    },
  };

  // Determine current config based on activeView
  const isSplitView = !activeView || activeView === "split";
  const current = isSplitView
    ? tableConfigs.split
    : tableConfigs[activeView] || tableConfigs.completed;

  // 5 Rows of Data for Split View
  const splitViewData = [
    {
      id: "MaxobizDC.3",
      taskId: "27838",
      name: "Goldwood Industries Ltd.",
      type: "C530 3 in 1 Cable Packaging",
      priority: "COMPLETED",
      source: "Maxobiz Upwork",
      client: "Brian Uppal",
      stage: "Initial",
      resource: "Ahsan",
    },
    {
      id: "MaxobizDC.3",
      taskId: "27838",
      name: "Goldwood Industries Ltd.",
      type: "C530 3 in 1 Cable Packaging",
      priority: "IN COMPLETE",
      source: "Maxobiz Upwork",
      client: "Brian Uppal",
      stage: "Initial",
      resource: "Ahsan",
    },
    {
      id: "MaxobizDC.3",
      taskId: "27838",
      name: "Goldwood Industries Ltd.",
      type: "C530 3 in 1 Cable Packaging",
      priority: "HIGH PRIORITY",
      source: "Maxobiz Upwork",
      client: "Brian Uppal",
      stage: "Initial",
      resource: "Ahsan",
    },
    {
      id: "MaxobizDC.3",
      taskId: "27838",
      name: "Goldwood Industries Ltd.",
      type: "C530 3 in 1 Cable Packaging",
      priority: "COMPLETED",
      source: "Maxobiz Upwork",
      client: "Brian Uppal",
      stage: "Initial",
      resource: "Ahsan",
    },
    {
      id: "MaxobizDC.3",
      taskId: "27838",
      name: "Goldwood Industries Ltd.",
      type: "C530 3 in 1 Cable Packaging",
      priority: "RED FLAGS",
      source: "Maxobiz Upwork",
      client: "Brian Uppal",
      stage: "Initial",
      resource: "Ahsan",
    },
  ];

  const dataRow = {
    name: "Ahsan Munir",
    avatar: "https://i.pravatar.cc/150?u=a1",
    project: "MCR Airport Transfers",
    client: "Yousef Nashy",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 mt-2 overflow-hidden">
      {/* --- HEADER SECTION --- */}
      <div className="transition-all duration-300">
        {activeView === "knowledge" ? (
          <div className="p-4 md:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-2">
            <h2 className="text-[18px] md:text-[24px] font-bold text-[#5d596c]">
              Knowledge Base
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 border border-[#5d596c] text-[#5d596c] rounded-md font-bold hover:bg-slate-50">
                <Plus size={18} /> Add Document
              </button>
              <div className="relative w-full sm:w-75">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b0adbb]"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F8F7FA] border border-[#dbdade] rounded-md outline-none"
                />
              </div>
            </div>
          </div>
        ) : activeView === "flags" ? (
          <div className="px-4 md:px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4 border-b border-slate-50">
            <div className="flex items-center gap-2 bg-[#f8f7fa] p-1 rounded-lg w-full lg:w-auto overflow-x-auto scrollbar-hide">
              {flagTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFlagTab(tab)}
                  className={`px-8 py-2 rounded-md text-[14px] font-semibold transition-all whitespace-nowrap ${activeFlagTab === tab ? "bg-white text-[#5d596c] shadow-sm" : "text-[#a5a3ae]"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-[320px]">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b0adbb]"
                size={18}
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8F7FA] border border-[#dbdade] rounded-md outline-none"
              />
            </div>
          </div>
        ) : activeView === "completed" ||
          activeView === "incomplete" ||
          activeView === "priority" ? (
          <div>
            <div className="flex items-center bg-[#F1F3F6] overflow-x-auto scrollbar-hide">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-8 py-4 text-[15px] font-medium transition-all whitespace-nowrap ${activeDept === dept ? "bg-white text-[#5d596c] shadow-sm border-b-2 border-[#7367f0]" : "text-[#6f6b7d]"}`}
                >
                  {dept}
                </button>
              ))}
            </div>
            <div className="p-4 md:p-6 flex justify-end">
              <div className="relative w-full md:w-[320px]">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b0adbb]"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F8F7FA] border border-[#dbdade] rounded-md outline-none"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <h2 className="text-[24px] font-bold text-[#5d596c]">
                  Split View
                </h2>
                <ChevronDown size={18} className="text-orange-500" />
              </div>
              <button className="text-[14px] font-medium text-[#6f6b7d] border-b-2 border-slate-400">
                Total View
              </button>
            </div>
            <div className="relative w-full md:w-75">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b0adbb]"
                size={18}
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8F7FA] border border-[#dbdade] rounded-md outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* --- DATA TABLE --- */}
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-300">
          <thead>
            <tr className="border-b border-[#dbdade] bg-[#f8f7fa]">
              {current.headers.map((h) => (
                <th
                  key={h}
                  className="px-6 py-4 text-[12px] font-bold text-[#b0adbb] uppercase tracking-wider whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* 1. Logic for Split View Data (Default) */}
            {isSplitView &&
              splitViewData.map((row, i) => (
                <tr key={i} className="hover:bg-[#f8f7fa] transition-colors">
                  <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                    {row.id}
                  </td>
                  <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                    {row.taskId}
                  </td>
                  <td className="px-6 py-5 text-[14px] text-[#6f6b7d] font-semibold">
                    {row.name}
                  </td>
                  <td className="px-6 py-5 text-[14px] text-[#b0adbb]">
                    {row.type}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`px-2 py-1 rounded text-[10px] font-bold uppercase whitespace-nowrap ${getPriorityStyle(row.priority)}`}
                    >
                      {row.priority}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Eye
                      size={20}
                      className="text-[#b0adbb] cursor-pointer hover:text-[#7367f0]"
                    />
                  </td>
                  <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                    {row.source}
                  </td>
                  <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                    {row.client}
                  </td>
                  <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                    {row.stage}
                  </td>
                  <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                    {row.resource}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-[#dbdade] text-[#7367f0]"
                    />
                  </td>
                </tr>
              ))}

            {/* 2. Logic for Other Views (Knowledge, Flags, etc.) */}
            {!isSplitView &&
              [1, 2, 3].map((_, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#f8f7fa] transition-colors"
                >
                  {(activeView === "completed" || activeView === "flags") && (
                    <>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <img
                            src={dataRow.avatar}
                            className="w-10 h-10 rounded-full border"
                          />
                          <span className="text-[14px] text-[#6f6b7d] font-medium">
                            {dataRow.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-[14px] text-[#6f6b7d] font-semibold">
                        {dataRow.project}
                      </td>
                      <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                        {dataRow.client}
                      </td>
                      <td className="px-6 py-5">
                        <Eye size={22} className="text-[#b0adbb]" />
                      </td>
                      <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                        Upwork
                      </td>
                      <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                        2023-10-04
                      </td>
                      <td className="px-6 py-5 text-[14px] text-[#6f6b7d]">
                        Completed
                      </td>
                    </>
                  )}
                  {/* ... other activeViews continue with similar logic ... */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* --- FOOTER --- */}
      <div className="p-4 md:p-6 border-t border-slate-100 flex items-center justify-between">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-[14px] text-[#6f6b7d]">
          <ChevronLeft size={16} /> Previous
        </button>
        <div className="flex gap-1">
          {[1, 2, 3, "...", 10].map((p) => (
            <button
              key={p}
              className={`w-9 h-9 rounded-md text-[14px] ${p === 1 ? "bg-[#7367f0] text-white shadow-lg" : "text-[#6f6b7d]"}`}
            >
              {p}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-[14px] text-[#6f6b7d]">
          Next <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectTable;
