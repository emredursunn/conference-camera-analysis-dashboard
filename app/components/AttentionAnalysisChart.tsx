"use client";

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import type { FC } from "react";

// ------------------ Dummy Data ------------------ //
export const attentionSections = [
  { id: "sec1", title: "Project Overview", start_min: 0, end_min: 10 },
  { id: "sec2", title: "Sprint Planning", start_min: 10, end_min: 20 },
  { id: "sec3", title: "Bug Discussion", start_min: 20, end_min: 30 },
  { id: "sec4", title: "Client Feedback", start_min: 30, end_min: 40 },
  { id: "sec5", title: "Team Allocation", start_min: 40, end_min: 50 },
  { id: "sec6", title: "Next Steps", start_min: 50, end_min: 60 },
];

export const sectionAttentionSummary = [
  { section: "sec1", avg_attention: 72 },
  { section: "sec2", avg_attention: 85 },
  { section: "sec3", avg_attention: 66 },
  { section: "sec4", avg_attention: 54 },
  { section: "sec5", avg_attention: 61 },
  { section: "sec6", avg_attention: 78 },
];

export const attentionDrilldown = {
  sec1: {
    points: [
      { second: 0, attention: 70 },
      { second: 120, attention: 75 },
      { second: 240, attention: 68 },
      { second: 360, attention: 78 },
      { second: 480, attention: 72 },
    ],
    incidents: [{ second: 260, type: "phone", user: "alex@example.com" }],
  },
  sec2: {
    points: [
      { second: 0, attention: 80 },
      { second: 60, attention: 76 },
      { second: 120, attention: 85 },
      { second: 180, attention: 91, image: "/images/peak-sec2.jpg" },
      { second: 240, attention: 87 },
    ],
    incidents: [
      { second: 70, type: "sleep", user: "john@example.com" },
      { second: 190, type: "phone", user: "maya@example.com" },
    ],
  },
  sec3: {
    points: [
      { second: 0, attention: 66 },
      { second: 150, attention: 58 },
      { second: 300, attention: 70 },
      { second: 450, attention: 62 },
    ],
    incidents: [
      { second: 160, type: "sleep", user: "jane@example.com" },
      { second: 310, type: "sleep", user: "doe@example.com" },
    ],
  },
  sec4: {
    points: [
      { second: 0, attention: 54 },
      { second: 100, attention: 45 },
      { second: 200, attention: 50 },
      { second: 300, attention: 60 },
      { second: 400, attention: 58 },
    ],
    incidents: [{ second: 110, type: "phone", user: "peter@example.com" }],
  },
  sec5: {
    points: [
      { second: 0, attention: 61 },
      { second: 120, attention: 68 },
      { second: 240, attention: 75 },
      { second: 360, attention: 65 },
    ],
    incidents: [],
  },
  sec6: {
    points: [
      { second: 0, attention: 78 },
      { second: 100, attention: 85 },
      { second: 200, attention: 88, image: "/images/peak-sec2.jpg" },
      { second: 300, attention: 82 },
      { second: 400, attention: 79 },
    ],
    incidents: [{ second: 310, type: "phone", user: "sara@example.com" }],
  },
};

interface Props {
  sections?: typeof attentionSections;
  summary?: typeof sectionAttentionSummary;
  drilldown?: typeof attentionDrilldown;
  height?: number;
}

const AttentionAnalysisChart: FC<Props> = ({
  sections = attentionSections,
  summary = sectionAttentionSummary,
  drilldown = attentionDrilldown,
  height = 550,
}) => {
  const [selectedSec, setSelectedSec] = useState<string | null>("sec2");
  const [modalImage, setModalImage] = useState<string | null>(null);

  // ------------ Colors & Icons ------------ //
  const barColor = "#60A5FA";
  const peakColor = "#34D399";

  // ------------ Bar Chart Option ------------ //
  const barOption: any = {
    backgroundColor: "transparent",
    title: {
      text: "Section-wise Average Attention",
      left: "center",
      top: 5,
      textStyle: { color: "#E5E7EB", fontSize: 16, fontWeight: "600" },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: (p: any) => {
        const id = summary[p[0].dataIndex].section;
        const secMeta = sections.find((s) => s.id === id);
        return `${secMeta?.title}: <b>${p[0].value}%</b>`;
      },
    },
    grid: { top: "18%", bottom: "10%", left: "10%", right: "5%" },
    xAxis: {
      type: "category",
      data: summary.map((s) => sections.find(sec => sec.id === s.section)?.title || s.section),
      axisLabel: { 
        color: "#D1D5DB", 
        interval: 0, 
        alignText: "center",
        formatter: (value: string) => value.replace(/\s+/g, "\n"), // <-- satır sonu ekle
      },
      axisLine: { lineStyle: { color: "#4B5563" } },
    },
    yAxis: {
      type: "value",
      max: 100,
      axisLabel: { color: "#9CA3AF", formatter: "{value}%" },
      splitLine: { lineStyle: { color: "#374151" } },
    },
    series: [
      {
        name: "Avg Attention",
        type: "bar",
        data: summary.map((s) => ({
          value: s.avg_attention,
          itemStyle: {
            color: s.section === selectedSec ? "#A78BFA" : barColor,
          },
        })),
        barWidth: "60%",
        emphasis: { focus: "series" },
      },
    ],
  };

  // ------------ Line Chart Option (if selected) ------------ //
  const lineOption = (() => {
    if (!selectedSec) return null;
    const drill = drilldown[selectedSec as keyof typeof drilldown];
    if (!drill) return null;

    const findY = (sec: number) => drill.points.find((p) => p.second >= sec)?.attention || 0;

    const markPoints = [
      ...drill.points
        .filter((p:any) => p.image)
        .map((p:any) => ({
          name: "Peak Moment",
          xAxis: p.second,
          yAxis: p.attention,
          symbol: "image://" + p.image,
          symbolSize: [40, 40],
          symbolOffset: [0, -20],
          itemStyle: {
            borderColor: peakColor,
            borderWidth: 2,
          },
          tooltip: {
            formatter: "Peak attention moment<br/>Click to view image",
          },
          isImage: true,
          imageUrl: p.image,
        })),
    ];

    return {
      backgroundColor: "transparent",
      title: {
        text: `Attention Trend: ${sections.find((s) => s.id === selectedSec)?.title}`,
        left: "center",
        top: 5,
        textStyle: { color: "#E5E7EB", fontSize: 16, fontWeight: "600" },
      },
      tooltip: { trigger: "axis" },
      grid: { top: "18%", bottom: "10%", left: "10%", right: "5%" },
      xAxis: {
        type: "value",
        name: "Time (seconds)",
        nameLocation: "middle",
        nameGap: 25,
        axisLabel: { color: "#D1D5DB" },
        axisLine: { lineStyle: { color: "#4B5563" } },
      },
      yAxis: {
        type: "value",
        max: 100,
        axisLabel: { color: "#9CA3AF", formatter: "{value}%" },
        splitLine: { lineStyle: { color: "#374151" } },
      },
      series: [
        {
          name: "Attention",
          type: "line",
          smooth: 0.5,
          areaStyle: { color: barColor, opacity: 0.3 },
          lineStyle: { color: barColor, width: 2 },
          data: drill.points.map((p) => [p.second, p.attention]),
          markPoint: { data: markPoints, symbol: "circle" },
        },
      ],
    };
  })();

  // Click handlers
  const onBarClick = (e: any) => {
    const secId = summary[e.dataIndex].section;
    setSelectedSec(secId);
  };

  const onLineClick = (e: any) => {
    if (e.componentType === "markPoint" && e.data.isImage) {
      setModalImage(e.data.imageUrl);
    }
  };

  const incidentStats = (() => {
    if (!selectedSec) return null;
    const drill = drilldown[selectedSec as keyof typeof drilldown];
    if (!drill) return null;
    const phoneCount = drill.incidents.filter((i) => i.type === "phone").length;
    const sleepCount = drill.incidents.filter((i) => i.type === "sleep").length;
    return { phoneCount, sleepCount };
  })();

  return (
    <div className="py-8 h-full w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReactECharts
          option={barOption}
          style={{ width: "100%", height }}
          onEvents={{ click: onBarClick }}
        />
        <div className="relative">
          {lineOption ? (
            <div>
              <ReactECharts
                option={lineOption}
                style={{ width: "100%", height }}
                onEvents={{ click: onLineClick }}
              />
              <div className="flex justify-center items-center gap-x-6 gap-y-2 flex-wrap mt-4 text-xs text-gray-400">
                {incidentStats && (
                  <>
                    <span className="flex items-center gap-1.5">
                      <span className="text-base">📱</span>
                      <span>On Phone: <b>{incidentStats.phoneCount}</b></span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-base">💤</span>
                      <span>Asleep: <b>{incidentStats.sleepCount}</b></span>
                    </span>
                  </>
                )}
                <span className="flex items-center gap-1.5">
                  <span className="text-base">📷</span>
                  <span>Peak moment (clickable)</span>
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 rounded-lg bg-gray-800/30">
              <p className="text-center text-sm">
                Select a section from the chart
                <br />
                to view its detailed attention trend.
              </p>
            </div>
          )}
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Peak attention moment"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default AttentionAnalysisChart;
