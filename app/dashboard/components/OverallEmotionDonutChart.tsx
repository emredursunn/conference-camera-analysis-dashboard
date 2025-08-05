"use client";

import ReactECharts from "echarts-for-react";
import type { FC } from "react";

// -------------------------------------------------------------
//  OverallEmotionDonutChart.tsx
//  Donut chart: Overall Emotion Distribution in Meeting
// -------------------------------------------------------------

export const defaultOverallEmotionDistribution = [
  { emotion: "Neutral", value: 28 },
  { emotion: "Fear", value: 8 },
  { emotion: "Stress", value: 15 },
  { emotion: "Happiness", value: 12 },
  { emotion: "Sadness", value: 10 },
  { emotion: "Anger", value: 7 },
  { emotion: "Surprised", value: 9 },
  { emotion: "Calmness", value: 9 },
  { emotion: "Disgust", value: 2 },
];

interface Props {
  data?: { emotion: string; value: number }[];
  height?: number;
}

const OverallEmotionDonutChart: FC<Props> = ({ data = defaultOverallEmotionDistribution, height = 500 }) => {
  // Color palette
  const COLORS: Record<string, string> = {
    Neutral: "#9CA3AF", // gray
    Fear: "#1E3A8A", // navy blue
    Stress: "#EF4444", // red-500
    Happiness: "#FACC15", // yellow-400
    Sadness: "#3B82F6", // blue-500
    Anger: "#991B1B", // dark red
    Surprised: "#06B6D4", // cyan-500
    Calmness: "#10B981", // green-500
    Disgust: "#8B5CF6", // purple-500
  };

  const chartData = data.map((d) => ({
    name: d.emotion,
    value: d.value,
    itemStyle: { color: COLORS[d.emotion] || "#ffffff" },
  }));

  const option: any = {
    backgroundColor: "transparent",
    title: {
      text: "Overall Emotion Distribution in Meeting",
      left: "center",
      top: 10,
      textStyle: { color: "#374151", fontSize: 16 },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%",
    },
    legend: {
      top: 42,
      left: "center",
      itemWidth: 14,
      itemHeight: 14,
      textStyle: { color: "#4B5563", fontSize: 12 },
      data: data.map((d) => d.emotion),
      selectedMode: false, // Disable category selection
    },
    series: [
      {
        name: "Emotion Share",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
            formatter: "{b}\n{d}%",
            color: "#374151",
            lineHeight: 28,
          },
        },
        labelLine: {
          show: false,
        },
        data: chartData,
      },
    ],
  };

  return <ReactECharts option={option} style={{ width: "100%", height }} opts={{ renderer: "canvas" }} />;
};

export default OverallEmotionDonutChart;