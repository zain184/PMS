import React from "react";

const StatCard = ({
  title,
  count,
  icon,
  borderColor,
  iconColor,
  isKB,
  isActive,
  onClick,
}) => (
  <div
    onClick={onClick}
    style={{
      borderColor: borderColor,
      "--hover-bg": borderColor,
    }}
    // Logic: If isActive is true, we force the colored background and white text
    className={`w-full md:w-47.25 h-36 rounded-xl border-2 pt-3.25 pb-3.25 px-5.25 flex flex-col justify-between shadow-sm shrink-0 transition-all duration-300 group cursor-pointer 
      ${isActive ? "bg-(--hover-bg)" : "bg-white hover:bg-(--hover-bg)"}
    `}
  >
    <div className="flex flex-col gap-2">
      <div
        className={`transition-colors duration-300 group-hover:text-white! ${isActive ? "text-white!" : ""}`}
        style={{ color: isActive ? "white" : iconColor }}
      >
        {icon}
      </div>

      <h3
        className={`font-medium transition-colors duration-300 group-hover:text-white ${isActive ? "text-white" : "text-[#6F6B7D]"} ${
          isKB ? "text-[18px] leading-tight" : "text-[14px]"
        }`}
      >
        {title}
      </h3>
    </div>

    {!isKB && (
      <span
        className={`text-[40px] font-semibold transition-colors duration-300 group-hover:text-white ${isActive ? "text-white" : "text-[#5D596C]"} leading-none`}
      >
        {count}
      </span>
    )}
  </div>
);

export default StatCard;
