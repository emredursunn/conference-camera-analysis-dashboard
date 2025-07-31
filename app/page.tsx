"use client";

import React, { useState, useEffect } from "react";
import AttendanceTrendChart from "./components/AttendanceTrendChart";
import AttentionAnalysisChart from "./components/AttentionAnalysisChart";
import OverallEmotionDonutChart from "./components/OverallEmotionDonutChart";
import VIPEmotionRadarChart from "./components/VIPEmotionRadarChart";
import EmotionOverTimeChart from "./components/EmotionOverTimeChart";

// --- ANA DASHBOARD BILEŞENİ ---
const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="bg-[#0a0a0a] text-[#ededed] min-h-screen p-4 sm:p-8 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Conference Camera Analysis Dashboard</h1>
        <p className="text-lg text-gray-400 mt-2">Visualized Conference Metrics</p>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 1. Satır: Shouting Chart (tam genişlik) */}
        <div className="lg:col-span-2 bg-[#171717] p-6 rounded-xl shadow-lg border border-gray-700">
          <AttendanceTrendChart />
        </div>

        {/* 2. Satır: Participant Activity Timeline (tam genişlik) */}
        <div className="lg:col-span-2 bg-[#171717] p-6 rounded-xl shadow-lg border border-gray-700">
          <AttentionAnalysisChart />
        </div>

        {/* 3. Satır: Emotion Timeline Area Chart (tam genişlik) */}
        <div className="lg:col-span-2 bg-[#171717] p-6 rounded-xl shadow-lg border border-gray-700">
          <EmotionOverTimeChart />
        </div>

        {/* 4. Satır: Radar + Topic Bar */}
        <div className="bg-[#171717] p-6 rounded-xl shadow-lg border border-gray-700">
          <OverallEmotionDonutChart />
        </div>
        <div className="bg-[#171717] p-6 rounded-xl shadow-lg border border-gray-700">
          <VIPEmotionRadarChart />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Conference Camera Analysis. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default App;
