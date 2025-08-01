'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import type { FC } from 'react';

// -------------------------------------------------------------
// EmotionOverTimeChart.tsx
// Stacked Area Chart with a right-side panel for sections and annotations.
// -------------------------------------------------------------

export const demoEmotionOverTime = {
  timeline: [
    { minute: 0, Neutral: 0.8, Surprised: 0.2 },
    { minute: 5, Neutral: 0.6, Surprised: 0.3, Happiness: 0.1 },
    { minute: 10, Surprised: 0.4, Happiness: 0.5, Neutral: 0.1 },
    { minute: 15, Happiness: 0.6, Neutral: 0.3, Surprised: 0.1 },
    { minute: 20, Happiness: 0.4, Neutral: 0.4, Calmness: 0.2 },
    { minute: 25, Neutral: 0.6, Calmness: 0.3, Stress: 0.1 },
    { minute: 30, Calmness: 0.5, Neutral: 0.3, Stress: 0.2 },
    { minute: 35, Calmness: 0.6, Neutral: 0.25, Stress: 0.15 },
    { minute: 40, Neutral: 0.5, Calmness: 0.4, Stress: 0.1 },
    { minute: 45, Happiness: 0.6, Neutral: 0.3, Surprised: 0.1 },
    { minute: 50, Happiness: 0.4, Neutral: 0.4, Anger: 0.2 },
    { minute: 55, Neutral: 0.4, Anger: 0.3, Stress: 0.3 },
    { minute: 60, Happiness: 0.5, Calmness: 0.4, Neutral: 0.1 },
  ],
  annotations: [
    { minute: 10, type: 'laugh' },
    { minute: 30, type: 'clap' },
    { minute: 45, type: 'photo', image: '/images/peak-sec.png' },
  ],
  sections: [
    { section: 'Section 1', start: 0, end: 20, topic: 'Project Kickoff & Role Assignment' },
    { section: 'Section 2', start: 20, end: 40, topic: 'Technical Details & Timeline' },
    { section: 'Section 3', start: 40, end: 60, topic: 'Client Expectations & QA' },
  ],
};

interface EmotionOverTimeProps {
  data?: typeof demoEmotionOverTime;
  height?: number;
}

const EmotionOverTimeChart: FC<EmotionOverTimeProps> = ({ data = demoEmotionOverTime, height = 450 }) => {
  const COLORS: Record<string, string> = {
    Neutral: '#6B7280',
    Fear: '#1E40AF',
    Stress: '#DC2626',
    Happiness: '#F59E0B',
    Sadness: '#3B82F6',
    Anger: '#991B1B',
    Surprised: '#06B6D4',
    Calmness: '#059669',
    Disgust: '#7C3AED',
  };

  const emotions = Object.keys(COLORS);
  const minutes = data.timeline.map((p) => p.minute);

  const activeEmotions = emotions.filter((emotion) =>
    data.timeline.some((point) => (point as any)[emotion] > 0)
  );

  const series = activeEmotions.map((emotion) => {
    const values = data.timeline.map((point) => (point as any)[emotion] ?? 0);
    return {
      name: emotion,
      type: 'line',
      stack: 'emotions',
      smooth: true,
      symbol: 'none',
      areaStyle: { color: COLORS[emotion], opacity: 0.8 },
      lineStyle: { width: 1, color: COLORS[emotion] },
      emphasis: { focus: 'series', areaStyle: { opacity: 1 } },
      data: values,
    };
  });

  const markLines = data.sections.slice(1).map((s) => ({
    name: s.section,
    xAxis: s.start,
    lineStyle: {
      color: '#9CA3AF',
      type: 'dashed',
      width: 1.5,
    },
    label: {
      show: true,
      position: 'insideEndTop',
      formatter: s.section,
      color: '#374151',
      fontSize: 12,
      fontWeight: 'bold',
      backgroundColor: '#E5E7EB',
      padding: [4, 6],
      borderRadius: 4,
    },
  }));

  const option: any = {
    backgroundColor: 'transparent',
    title: {
      text: 'Zamana Göre Genel Toplantı Duygu Akışı',
      left: 'center',
      top: 10,
      textStyle: { color: '#374151', fontSize: 18, fontWeight: '600' },
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#E5E7EB',
      borderWidth: 1,
      axisPointer: { type: 'cross', label: { backgroundColor: '#9CA3AF' } },
      formatter: (params: any[]) => {
        if (!params || !params.length) return '';
        const minute = params[0].axisValue;
        let html = `<div style='font-weight:600;margin-bottom:8px;color:#374151;'>Zaman: ${minute} dakika</div>`;
        html += '<div style="margin-bottom:4px;color:#4B5563;font-size:13px;font-weight:500;">Duygular:</div>';
        params
          .filter((p) => p.value > 0)
          .sort((a, b) => b.value - a.value)
          .forEach((p) => {
            const percentage = (p.value * 100).toFixed(1);
            html += `<div style='margin:2px 0;'><span style='display:inline-block;width:12px;height:12px;border-radius:2px;background:${COLORS[p.seriesName]};margin-right:8px;'></span><span style='color:#374151;'>${p.seriesName}:</span> <b style='color:#34D399;'>${percentage}%</b></div>`;
          });
        return html;
      },
    },
    legend: {
      data: activeEmotions,
      top: 45,
      textStyle: { color: '#4B5563', fontSize: 12 },
      itemWidth: 14,
      itemHeight: 14,
      icon: 'roundRect',
      orient: 'horizontal',
    },
    grid: { left: '6%', right: '6%', top: '20%', bottom: '15%' },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: minutes,
      name: 'Zaman (dakika)',
      nameLocation: 'middle',
      nameGap: 25,
      nameTextStyle: { color: '#4B5563', fontSize: 12 },
      axisLabel: { color: '#4B5563', fontSize: 11 },
      axisLine: { lineStyle: { color: '#9CA3AF' } },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      max: 1,
      min: 0,
      name: 'Duygu Şiddeti',
      nameLocation: 'middle',
      nameGap: 40,
      nameTextStyle: { color: '#4B5563', fontSize: 12 },
      axisLabel: {
        color: '#4B5563',
        fontSize: 11,
        formatter: (value: number) => `${(value * 100).toFixed(0)}%`,
      },
      splitLine: { lineStyle: { color: '#E5E7EB', type: 'solid', opacity: 0.3 } },
    },
    series,
  };

  if (option.series.length) {
    option.series[0].markLine = { data: markLines, silent: true, symbol: 'none' };
  }

  return (
    <div className='flex flex-col lg:flex-row h-full w-full '>
      <div className='flex-grow p-4'>
        <ReactECharts
          option={option}
          style={{ width: '100%', height: `${height}px` }}
          opts={{ renderer: 'canvas' }}
        />
      </div>
      <div className='w-72 m-auto p-4 flex flex-col'>
        <h3 className='text-base font-semibold text-gray-700 mb-3 border-b border-gray-300 pb-2'>
          Toplantı Bölümleri
        </h3>
        <div className='space-y-3 overflow-y-auto'>
          {data.sections.map((section, index) => (
            <div key={index} className='bg-gray-50 rounded-lg p-3'>
              <div className='flex items-center justify-between mb-1'>
                <h4 className='font-medium text-gray-700 text-sm'>
                  {section.section}
                </h4>
                <span className='text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded'>
                  {section.start}-{section.end} dk
                </span>
              </div>
              <p className='text-gray-600 text-xs leading-relaxed'>
                {section.topic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionOverTimeChart;