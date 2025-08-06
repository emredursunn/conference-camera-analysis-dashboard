"use client";

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import type { FC } from "react";

// -------------------------------------------------------------
// VIPEmotionRadarChart.tsx
// Radar chart for selected (or multiple) VIP participant emotion profiles.
// -------------------------------------------------------------

export const vipEmotionProfiles = {
  "Jensen Huang (CEO)": {
    Neutral: 45,
    Fear: 80,
    Stress: 35,
    Happiness: 20,
    Sadness: 80,
    Anger: 12,
    Surprised: 20,
    Calmness: 50,
    Disgust: 80,
  },
  "Dr. Sarah Chen (CTO)": {
    Neutral: 38,
    Fear: 25,
    Stress: 68,
    Happiness: 100,
    Sadness: 15,
    Anger: 8,
    Surprised: 100,
    Calmness: 55,
    Disgust: 6,
  },
  "Marcus Rodriguez (VP)": {
    Neutral: 52,
    Fear: 42,
    Stress: 75,
    Happiness: 28,
    Sadness: 35,
    Anger: 45,
    Surprised: 62,
    Calmness: 25,
    Disgust: 18,
  },
  "Emma Thompson (Lead)": {
    Neutral: 25,
    Fear: 15,
    Stress: 100,
    Happiness: 10,
    Sadness: 75,
    Anger: 100,
    Surprised: 10,
    Calmness: 10,
    Disgust: 50,
  },
  "Alex Kim (Director)": {
    Neutral: 65,
    Fear: 35,
    Stress: 58,
    Happiness: 48,
    Sadness: 28,
    Anger: 32,
    Surprised: 72,
    Calmness: 42,
    Disgust: 12,
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
    // title: {
    //   text: "VIP Emotion Profile",
    //   left: "center",
    //   top: 5,
    //   textStyle: { color: "#374151", fontSize: 16, fontWeight: "600" },
    // },
    tooltip: {
      trigger: "item",
      className: "rounded-lg bg-white border-gray-200 text-gray-700",
      borderWidth: 1,
    },
    legend: {
      data: selected,
      top: 40,
      textStyle: { color: "#4B5563" },
      itemWidth: 12,
      itemHeight: 12,
      icon: "circle",
    },
    radar: {
      indicator: indicators,
      center: ["50%", "60%"],
      radius: "65%",
      axisName: { color: "#4B5563", fontSize: 11, padding: 4 },
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
        <span className="text-gray-700 text-sm font-medium shrink-0">Select VIP(s) (Max 3):</span>
        <div className="flex flex-wrap gap-2">
          {names.map((name) => (
            <button
              key={name}
              onClick={() => handleToggle(name)}
              disabled={selected.length >= 3 && !selected.includes(name)}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ease-in-out border ${
                selected.includes(name)
                  ? "bg-blue-600 text-white font-semibold border-blue-500 shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
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