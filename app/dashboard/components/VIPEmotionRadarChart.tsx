"use client";

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import type { FC } from "react";

export const vipEmotionProfiles = {
  "Jensen Huang (CEO)": {
    Happiness: 20,
    Surprised: 20,
    Calmness: 50,
    Neutral: 45,
    Stress: 35,
    Fear: 80,
    Sadness: 80,
    Anger: 12,
    Disgust: 80,
  },
  "Dr. Sarah Chen (CTO)": {
    Happiness: 100,
    Surprised: 100,
    Calmness: 55,
    Neutral: 38,
    Stress: 68,
    Fear: 25,
    Sadness: 15,
    Anger: 8,
    Disgust: 6,
  },
  "Marcus Rodriguez (VP)": {
    Happiness: 28,
    Surprised: 62,
    Calmness: 25,
    Neutral: 52,
    Stress: 75,
    Fear: 42,
    Sadness: 35,
    Anger: 45,
    Disgust: 18,
  },
  "Emma Thompson (Lead)": {
    Happiness: 10,
    Surprised: 10,
    Calmness: 10,
    Neutral: 25,
    Stress: 100,
    Fear: 15,
    Sadness: 75,
    Anger: 100,
    Disgust: 50,
  },
  "Alex Kim (Director)": {
    Happiness: 48,
    Surprised: 72,
    Calmness: 42,
    Neutral: 65,
    Stress: 58,
    Fear: 35,
    Sadness: 28,
    Anger: 32,
    Disgust: 12,
  },
};

interface Props {
  data?: any;
  height?: number;
}

const COLOR_POOL = ["#3B82F6", "#EF4444", "#10B981"];

const VIPEmotionRadarChart: FC<Props> = ({
  data = vipEmotionProfiles,
  height = 350,
}) => {
  const names = Object.keys(data);
  const emotions = Object.keys(data[names[0]]);

  const [selected, setSelected] = useState<string[]>([names[0]]);

  const handleToggle = (name: string) => {
    setSelected((prev) => {
      const isSelected = prev.includes(name);
      if (isSelected) {
        if (prev.length === 1) return prev;
        return prev.filter((n) => n !== name);
      }
      if (prev.length >= 3) return prev;
      return [...prev, name];
    });
  };

  const seriesData = selected.map((name, idx) => ({
    value: emotions.map(
      (emo: any) =>
        data[name as keyof typeof data][emo as keyof (typeof data)[typeof name]]
    ),
    name,
    itemStyle: { color: COLOR_POOL[idx % COLOR_POOL.length] },
    areaStyle: { opacity: 0.25 },
    lineStyle: { width: 2 },
    symbol: "circle",
    symbolSize: 6,
  }));

  // Başlık renkleri
  const positive = ["Happiness", "Surprised", "Calmness"];
  const neutral = ["Neutral"];
  const negative = ["Stress", "Fear", "Sadness", "Anger", "Disgust"];

  const colorMap: Record<string, string> = {};
  positive.forEach((emo) => (colorMap[emo] = "#22C55E")); // yeşil
  neutral.forEach((emo) => (colorMap[emo] = "#3B82F6")); // mavi
  negative.forEach((emo) => (colorMap[emo] = "#EF4444")); // kırmızı

  const option: any = {
    backgroundColor: "transparent",
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
      indicator: emotions.map((emo) => ({
        name: emo,
        max: 100,
        color: colorMap[emo] || "#4B5563", // Başlık rengini ayarla
      })),
      center: ["50%", "60%"],
      radius: "65%",
      axisName: {
        fontSize: 12,
        fontWeight: "bold",
      },
      splitLine: { lineStyle: { color: "rgba(107, 114, 128, 0.3)" } },
      splitArea: {
        areaStyle: {
          color: [
            "rgba(55, 65, 81, 0.3)",
            "rgba(55, 65, 81, 0.5)",
          ],
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
    <div className="rounded-x1 p-1 h-full flex flex-col">
      <div className="flex-grow" style={{ minHeight: height }}>
        <ReactECharts
          option={option}
          style={{ width: "100%", height: "100%" }}
          opts={{ renderer: "canvas" }}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <span className="text-gray-700 text-sm font-medium shrink-0">
          Select VIP(s) (Max 3):
        </span>
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
    </div>
  );
};

export default VIPEmotionRadarChart;
