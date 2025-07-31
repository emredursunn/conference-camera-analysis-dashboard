"use client";

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import type { FC } from "react";

// -------------------------------------------------------------
// VIPEmotionRadarChart.tsx
// Radar chart for selected (or multiple) VIP participant emotion profiles.
// -------------------------------------------------------------

export const vipEmotionProfiles = {
  "Rick Baker": {
    Neutral: 65,
    Fear: 15,
    Stress: 22,
    Happiness: 48,
    Sadness: 9,
    Anger: 4,
    Surprised: 16,
    Calmness: 70,
    Disgust: 2,
  },
  "Helena Gross": {
    Neutral: 58,
    Fear: 22,
    Stress: 30,
    Happiness: 35,
    Sadness: 12,
    Anger: 7,
    Surprised: 24,
    Calmness: 62,
    Disgust: 3,
  },
  "Phoebe Lucas": {
    Neutral: 72,
    Fear: 10,
    Stress: 12,
    Happiness: 60,
    Sadness: 5,
    Anger: 3,
    Surprised: 14,
    Calmness: 80,
    Disgust: 1,
  },
};

interface Props {
  data?: any;
  height?: number;
}

const COLOR_POOL = ["#3B82F6", "#EF4444", "#10B981"];

const VIPEmotionRadarChart: FC<Props> = ({ data = vipEmotionProfiles, height = 350 }) => {
  const names= Object.keys(data);
  const emotions= Object.keys(data[names[0]]);

  const [selected, setSelected] = useState<string[]>([names[0]]);

  const handleToggle = (name: string) => {
    setSelected((prev) => {
      const isSelected = prev.includes(name);
      if (isSelected) {
        if (prev.length === 1) return prev; // Keep at least one selected
        return prev.filter((n) => n !== name);
      }
      if (prev.length >= 3) return prev; // Limit selection to 3
      return [...prev, name];
    });
  };

  const indicators = emotions.map((emo) => ({ name: emo, max: 100 }));

  const seriesData = selected.map((name, idx) => ({
    value: emotions.map((emo:any) => data[name as keyof typeof data][emo as keyof typeof data[typeof name]]),
    name,
    itemStyle: { color: COLOR_POOL[idx % COLOR_POOL.length] },
    areaStyle: { opacity: 0.25 },
    lineStyle: { width: 2 },
    symbol: "circle",
    symbolSize: 6,
  }));

  const option: any = {
    backgroundColor: "transparent",
    title: {
      text: "VIP Emotion Profile",
      left: "center",
      top: 5,
      textStyle: { color: "#E5E7EB", fontSize: 16, fontWeight: "600" },
    },
    tooltip: {
      trigger: "item",
      className: "rounded-lg bg-gray-800/90 border-gray-700 text-gray-200",
      borderWidth: 1,
    },
    legend: {
      data: selected,
      top: 40,
      textStyle: { color: "#D1D5DB" },
      itemWidth: 12,
      itemHeight: 12,
      icon: "circle",
    },
    radar: {
      indicator: indicators,
      center: ["50%", "60%"],
      radius: "65%",
      axisName: { color: "#D1D5DB", fontSize: 11, padding: 4 },
      splitLine: { lineStyle: { color: "rgba(107, 114, 128, 0.3)" } },
      splitArea: {
        areaStyle: {
          color: ["rgba(55, 65, 81, 0.3)", "rgba(55, 65, 81, 0.5)"],
          shadowColor: "rgba(0, 0, 0, 0.2)",
          shadowBlur: 10,
        },
      },
      axisLine: { lineStyle: { color: "rgba(107, 114, 128, 0.5)" } },
    },
    series: [
      {
        name: "Emotion Profile",
        type: "radar",
        data: seriesData,
      },
    ],
    grid: {
      top: "20%",
      bottom: "10%",
    },
  };

  return (
    <div className="rounded-xl p-4 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <span className="text-gray-200 text-sm font-medium shrink-0">Select VIP(s) (Max 3):</span>
        <div className="flex flex-wrap gap-2">
          {names.map((name) => (
            <button
              key={name}
              onClick={() => handleToggle(name)}
              disabled={selected.length >= 3 && !selected.includes(name)}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ease-in-out border ${
                selected.includes(name)
                  ? "bg-blue-600 text-white font-semibold border-blue-500 shadow-md"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/70 border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-grow" style={{ minHeight: height }}>
        <ReactECharts option={option} style={{ width: "100%", height: "100%" }} opts={{ renderer: "canvas" }} />
      </div>
    </div>
  );
};

export default VIPEmotionRadarChart;
