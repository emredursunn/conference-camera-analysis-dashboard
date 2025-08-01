import React from 'react';
import ReactECharts from 'echarts-for-react';

const reactionData = [{
    "start": "0:11",
    "end": "0:12",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.231
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.231
    }
  },
  {
    "start": "0:14",
    "end": "0:14",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.255
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.255
    }
  },
  {
    "start": "0:17",
    "end": "0:17",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.152
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.152
    }
  },
  {
    "start": "0:17",
    "end": "0:18",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.182
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.182
    }
  },
  {
    "start": "0:25",
    "end": "0:26",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.382
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.382
    }
  },
  {
    "start": "0:26",
    "end": "0:27",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.266
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.266
    }
  },
  {
    "start": "0:27",
    "end": "0:27",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.3
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.3
    }
  },
  {
    "start": "0:28",
    "end": "0:29",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.238
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.238
    }
  },
  {
    "start": "0:29",
    "end": "0:29",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.528
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.528
    }
  },
  {
    "start": "0:30",
    "end": "0:30",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.364
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.364
    }
  },
  {
    "start": "0:30",
    "end": "0:31",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.2
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.2
    }
  },
  {
    "start": "0:31",
    "end": "0:31",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.264
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.264
    }
  },
  {
    "start": "0:31",
    "end": "0:32",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.275
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.275
    }
  }
]

interface ReactionData {
  start: string;
  end: string;
  detections: Array<{
    class_name: string;
    reaction: string;
    confidence: number;
  }>;
  max_reaction: {
    class_name: string;
    reaction: string;
    confidence: number;
  };
}

interface ConferenceReactionsChartProps {
  data?: ReactionData[];
  width?: string | number;
  height?: string | number;
}

const ConferenceReactionsChart: React.FC<ConferenceReactionsChartProps> = ({ 
  data = reactionData, 
  width = '100%', 
  height = 500 
}) => {
  // Convert time string to seconds for easier plotting
  const timeToSeconds = (timeStr: string): number => {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  // Process data for ECharts
  const processedData = data.map(item => ({
    time: timeToSeconds(item.start),
    timeStr: item.start,
    reaction: item.max_reaction.reaction,
    confidence: item.max_reaction.confidence,
    className: item.max_reaction.class_name
  }));

  // Separate data by reaction type
  const laughterData = processedData
    .filter(item => item.reaction === 'laughter')
    .map(item => [item.time, item.confidence, item.timeStr]);

  const applauseData = processedData
    .filter(item => item.reaction === 'applause')
    .map(item => [item.time, item.confidence, item.timeStr]);

  const option = {
    title: {
      text: 'Conference Audience Reactions',
      subtext: 'Laughter and Applause Detection Over Time',
      left: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#374151'
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params: any) {
        const [time, confidence, timeStr] = params.data;
        console.log(time)
        return `
          <strong>${params.seriesName}</strong><br/>
          Time: ${timeStr}<br/>
          Confidence: ${(confidence * 100).toFixed(1)}%
        `;
      }
    },
    legend: {
      data: ['Laughter', 'Applause'],
      top: 50,
      itemGap: 30,
      textStyle: { color: '#4B5563', fontSize: 12 },
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: 'Time (seconds)',
      nameLocation: 'middle',
      nameGap: 30,
      axisLabel: {
        color: '#4B5563',
        formatter: function(value: number) {
          const minutes = Math.floor(value / 60);
          const seconds = Math.floor(value % 60);
          return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#E5E7EB'
        }
      }
    },
    yAxis: {
      type: 'value',
      name: 'Confidence Level',
      nameLocation: 'middle',
      nameGap: 50,
      min: 0,
      max: 1,
      axisLabel: {
        color: '#4B5563',
        formatter: function(value: number) {
          return `${(value * 100).toFixed(0)}%`;
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#E5E7EB'
        }
      }
    },
    series: [
      {
        name: 'Laughter',
        type: 'scatter',
        data: laughterData,
        symbolSize: function(data: number[]) {
          return Math.max(8, data[1] * 40); // Size based on confidence
        },
        itemStyle: {
          color: '#FF6B6B',
          opacity: 0.8
        },
        emphasis: {
          itemStyle: {
            color: '#FF4757',
            opacity: 1,
            borderColor: '#333',
            borderWidth: 2
          }
        }
      },
      {
        name: 'Applause',
        type: 'scatter',
        data: applauseData,
        symbolSize: function(data: number[]) {
          return Math.max(8, data[1] * 40); // Size based on confidence
        },
        itemStyle: {
          color: '#4ECDC4',
          opacity: 0.8
        },
        emphasis: {
          itemStyle: {
            color: '#26D0CE',
            opacity: 1,
            borderColor: '#333',
            borderWidth: 2
          }
        }
      }
    ],
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicOut'
  };

  return (
    <div className="w-full">
      <ReactECharts 
        option={option} 
        style={{ width, height }}
        opts={{ renderer: 'canvas' }}
      />
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Bubble size represents confidence level. Hover over points for detailed information.</p>
      </div>
    </div>
  );
};

export default ConferenceReactionsChart;