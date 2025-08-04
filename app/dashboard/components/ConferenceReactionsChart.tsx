import React from 'react';
import ReactECharts from 'echarts-for-react';

// Ses şiddeti verisi (decibel)
const audioLevelData = [
  { "start_time": 0.0, "end_time": 5.0, "average_db": -28.45 },
  { "start_time": 5.0, "end_time": 10.0, "average_db": -51.5 },
  { "start_time": 10.0, "end_time": 15.0, "average_db": -51.66 },
  { "start_time": 15.0, "end_time": 20.0, "average_db": -51.41 },
  { "start_time": 20.0, "end_time": 25.0, "average_db": -47.67 },
  { "start_time": 25.0, "end_time": 30.0, "average_db": -6.08 },
  { "start_time": 30.0, "end_time": 35.0, "average_db": -10.42 },
  { "start_time": 35.0, "end_time": 40.0, "average_db": -49.19 },
  { "start_time": 40.0, "end_time": 45.0, "average_db": -50.02 },
  { "start_time": 45.0, "end_time": 50.0, "average_db": -52.02 },
  { "start_time": 50.0, "end_time": 55.0, "average_db": -29.77 },
  { "start_time": 55.0, "end_time": 60.0, "average_db": -8.81 },
  { "start_time": 60.0, "end_time": 65.0, "average_db": -31.13 },
  { "start_time": 65.0, "end_time": 70.0, "average_db": -10.13 },
  { "start_time": 70.0, "end_time": 75.0, "average_db": -48.6 },
  { "start_time": 75.0, "end_time": 80.0, "average_db": -50.08 },
  { "start_time": 80.0, "end_time": 85.0, "average_db": -34.84 },
  { "start_time": 85.0, "end_time": 90.0, "average_db": -5.8 },
  { "start_time": 90.0, "end_time": 95.0, "average_db": -30.28 },
  { "start_time": 95.0, "end_time": 100.0, "average_db": -49.38 },
  { "start_time": 100.0, "end_time": 105.0, "average_db": -10.2 },
  { "start_time": 105.0, "end_time": 110.0, "average_db": -26.33 },
  { "start_time": 110.0, "end_time": 115.0, "average_db": -45.04 },
  { "start_time": 115.0, "end_time": 120.0, "average_db": -51.21 },
  { "start_time": 120.0, "end_time": 125.0, "average_db": -52.35 },
  { "start_time": 125.0, "end_time": 130.0, "average_db": -50.94 },
  { "start_time": 130.0, "end_time": 135.0, "average_db": -6.85 },
  { "start_time": 135.0, "end_time": 140.0, "average_db": -12.06 },
  { "start_time": 140.0, "end_time": 145.0, "average_db": -50.21 },
  { "start_time": 145.0, "end_time": 150.0, "average_db": -36.81 },
  { "start_time": 150.0, "end_time": 155.0, "average_db": -43.05 },
  { "start_time": 155.0, "end_time": 160.0, "average_db": -43.27 },
  { "start_time": 160.0, "end_time": 165.0, "average_db": -51.46 },
  { "start_time": 165.0, "end_time": 170.0, "average_db": -51.49 },
  { "start_time": 170.0, "end_time": 175.0, "average_db": -50.65 },
  { "start_time": 175.0, "end_time": 180.0, "average_db": -51.46 },
  { "start_time": 180.0, "end_time": 185.0, "average_db": -53.15 },
  { "start_time": 185.0, "end_time": 190.0, "average_db": -52.47 },
  { "start_time": 190.0, "end_time": 195.0, "average_db": -51.04 },
  { "start_time": 195.0, "end_time": 200.0, "average_db": -52.13 },
  { "start_time": 200.0, "end_time": 205.0, "average_db": -51.55 },
  { "start_time": 205.0, "end_time": 210.0, "average_db": -52.9 },
  { "start_time": 210.0, "end_time": 215.0, "average_db": -50.9 },
  { "start_time": 215.0, "end_time": 220.0, "average_db": -51.25 },
  { "start_time": 220.0, "end_time": 225.0, "average_db": -34.53 },
  { "start_time": 225.0, "end_time": 230.0, "average_db": -6.28 },
  { "start_time": 230.0, "end_time": 235.0, "average_db": -44.81 },
  { "start_time": 235.0, "end_time": 240.0, "average_db": -51.05 },
  { "start_time": 240.0, "end_time": 245.0, "average_db": -52.31 },
  { "start_time": 245.0, "end_time": 250.0, "average_db": -46.62 },
  { "start_time": 250.0, "end_time": 255.0, "average_db": -50.62 },
  { "start_time": 255.0, "end_time": 260.0, "average_db": -52.81 },
  { "start_time": 260.0, "end_time": 265.0, "average_db": -48.96 },
  { "start_time": 265.0, "end_time": 270.0, "average_db": -15.88 },
  { "start_time": 270.0, "end_time": 275.0, "average_db": -22.8 },
  { "start_time": 275.0, "end_time": 280.0, "average_db": -49.83 },
  { "start_time": 280.0, "end_time": 285.0, "average_db": -45.07 },
  { "start_time": 285.0, "end_time": 290.0, "average_db": -26.9 },
  { "start_time": 290.0, "end_time": 295.0, "average_db": -34.06 },
  { "start_time": 295.0, "end_time": 300.0, "average_db": -5.84 },
  { "start_time": 300.0, "end_time": 305.0, "average_db": -35.61 },
  { "start_time": 305.0, "end_time": 310.0, "average_db": -51.53 },
  { "start_time": 310.0, "end_time": 315.0, "average_db": -54.03 },
  { "start_time": 315.0, "end_time": 320.0, "average_db": -51.1 },
  { "start_time": 320.0, "end_time": 325.0, "average_db": -49.14 },
  { "start_time": 325.0, "end_time": 330.0, "average_db": -52.15 },
  { "start_time": 330.0, "end_time": 335.0, "average_db": -51.88 },
  { "start_time": 335.0, "end_time": 340.0, "average_db": -51.99 },
  { "start_time": 340.0, "end_time": 345.0, "average_db": -51.98 },
  { "start_time": 345.0, "end_time": 350.0, "average_db": -52.76 },
  { "start_time": 350.0, "end_time": 355.0, "average_db": -53.38 },
  { "start_time": 355.0, "end_time": 360.0, "average_db": -51.07 },
  { "start_time": 360.0, "end_time": 365.0, "average_db": -47.83 },
  { "start_time": 365.0, "end_time": 370.0, "average_db": -50.6 },
  { "start_time": 370.0, "end_time": 375.0, "average_db": -52.32 },
  { "start_time": 375.0, "end_time": 380.0, "average_db": -52.1 },
  { "start_time": 380.0, "end_time": 385.0, "average_db": -51.48 },
  { "start_time": 385.0, "end_time": 390.0, "average_db": -34.0 },
  { "start_time": 390.0, "end_time": 395.0, "average_db": -7.89 },
  { "start_time": 395.0, "end_time": 400.0, "average_db": -43.31 },
  { "start_time": 400.0, "end_time": 405.0, "average_db": -52.24 },
  { "start_time": 405.0, "end_time": 410.0, "average_db": -47.8 },
  { "start_time": 410.0, "end_time": 415.0, "average_db": -40.74 },
  { "start_time": 415.0, "end_time": 420.0, "average_db": -9.84 },
  { "start_time": 420.0, "end_time": 425.0, "average_db": -41.38 },
  { "start_time": 425.0, "end_time": 430.0, "average_db": -51.59 },
  { "start_time": 430.0, "end_time": 435.0, "average_db": -44.46 },
  { "start_time": 435.0, "end_time": 440.0, "average_db": -33.99 },
  { "start_time": 440.0, "end_time": 445.0, "average_db": -7.91 },
  { "start_time": 445.0, "end_time": 450.0, "average_db": -37.86 },
  { "start_time": 450.0, "end_time": 455.0, "average_db": -53.26 },
  { "start_time": 455.0, "end_time": 460.0, "average_db": -53.36 },
  { "start_time": 460.0, "end_time": 465.0, "average_db": -32.61 },
  { "start_time": 465.0, "end_time": 470.0, "average_db": -22.3 },
  { "start_time": 470.0, "end_time": 475.0, "average_db": -50.28 },
  { "start_time": 475.0, "end_time": 480.0, "average_db": -52.21 },
  { "start_time": 480.0, "end_time": 485.0, "average_db": -49.69 },
  { "start_time": 485.0, "end_time": 490.0, "average_db": -32.31 },
  { "start_time": 490.0, "end_time": 495.0, "average_db": -6.94 },
  { "start_time": 495.0, "end_time": 500.0, "average_db": -37.58 },
  { "start_time": 500.0, "end_time": 505.0, "average_db": -49.85 },
  { "start_time": 505.0, "end_time": 510.0, "average_db": -46.04 },
  { "start_time": 510.0, "end_time": 515.0, "average_db": -51.71 },
  { "start_time": 515.0, "end_time": 520.0, "average_db": -52.25 },
  { "start_time": 520.0, "end_time": 525.0, "average_db": -43.48 },
  { "start_time": 525.0, "end_time": 530.0, "average_db": -17.35 },
  { "start_time": 530.0, "end_time": 535.0, "average_db": -52.14 },
  { "start_time": 535.0, "end_time": 540.0, "average_db": -65.47 }
];

const reactionData = [
  {
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
    "start": "0:32",
    "end": "0:33",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.562
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.562
    }
  },
  {
    "start": "0:40",
    "end": "0:40",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.239
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.239
    }
  },
  {
    "start": "0:46",
    "end": "0:46",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.291
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.291
    }
  },
  {
    "start": "0:55",
    "end": "0:56",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.668
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.668
    }
  },
  {
    "start": "0:56",
    "end": "0:56",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.809
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.809
    }
  },
  {
    "start": "0:56",
    "end": "0:57",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.724
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.724
    }
  },
  {
    "start": "0:57",
    "end": "0:57",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.554
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.554
    }
  },
  {
    "start": "1:05",
    "end": "1:05",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.703
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.703
    }
  },
  {
    "start": "1:05",
    "end": "1:06",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.831
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.831
    }
  },
  {
    "start": "1:12",
    "end": "1:12",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.389
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.389
    }
  },
  {
    "start": "1:25",
    "end": "1:26",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.734
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.734
    }
  },
  {
    "start": "1:26",
    "end": "1:26",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.534
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.534
    }
  },
  {
    "start": "1:27",
    "end": "1:27",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.535
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.535
    }
  },
  {
    "start": "1:27",
    "end": "1:28",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.941
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.941
    }
  },
  {
    "start": "1:28",
    "end": "1:29",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.539
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.539
    }
  },
  {
    "start": "1:29",
    "end": "1:30",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.587
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.587
    }
  },
  {
    "start": "1:42",
    "end": "1:42",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.602
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.602
    }
  },
  {
    "start": "1:43",
    "end": "1:44",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.654
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.654
    }
  },
  {
    "start": "1:44",
    "end": "1:45",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.7
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.7
    }
  },
  {
    "start": "1:45",
    "end": "1:45",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.653
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.653
    }
  },
  {
    "start": "1:53",
    "end": "1:53",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.218
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.218
    }
  },
  {
    "start": "1:53",
    "end": "1:54",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.406
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.406
    }
  },
  {
    "start": "2:11",
    "end": "2:12",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.748
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.748
    }
  },
  {
    "start": "2:12",
    "end": "2:12",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.642
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.642
    }
  },
  {
    "start": "2:14",
    "end": "2:14",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.817
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.817
    }
  },
  {
    "start": "2:14",
    "end": "2:15",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.752
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.752
    }
  },
  {
    "start": "2:15",
    "end": "2:16",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.586
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.586
    }
  },
  {
    "start": "2:16",
    "end": "2:16",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.503
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.503
    }
  },
  {
    "start": "2:16",
    "end": "2:17",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.519
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.519
    }
  },
  {
    "start": "2:17",
    "end": "2:17",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.61
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.61
    }
  },
  {
    "start": "2:17",
    "end": "2:18",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.814
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.814
    }
  },
  {
    "start": "2:39",
    "end": "2:39",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.212
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.212
    }
  },
  {
    "start": "3:01",
    "end": "3:01",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.173
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.173
    }
  },
  {
    "start": "3:41",
    "end": "3:42",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.163
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.163
    }
  },
  {
    "start": "3:45",
    "end": "3:45",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.654
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.654
    }
  },
  {
    "start": "3:46",
    "end": "3:47",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.801
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.801
    }
  },
  {
    "start": "3:47",
    "end": "3:47",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.508
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.508
    }
  },
  {
    "start": "3:47",
    "end": "3:48",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.614
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.614
    }
  },
  {
    "start": "3:48",
    "end": "3:48",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.566
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.566
    }
  },
  {
    "start": "4:04",
    "end": "4:04",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.169
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.169
    }
  },
  {
    "start": "4:05",
    "end": "4:05",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.324
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.324
    }
  },
  {
    "start": "4:13",
    "end": "4:13",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.189
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.189
    }
  },
  {
    "start": "4:13",
    "end": "4:14",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.175
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.175
    }
  },
  {
    "start": "4:20",
    "end": "4:20",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.245
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.245
    }
  },
  {
    "start": "4:20",
    "end": "4:21",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.254
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.254
    }
  },
  {
    "start": "4:30",
    "end": "4:30",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.582
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.582
    }
  },
  {
    "start": "4:35",
    "end": "4:35",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.214
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.214
    }
  },
  {
    "start": "4:35",
    "end": "4:36",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.208
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.208
    }
  },
  {
    "start": "4:36",
    "end": "4:36",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.235
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.235
    }
  },
  {
    "start": "4:55",
    "end": "4:55",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.818
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.818
    }
  },
  {
    "start": "4:55",
    "end": "4:56",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.711
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.711
    }
  },
  {
    "start": "4:57",
    "end": "4:57",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.724
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.724
    }
  },
  {
    "start": "4:57",
    "end": "4:58",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.76
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.76
    }
  },
  {
    "start": "5:00",
    "end": "5:00",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.845
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.845
    }
  },
  {
    "start": "5:09",
    "end": "5:10",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.203
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.203
    }
  },
  {
    "start": "5:12",
    "end": "5:12",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.237
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.237
    }
  },
  {
    "start": "5:49",
    "end": "5:50",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.155
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.155
    }
  },
  {
    "start": "5:55",
    "end": "5:55",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.266
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.266
    }
  },
  {
    "start": "6:27",
    "end": "6:28",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.184
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.184
    }
  },
  {
    "start": "6:32",
    "end": "6:32",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.647
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.647
    }
  },
  {
    "start": "6:33",
    "end": "6:33",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.597
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.597
    }
  },
  {
    "start": "6:34",
    "end": "6:34",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.885
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.885
    }
  },
  {
    "start": "6:34",
    "end": "6:35",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.794
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.794
    }
  },
  {
    "start": "6:40",
    "end": "6:41",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.229
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.229
    }
  },
  {
    "start": "6:56",
    "end": "6:56",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.648
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.648
    }
  },
  {
    "start": "6:56",
    "end": "6:57",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.656
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.656
    }
  },
  {
    "start": "6:57",
    "end": "6:57",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.705
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.705
    }
  },
  {
    "start": "6:59",
    "end": "6:59",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.668
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.668
    }
  },
  {
    "start": "7:15",
    "end": "7:16",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.156
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.156
    }
  },
  {
    "start": "7:24",
    "end": "7:25",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.545
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.545
    }
  },
  {
    "start": "7:25",
    "end": "7:25",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.822
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.822
    }
  },
  {
    "start": "7:35",
    "end": "7:36",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.247
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.247
    }
  },
  {
    "start": "7:36",
    "end": "7:36",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.156
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.156
    }
  },
  {
    "start": "7:41",
    "end": "7:42",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.151
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.151
    }
  },
  {
    "start": "7:47",
    "end": "7:47",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.645
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.645
    }
  },
  {
    "start": "8:02",
    "end": "8:02",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.184
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.184
    }
  },
  {
    "start": "8:02",
    "end": "8:03",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.227
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.227
    }
  },
  {
    "start": "8:03",
    "end": "8:03",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.32
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.32
    }
  },
  {
    "start": "8:09",
    "end": "8:10",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.942
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.942
    }
  },
  {
    "start": "8:10",
    "end": "8:10",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.859
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.859
    }
  },
  {
    "start": "8:11",
    "end": "8:12",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.931
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.931
    }
  },
  {
    "start": "8:12",
    "end": "8:12",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.588
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.588
    }
  },
  {
    "start": "8:14",
    "end": "8:15",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.605
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.605
    }
  },
  {
    "start": "8:15",
    "end": "8:15",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.719
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.719
    }
  },
  {
    "start": "8:21",
    "end": "8:22",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.175
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.175
    }
  },
  {
    "start": "8:22",
    "end": "8:22",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.229
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.229
    }
  },
  {
    "start": "8:22",
    "end": "8:23",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.167
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.167
    }
  },
  {
    "start": "8:24",
    "end": "8:25",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.176
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.176
    }
  },
  {
    "start": "8:27",
    "end": "8:27",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.28
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.28
    }
  },
  {
    "start": "8:27",
    "end": "8:28",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.249
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.249
    }
  },
  {
    "start": "8:28",
    "end": "8:28",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.242
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.242
    }
  },
  {
    "start": "8:28",
    "end": "8:29",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.493
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.493
    }
  },
  {
    "start": "8:46",
    "end": "8:46",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.713
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.713
    }
  },
  {
    "start": "8:46",
    "end": "8:47",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.659
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.659
    }
  },
  {
    "start": "8:47",
    "end": "8:47",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.854
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.854
    }
  },
  {
    "start": "8:47",
    "end": "8:48",
    "detections": [
      {
        "class_name": "Applause",
        "reaction": "applause",
        "confidence": 0.778
      }
    ],
    "max_reaction": {
      "class_name": "Applause",
      "reaction": "applause",
      "confidence": 0.778
    }
  },
  {
    "start": "8:52",
    "end": "8:52",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.196
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.196
    }
  },
  {
    "start": "8:52",
    "end": "8:53",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.287
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.287
    }
  },
  {
    "start": "8:53",
    "end": "8:53",
    "detections": [
      {
        "class_name": "Laughter",
        "reaction": "laughter",
        "confidence": 0.353
      }
    ],
    "max_reaction": {
      "class_name": "Laughter",
      "reaction": "laughter",
      "confidence": 0.353
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

interface AudioLevelData {
  start_time: number;
  end_time: number;
  average_db: number;
}

interface ConferenceReactionsChartProps {
  data?: ReactionData[];
  audioLevelData?: AudioLevelData[];
  width?: string | number;
  height?: string | number;
}

const ConferenceReactionsChart: React.FC<ConferenceReactionsChartProps> = ({ 
  data = reactionData, 
  audioLevelData: audioData = audioLevelData, 
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

  // Group reactions by 5-second intervals to prevent overlapping
  const groupReactionsByInterval = (reactions: typeof processedData, intervalSeconds: number = 5) => {
    const groups: { [key: number]: typeof processedData } = {};
    
    reactions.forEach(reaction => {
      const intervalKey = Math.floor(reaction.time / intervalSeconds) * intervalSeconds;
      if (!groups[intervalKey]) {
        groups[intervalKey] = [];
      }
      groups[intervalKey].push(reaction);
    });
    
    // For each interval, select the reaction with highest confidence
    return Object.keys(groups).map(key => {
      const intervalReactions = groups[parseInt(key)];
      const bestReaction = intervalReactions.reduce((prev, current) => 
        prev.confidence > current.confidence ? prev : current
      );
      
      // Use the center of the interval for positioning
      const intervalStart = parseInt(key);
      const centerTime = intervalStart + (intervalSeconds / 2);
      
      return {
        ...bestReaction,
        time: centerTime,
        timeStr: `${Math.floor(centerTime / 60)}:${Math.floor(centerTime % 60).toString().padStart(2, '0')}`,
        intervalStart,
        intervalEnd: intervalStart + intervalSeconds,
        totalReactions: intervalReactions.length
      };
    });
  };

  // Group all reactions by 5-second intervals
  const groupedReactions = groupReactionsByInterval(processedData, 5);

  // Process audio level data
  const processedAudioData = audioData.map((item: AudioLevelData) => ({
    time: item.start_time,
    db: item.average_db
  }));

  // Separate grouped data by reaction type
  const laughterData = groupedReactions
    .filter(item => item.reaction === 'laughter')
    .map(item => [item.time, item.confidence, item.timeStr, item.totalReactions]);

  const applauseData = groupedReactions
    .filter(item => item.reaction === 'applause')
    .map(item => [item.time, item.confidence, item.timeStr, item.totalReactions]);

  const option = {
    title: {
      text: 'Audience Engagement Analysis',
      subtext: 'Real-time reactions and audio levels throughout the presentation',
      left: 'center',
      textStyle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1F2937',
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      subtextStyle: {
        fontSize: 13,
        color: '#6B7280',
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      top: 15
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#E5E7EB',
          width: 1,
          type: 'dashed'
        }
      },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#E5E7EB',
      borderWidth: 1,
      borderRadius: 8,
      padding: [12, 16],
      textStyle: {
        fontSize: 13,
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      formatter: function(params: any) {
        if (params.length === 0) return '';
        
        const timeMinutes = Math.floor(params[0].axisValue / 60);
        const timeSeconds = Math.floor(params[0].axisValue % 60);
        
        let result = `<div style="font-weight: 600; color: #1F2937; margin-bottom: 8px;">⏱️ ${timeMinutes}:${timeSeconds.toString().padStart(2, '0')}</div>`;
        
        params.forEach((param: any) => {
          if (param.seriesName === 'Audio Level') {
            result += `<div style="color: #8B5CF6; margin: 4px 0;">🔊 Audio: <strong>${param.data.toFixed(1)} dB</strong></div>`;
          } else if (param.seriesName === 'Laughter') {
            const [time, confidence, timeStr, totalReactions] = param.data;
            result += `<div style="color: #F59E0B; margin: 4px 0;">😄 Laughter: <strong>${(confidence * 100).toFixed(1)}%</strong></div>`;
            if (totalReactions > 1) {
              result += `<div style="color: #92400E; font-size: 11px; margin: 2px 0;">• ${totalReactions} reactions in 5s interval</div>`;
            }
          } else if (param.seriesName === 'Applause') {
            const [time, confidence, timeStr, totalReactions] = param.data;
            result += `<div style="color: #10B981; margin: 4px 0;">👏 Applause: <strong>${(confidence * 100).toFixed(1)}%</strong></div>`;
            if (totalReactions > 1) {
              result += `<div style="color: #047857; font-size: 11px; margin: 2px 0;">• ${totalReactions} reactions in 5s interval</div>`;
            }
          }
        });
        
        return result;
      }
    },
    legend: {
      data: [
        { name: 'Laughter', icon: 'circle' },
        { name: 'Applause', icon: 'circle' },
        { name: 'Audio Level', icon: 'rect' }
      ],
      top: 65,
      itemGap: 40,
      itemWidth: 12,
      itemHeight: 12,
      textStyle: { 
        color: '#4B5563', 
        fontSize: 13,
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: '500'
      },
    },
    grid: {
      left: '8%',
      right: '8%',
      bottom: '12%',
      top: '25%',
      containLabel: true,
      backgroundColor: 'rgba(249, 250, 251, 0.3)',
      borderRadius: 8
    },
    xAxis: {
      type: 'value',
      name: 'Timeline',
      nameLocation: 'middle',
      nameGap: 35,
      nameTextStyle: {
        color: '#6B7280',
        fontSize: 12,
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: '500'
      },
      axisLabel: {
        color: '#6B7280',
        fontSize: 11,
        fontFamily: 'Inter, system-ui, sans-serif',
        formatter: function(value: number) {
          const minutes = Math.floor(value / 60);
          const seconds = Math.floor(value % 60);
          return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
      },
      axisLine: {
        lineStyle: {
          color: '#E5E7EB',
          width: 1
        }
      },
      axisTick: {
        lineStyle: {
          color: '#E5E7EB'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: '#F3F4F6',
          width: 1
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        name: 'Reaction Confidence',
        nameLocation: 'middle',
        nameGap: 55,
        nameTextStyle: {
          color: '#6B7280',
          fontSize: 12,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '500'
        },
        min: 0,
        max: 1,
        axisLabel: {
          color: '#6B7280',
          fontSize: 11,
          fontFamily: 'Inter, system-ui, sans-serif',
          formatter: function(value: number) {
            return `${(value * 100).toFixed(0)}%`;
          }
        },
        axisLine: {
          lineStyle: {
            color: '#E5E7EB',
            width: 1
          }
        },
        axisTick: {
          lineStyle: {
            color: '#E5E7EB'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: '#F9FAFB',
            width: 1
          }
        }
      },
      {
        type: 'value',
        name: 'Audio Level (dB)',
        nameLocation: 'middle',
        nameGap: 55,
        position: 'right',
        nameTextStyle: {
          color: '#6B7280',
          fontSize: 12,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '500'
        },
        axisLabel: {
          color: '#6B7280',
          fontSize: 11,
          fontFamily: 'Inter, system-ui, sans-serif',
          formatter: function(value: number) {
            return `${value.toFixed(0)} dB`;
          }
        },
        axisLine: {
          lineStyle: {
            color: '#E5E7EB',
            width: 1
          }
        },
        axisTick: {
          lineStyle: {
            color: '#E5E7EB'
          }
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: 'Laughter',
        type: 'scatter',
        yAxisIndex: 0,
        data: laughterData,
        symbol: 'path://M12,2A10,10,0,0,0,2,12A10,10,0,0,0,12,22A10,10,0,0,0,22,12A10,10,0,0,0,12,2Z',
        symbolSize: 25, // Fixed size for all symbols
        label: {
          show: true,
          formatter: '😄',
          fontSize: 14, // Fixed emoji size
          color: '#FFFFFF',
          fontWeight: 'bold',
          position: 'inside'
        },
        itemStyle: {
          color: '#F59E0B',
          opacity: 0.9,
          borderColor: '#FFFFFF',
          borderWidth: 2,
          shadowColor: 'rgba(245, 158, 11, 0.4)',
          shadowBlur: 6
        },
        emphasis: {
          itemStyle: {
            color: '#D97706',
            opacity: 1,
            borderColor: '#FFFFFF',
            borderWidth: 2,
            shadowColor: 'rgba(245, 158, 11, 0.6)',
            shadowBlur: 10,
            scale: 1.3
          }
        }
      },
      {
        name: 'Applause',
        type: 'scatter',
        yAxisIndex: 0,
        data: applauseData,
        symbol: 'path://M12,2A10,10,0,0,0,2,12A10,10,0,0,0,12,22A10,10,0,0,0,22,12A10,10,0,0,0,12,2Z',
        symbolSize: 25, // Fixed size for all symbols
        label: {
          show: true,
          formatter: '👏',
          fontSize: 14, // Fixed emoji size
          color: '#FFFFFF',
          fontWeight: 'bold',
          position: 'inside'
        },
        itemStyle: {
          color: '#10B981',
          opacity: 0.9,
          borderColor: '#FFFFFF',
          borderWidth: 2,
          shadowColor: 'rgba(16, 185, 129, 0.4)',
          shadowBlur: 6
        },
        emphasis: {
          itemStyle: {
            color: '#059669',
            opacity: 1,
            borderColor: '#FFFFFF',
            borderWidth: 2,
            shadowColor: 'rgba(16, 185, 129, 0.6)',
            shadowBlur: 10,
            scale: 1.3
          }
        }
      },
      {
        name: 'Audio Level',
        type: 'line',
        yAxisIndex: 1,
        data: processedAudioData.map(item => [item.time, item.db]),
        smooth: true,
        smoothMonotone: 'x',
        lineStyle: {
          color: '#8B5CF6',
          width: 3,
          shadowColor: 'rgba(139, 92, 246, 0.3)',
          shadowBlur: 6,
          shadowOffsetY: 2
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(139, 92, 246, 0.2)' },
              { offset: 1, color: 'rgba(139, 92, 246, 0.05)' }
            ]
          }
        },
        itemStyle: {
          color: '#8B5CF6'
        },
        symbol: 'none',
        emphasis: {
          lineStyle: {
            width: 4,
            shadowBlur: 10
          }
        }
      }
    ],
    animation: true,
    animationDuration: 1200,
    animationEasing: 'cubicOut',
    animationDelay: function (idx: number) {
      return idx * 50;
    },
    backgroundColor: '#FFFFFF'
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <ReactECharts 
        option={option} 
        style={{ width, height }}
        opts={{ renderer: 'canvas', devicePixelRatio: 2 }}
      />
      <div className="px-6 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>Laughter Detection</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span>Applause Detection</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 rounded bg-purple-500"></div>
            <span>Audio Level</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center mt-3">
          Reactions grouped by 5-second intervals • Bubble size shows confidence + reaction count • Hover for details
        </p>
      </div>
    </div>
  );
};

export default ConferenceReactionsChart;