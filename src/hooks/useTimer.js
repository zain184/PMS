import { useState, useEffect } from "react";

export const useTimer = () => {
  const [displaySeconds, setDisplaySeconds] = useState(0);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const todayStr = now.toDateString();

      // Get the time saved from PREVIOUS sessions today
      const totalSecondsToday = parseInt(
        localStorage.getItem("pms_total_seconds") || "0",
      );
      // Get when this current session started
      const sessionStartStr = localStorage.getItem("pms_session_start");
      const lastResetDate = localStorage.getItem("pms_last_reset_date");

      // Midnight Reset logic
      if (lastResetDate !== todayStr) {
        localStorage.setItem("pms_total_seconds", "0");
        localStorage.removeItem("pms_session_start");
        localStorage.setItem("pms_last_reset_date", todayStr);
        setDisplaySeconds(0);
        return;
      }

      if (sessionStartStr) {
        // TIMER IS ACTIVE: Show Saved Total + Current Live Seconds
        const sessionStart = new Date(sessionStartStr);
        const liveSessionSeconds = Math.floor((now - sessionStart) / 1000);
        setDisplaySeconds(totalSecondsToday + liveSessionSeconds);
      } else {
        // TIMER IS STOPPED: Just show the Saved Total
        setDisplaySeconds(totalSecondsToday);
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const hrs = Math.floor(displaySeconds / 3600);
    const mins = Math.floor((displaySeconds % 3600) / 60);
    const secs = displaySeconds % 60;
    return `${hrs.toString().padStart(2, "0")}.${mins.toString().padStart(2, "0")}.${secs.toString().padStart(2, "0")}`;
  };

  return formatTime();
};
