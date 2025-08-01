"use client";

import React, { useState, useEffect } from "react";
import AttendanceTrendChart from "./components/AttendanceTrendChart";
import AttentionAnalysisChart from "./components/AttentionAnalysisChart";
import OverallEmotionDonutChart from "./components/OverallEmotionDonutChart";
import VIPEmotionRadarChart from "./components/VIPEmotionRadarChart";
import EmotionOverTimeChart from "./components/EmotionOverTimeChart";
import ConferenceReactionsChart from "./components/ConferenceReactionsChart";

// --- ANA DASHBOARD BILEŞENİ ---
const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="bg-background text-foreground min-h-screen p-4 sm:p-8 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Conference Camera Analysis Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">Visualized Conference Metrics</p>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 1. Satır: Shouting Chart (tam genişlik) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <AttendanceTrendChart />
        </div>

        {/* 2. Satır: Participant Activity Timeline (tam genişlik) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <AttentionAnalysisChart />
        </div>

        {/* 3. Satır: Emotion Timeline Area Chart (tam genişlik) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <EmotionOverTimeChart />
        </div>

        {/* 4. Satır: Radar + Topic Bar */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <OverallEmotionDonutChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <VIPEmotionRadarChart />
        </div>

                {/* 5. Satır: Reactions Chart (tam genişlik) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <ConferenceReactionsChart />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-600">
        <p>&copy; {new Date().getFullYear()} Conference Camera Analysis. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default App;
