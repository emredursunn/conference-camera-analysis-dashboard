"use client";

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import Image from "next/image";
import type { FC } from "react";

// ------------------ Dummy Data ------------------ //
export const attentionSections = [
  {
    id: "sec1",
    title: "Bölüm 1: Dönüşüm: Tekil Çipten Yapay Zeka Altyapısı",
    start_min: 0,
    end_min: 15,
  },
  {
    id: "sec2",
    title: "Bölüm 2: Kurumsal Yapay Zeka Platformu ve Trilyon Dolarlık Pazar",
    start_min: 15,
    end_min: 35,
  },
  {
    id: "sec3",
    title: "Bölüm 3: Yeni Yapay Zeka Veri Platformu ve Akıllı Muhakeme Motoru",
    start_min: 35,
    end_min: 60,
  },
];

export const sectionAttentionSummary = [
  { section: "sec1", avg_attention: 72 },
  { section: "sec2", avg_attention: 85 },
  { section: "sec3", avg_attention: 66 },
];

export const attentionDrilldown = {
  sec1: {
    points: [
      { second: 0, attention: 70 },
      { second: 150, attention: 75 },
      { second: 300, attention: 80 },
      { second: 450, attention: 85, image: "/images/peak-sec3.png" },
      { second: 600, attention: 78 },
      { second: 750, attention: 73 },
      { second: 900, attention: 72 },
    ],
    incidents: [
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
   

 
    ],
  },
  sec2: {
    points: [
      { second: 0, attention: 60 },
      { second: 200, attention: 65 },
      { second: 400, attention: 90, image: "/images/peak-sec3.png" },
      { second: 600, attention: 80 },
      { second: 800, attention: 85 },
      { second: 1000, attention: 75 },
      { second: 1200, attention: 78 },
    ],
    incidents: [
      { second: 150, type: "sleep", user: "john@example.com" },
      { second: 350, type: "phone", user: "alex@example.com" },
      { second: 550, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },

   
    

    ],
  },
  sec3: {
    points: [
      { second: 0, attention: 66 },
      { second: 250, attention: 68 },
      { second: 500, attention: 72 },
      { second: 750, attention: 78, image: "/images/peak-sec3.png" },
      { second: 1000, attention: 74 },
      { second: 1250, attention: 70 },
      { second: 1500, attention: 69 },
    ],
    incidents: [
      { second: 200, type: "sleep", user: "jane@example.com" },
      { second: 400, type: "sleep", user: "doe@example.com" },
      { second: 600, type: "phone", user: "alex@example.com" },
      { second: 150, type: "sleep", user: "john@example.com" },
      { second: 350, type: "phone", user: "alex@example.com" },
      { second: 550, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },
      { second: 360, type: "phone", user: "maya@example.com" },
      { second: 120, type: "phone", user: "alex@example.com" },
      { second: 240, type: "sleep", user: "john@example.com" },

    

    ],
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

  // ------------ Bar Chart Option ------------ //
  const barOption: any = {
    backgroundColor: "transparent",
    title: {
      text: "Section-wise Average Attention",
      left: "center",
      top: 5,
      textStyle: { color: "#374151", fontSize: 16, fontWeight: "600" },
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
        color: "#4B5563",
        interval: 0, 
        alignText: "center",
        formatter: (value: string) => value.replace(/\s+/g, "\n"), // <-- satır sonu ekle
      },
      axisLine: { lineStyle: { color: "#9CA3AF" } },
    },
    yAxis: {
      type: "value",
      max: 100,
      axisLabel: { color: "#4B5563", formatter: "{value}%" },
      splitLine: { lineStyle: { color: "#E5E7EB" } },
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
// ------------ Line Chart Option (dinamik X ekseni) ------------ //
const lineOption = (() => {
  if (!selectedSec) return null;
  const drill = drilldown[selectedSec as keyof typeof drilldown];
  if (!drill) return null;

  const currentSection = sections.find((s) => s.id === selectedSec);
  const maxSecond = (currentSection!.end_min - currentSection!.start_min) * 60;
  const markPoints = drill.points
  .filter((p: any) => p.image)
  .map((p: any) => ({
    name: "Peak Moment",
    coord: [p.second, p.attention],
    symbol: `image://${p.image}`,
    symbolSize: [80, 60],
    symbolOffset: [40, -40],
    itemStyle: {
      borderColor: "#FFFFFF",
      borderWidth: 3,
      shadowColor: "rgba(76, 201, 240, 0.4)",
      shadowBlur: 8,
      shadowOffsetY: 2,
    },
    emphasis: {
      itemStyle: {
        borderColor: "#F72585",
        borderWidth: 4,
        shadowColor: "rgba(247, 37, 133, 0.6)",
        shadowBlur: 12,
        shadowOffsetY: 3,
      },
      symbolSize: [72, 54],
    },
    tooltip: {
      formatter: `<img src="${p.image}" style="width:150px;height:auto;border-radius:8px;"/><br/>Peak Attention Moment<br/>Click to enlarge photo`,
    },
    isImage: true,
    imageUrl: p.image,
  }));

  return {
    backgroundColor: "transparent",
    title: {
      text: `Attention Trend\n\n${currentSection?.title}`,
      left: "center",
      top: 5,
      textStyle: { color: "#374151", fontSize: 16, fontWeight: "600", alignText: "center" },
    },
    tooltip: { trigger: "axis" },
    grid: { top: "18%", bottom: "10%", left: "10%", right: "5%" },
    xAxis: {
      type: "value",
      name: "Time (minute:second)",
      min: 0,
      max: maxSecond, // dinamik maksimum saniye
      nameLocation: "middle",
      nameGap: 44,
      nameTextStyle: { color: "#4B5563", fontSize: 13, fontWeight: "bold" },
      axisLabel: {
        color: "#4B5563",
        formatter: function (value: number) {
          const min = Math.floor(value / 60);
          const sec = Math.floor(value % 60);
          return `${min}:${sec.toString().padStart(2, '0')}`;
        },
      },
      axisLine: { lineStyle: { color: "#9CA3AF" } },
    },
    yAxis: {
      type: "value",
      max: 100,
      axisLabel: { color: "#4B5563", formatter: "{value}%" },
      splitLine: { lineStyle: { color: "#E5E7EB" } },
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
              <div className="flex justify-center items-center gap-x-6 gap-y-2 flex-wrap mt-4 text-xs text-gray-600">
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
            <div className="flex items-center justify-center h-full text-gray-500 rounded-lg bg-gray-100">
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
          <Image
            src={modalImage}
            alt="Peak attention moment"
            width={800}
            height={600}
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default AttentionAnalysisChart;