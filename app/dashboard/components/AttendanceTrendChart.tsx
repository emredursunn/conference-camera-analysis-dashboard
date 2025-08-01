"use client";

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import type { FC } from "react";

// -------------------------------------------------------------
// AttendanceTrendChart.tsx
// Line chart with section dividers, left-count labels & peak photos.
// -------------------------------------------------------------

export const attendanceTimeline = {
  series: [
    { minute: 0, participants: 12 },
    { minute: 5, participants: 14 },
    { minute: 10, participants: 13, left: 1 },
    { minute: 15, participants: 12 },
    { minute: 20, participants: 11, left: 2, image: "/images/peak-sec.png" },
    { minute: 25, participants: 11 },
    { minute: 30, participants: 10 },
    { minute: 35, participants: 10 },
    { minute: 40, participants: 9, left: 1 },
    { minute: 45, participants: 8, left: 2, image: "/images/peak-sec2.png" },
    { minute: 50, participants: 7 },
    { minute: 55, participants: 7 },
    { minute: 60, participants: 7 },
  ],
  sections: [
    {
      section: "Bölüm 1",
      start: 0,
      end: 15,
      topic: "Dönüşüm: Tekil Çipten Yapay Zeka Altyapısı",
    },
    {
      section: "Bölüm 2",
      start: 15,
      end: 35,
      topic: "Kurumsal Yapay Zeka Platformu ve Trilyon Dolarlık Pazar",
    },
    {
      section: "Bölüm 3",
      start: 35,
      end: 60,
      topic: "Yeni Yapay Zeka Veri Platformu ve Akıllı Muhakeme Motoru",
    },
  ],
};

interface Props {
  data?: typeof attendanceTimeline;
  height?: number;
}

const AttendanceTrendChart: FC<Props> = ({ data = attendanceTimeline, height = 400 }) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const xVals = data.series.map((p) => p.minute);
  const yVals = data.series.map((p) => p.participants);
  const maxY = Math.max(...yVals) + 2;

  // Section markAreas with correct ECharts format
  const markAreas = data.sections.map((s, index) => [
    {
      name: s.section,
      xAxis: s.start,
      yAxis: 0,
      itemStyle: {
        color: index % 2 === 0 ? "rgba(203, 213, 225, 0.15)" : "rgba(203, 213, 225, 0.25)",
      },
    },
    {
      xAxis: s.end,
      yAxis: maxY,
      label: {
        show: true,
        position: "top",
        color: "#4B5563",
        padding: 10,
        fontSize: 12,
        alignText: "center",
        formatter: `${s.topic}`,
      },
    },
  ]);

  // Mark points for exits and images
  const markPoints = data.series.flatMap((p) => {
    const points: any[] = [];
    if (p.left) {
      points.push({
        name: "Exits",
        coord: [p.minute, p.participants],
        value: `-${p.left}`,
        symbol: "circle",
        symbolSize: 22,
        itemStyle: { color: "rgba(239, 68, 68, 0.8)" },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 10,
          fontWeight: "bold",
        },
        tooltip: {
          formatter: `${p.left} participant(s) left at ${p.minute} min`,
        },
      });
    }
    if (p.image) {
      points.push({
        name: "Peak Moment",
        coord: [p.minute, p.participants],
        symbol: `image://${p.image}`,
        symbolSize: 30,
        symbolOffset: [0, -20],
        itemStyle: { borderColor: "#34D399", borderWidth: 2 },
        tooltip: { formatter: "Peak moment<br/>Click to view image" },
        isImage: true,
        imageUrl: p.image,
      });
    }
    return points;
  });

  const option: any = {
    backgroundColor: "transparent",
    title: {
      text: "Attendance Trend & Conference Sections",
      left: "center",
      top: 5,
      textStyle: { color: "#374151", fontSize: 16, fontWeight: "600" },
    },
    tooltip: {
      trigger: "axis",
      formatter: (p: any[]) => {
        if (!p || !p.length) return "";
        const pt = data.series[p[0].dataIndex];
        if (!pt) return "";
        const left = pt.left ? `<br/>Left: <b>${pt.left}</b>` : "";
        return `Minute ${pt.minute}<br/>Participants: <b>${pt.participants}</b>${left}`;
      },
    },
    grid: { left: "5%", right: "5%", top: "22%", bottom: "15%" },
    xAxis: {
      type: "value",
      min: 0,
      max: data.series[data.series.length - 1].minute,
      name: "Time (minutes)",
      nameLocation: "middle",
      nameGap: 30,
      axisLabel: { color: "#4B5563" },
      axisLine: { lineStyle: { color: "#9CA3AF" } },
      interval: 20,
    },
    yAxis: {
      type: "value",
      min: 0,
      max: maxY,
      name: "Participants",
      nameLocation: "middle",
      nameGap: 35,
      axisLabel: { color: "#4B5563" },
      splitLine: { lineStyle: { color: "#E5E7EB" } },
    },
    series: [
      {
        name: "Participants",
        type: "line",
        data: yVals.map((y, i) => [xVals[i], y]),
        smooth: 0.4,
        symbol: "circle",
        symbolSize: 8,
        lineStyle: { color: "#34D399", width: 2 },
        itemStyle: { color: "#34D399" },
        areaStyle: { color: "rgba(52, 211, 153, 0.2)" },
        markArea: { 
          data: markAreas, 
          silent: true 
        },
        markPoint: { data: markPoints },
      },
    ],
  };

  const onChartClick = (e: any) => {
    if (e.componentType === "markPoint" && e.data.isImage) {
      setModalImage(e.data.imageUrl);
    }
  };

  return (
    <div className="p-4">
      <ReactECharts
        option={option}
        style={{ width: "100%", height }}
        opts={{ renderer: "canvas" }}
        onEvents={{ click: onChartClick }}
      />

      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Peak moment"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default AttendanceTrendChart;