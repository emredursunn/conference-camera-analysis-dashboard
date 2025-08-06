import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';

// Ses şiddeti verisi (decibel)
const audioLevelData = [
  {
    "start_time": 0.0,
    "end_time": 5.0,
    "average_db": -28.45
  },
  {
    "start_time": 5.0,
    "end_time": 10.0,
    "average_db": -51.5
  },
  {
    "start_time": 10.0,
    "end_time": 15.0,
    "average_db": -51.66
  },
  {
    "start_time": 15.0,
    "end_time": 20.0,
    "average_db": -51.41
  },
  {
    "start_time": 20.0,
    "end_time": 25.0,
    "average_db": -47.67
  },
  {
    "start_time": 25.0,
    "end_time": 30.0,
    "average_db": -6.08
  },
  {
    "start_time": 30.0,
    "end_time": 35.0,
    "average_db": -10.42
  },
  {
    "start_time": 35.0,
    "end_time": 40.0,
    "average_db": -49.19
  },
  {
    "start_time": 40.0,
    "end_time": 45.0,
    "average_db": -50.02
  },
  {
    "start_time": 45.0,
    "end_time": 50.0,
    "average_db": -52.02
  },
  {
    "start_time": 50.0,
    "end_time": 55.0,
    "average_db": -29.77
  },
  {
    "start_time": 55.0,
    "end_time": 60.0,
    "average_db": -8.81
  },
  {
    "start_time": 60.0,
    "end_time": 65.0,
    "average_db": -31.13
  },
  {
    "start_time": 65.0,
    "end_time": 70.0,
    "average_db": -10.13
  },
  {
    "start_time": 70.0,
    "end_time": 75.0,
    "average_db": -48.6
  },
  {
    "start_time": 75.0,
    "end_time": 80.0,
    "average_db": -50.08
  },
  {
    "start_time": 80.0,
    "end_time": 85.0,
    "average_db": -34.84
  },
  {
    "start_time": 85.0,
    "end_time": 90.0,
    "average_db": -5.8
  },
  {
    "start_time": 90.0,
    "end_time": 95.0,
    "average_db": -30.28
  },
  {
    "start_time": 95.0,
    "end_time": 100.0,
    "average_db": -49.38
  },
  {
    "start_time": 100.0,
    "end_time": 105.0,
    "average_db": -10.2
  },
  {
    "start_time": 105.0,
    "end_time": 110.0,
    "average_db": -26.33
  },
  {
    "start_time": 110.0,
    "end_time": 115.0,
    "average_db": -45.04
  },
  {
    "start_time": 115.0,
    "end_time": 120.0,
    "average_db": -51.21
  },
  {
    "start_time": 120.0,
    "end_time": 125.0,
    "average_db": -52.35
  },
  {
    "start_time": 125.0,
    "end_time": 130.0,
    "average_db": -50.94
  },
  {
    "start_time": 130.0,
    "end_time": 135.0,
    "average_db": -6.85
  },
  {
    "start_time": 135.0,
    "end_time": 140.0,
    "average_db": -12.06
  },
  {
    "start_time": 140.0,
    "end_time": 145.0,
    "average_db": -50.21
  },
  {
    "start_time": 145.0,
    "end_time": 150.0,
    "average_db": -36.81
  },
  {
    "start_time": 150.0,
    "end_time": 155.0,
    "average_db": -43.05
  },
  {
    "start_time": 155.0,
    "end_time": 160.0,
    "average_db": -43.27
  },
  {
    "start_time": 160.0,
    "end_time": 165.0,
    "average_db": -51.46
  },
  {
    "start_time": 165.0,
    "end_time": 170.0,
    "average_db": -51.49
  },
  {
    "start_time": 170.0,
    "end_time": 175.0,
    "average_db": -50.65
  },
  {
    "start_time": 175.0,
    "end_time": 180.0,
    "average_db": -51.46
  },
  {
    "start_time": 180.0,
    "end_time": 185.0,
    "average_db": -53.15
  },
  {
    "start_time": 185.0,
    "end_time": 190.0,
    "average_db": -52.47
  },
  {
    "start_time": 190.0,
    "end_time": 195.0,
    "average_db": -51.04
  },
  {
    "start_time": 195.0,
    "end_time": 200.0,
    "average_db": -52.13
  },
  {
    "start_time": 200.0,
    "end_time": 205.0,
    "average_db": -51.55
  },
  {
    "start_time": 205.0,
    "end_time": 210.0,
    "average_db": -52.9
  },
  {
    "start_time": 210.0,
    "end_time": 215.0,
    "average_db": -50.9
  },
  {
    "start_time": 215.0,
    "end_time": 220.0,
    "average_db": -51.25
  },
  {
    "start_time": 220.0,
    "end_time": 225.0,
    "average_db": -34.53
  },
  {
    "start_time": 225.0,
    "end_time": 230.0,
    "average_db": -6.28
  },
  {
    "start_time": 230.0,
    "end_time": 235.0,
    "average_db": -44.81
  },
  {
    "start_time": 235.0,
    "end_time": 240.0,
    "average_db": -51.05
  },
  {
    "start_time": 240.0,
    "end_time": 245.0,
    "average_db": -52.31
  },
  {
    "start_time": 245.0,
    "end_time": 250.0,
    "average_db": -46.62
  },
  {
    "start_time": 250.0,
    "end_time": 255.0,
    "average_db": -50.62
  },
  {
    "start_time": 255.0,
    "end_time": 260.0,
    "average_db": -52.81
  },
  {
    "start_time": 260.0,
    "end_time": 265.0,
    "average_db": -48.96
  },
  {
    "start_time": 265.0,
    "end_time": 270.0,
    "average_db": -15.88
  },
  {
    "start_time": 270.0,
    "end_time": 275.0,
    "average_db": -22.8
  },
  {
    "start_time": 275.0,
    "end_time": 280.0,
    "average_db": -49.83
  },
  {
    "start_time": 280.0,
    "end_time": 285.0,
    "average_db": -45.07
  },
  {
    "start_time": 285.0,
    "end_time": 290.0,
    "average_db": -26.9
  },
  {
    "start_time": 290.0,
    "end_time": 295.0,
    "average_db": -34.06
  },
  {
    "start_time": 295.0,
    "end_time": 300.0,
    "average_db": -5.84
  },
  {
    "start_time": 300.0,
    "end_time": 305.0,
    "average_db": -35.61
  },
  {
    "start_time": 305.0,
    "end_time": 310.0,
    "average_db": -51.53
  },
  {
    "start_time": 310.0,
    "end_time": 315.0,
    "average_db": -54.03
  },
  {
    "start_time": 315.0,
    "end_time": 320.0,
    "average_db": -51.1
  },
  {
    "start_time": 320.0,
    "end_time": 325.0,
    "average_db": -49.14
  },
  {
    "start_time": 325.0,
    "end_time": 330.0,
    "average_db": -52.15
  },
  {
    "start_time": 330.0,
    "end_time": 335.0,
    "average_db": -51.88
  },
  {
    "start_time": 335.0,
    "end_time": 340.0,
    "average_db": -51.99
  },
  {
    "start_time": 340.0,
    "end_time": 345.0,
    "average_db": -51.98
  },
  {
    "start_time": 345.0,
    "end_time": 350.0,
    "average_db": -52.76
  },
  {
    "start_time": 350.0,
    "end_time": 355.0,
    "average_db": -53.38
  },
  {
    "start_time": 355.0,
    "end_time": 360.0,
    "average_db": -51.07
  },
  {
    "start_time": 360.0,
    "end_time": 365.0,
    "average_db": -47.83
  },
  {
    "start_time": 365.0,
    "end_time": 370.0,
    "average_db": -50.6
  },
  {
    "start_time": 370.0,
    "end_time": 375.0,
    "average_db": -52.32
  },
  {
    "start_time": 375.0,
    "end_time": 380.0,
    "average_db": -52.1
  },
  {
    "start_time": 380.0,
    "end_time": 385.0,
    "average_db": -51.48
  },
  {
    "start_time": 385.0,
    "end_time": 390.0,
    "average_db": -34.0
  },
  {
    "start_time": 390.0,
    "end_time": 395.0,
    "average_db": -7.89
  },
  {
    "start_time": 395.0,
    "end_time": 400.0,
    "average_db": -43.31
  },
  {
    "start_time": 400.0,
    "end_time": 405.0,
    "average_db": -52.24
  },
  {
    "start_time": 405.0,
    "end_time": 410.0,
    "average_db": -47.8
  },
  {
    "start_time": 410.0,
    "end_time": 415.0,
    "average_db": -40.74
  },
  {
    "start_time": 415.0,
    "end_time": 420.0,
    "average_db": -9.84
  },
  {
    "start_time": 420.0,
    "end_time": 425.0,
    "average_db": -41.38
  },
  {
    "start_time": 425.0,
    "end_time": 430.0,
    "average_db": -51.59
  },
  {
    "start_time": 430.0,
    "end_time": 435.0,
    "average_db": -44.46
  },
  {
    "start_time": 435.0,
    "end_time": 440.0,
    "average_db": -33.99
  },
  {
    "start_time": 440.0,
    "end_time": 445.0,
    "average_db": -7.91
  },
  {
    "start_time": 445.0,
    "end_time": 450.0,
    "average_db": -37.86
  },
  {
    "start_time": 450.0,
    "end_time": 455.0,
    "average_db": -53.26
  },
  {
    "start_time": 455.0,
    "end_time": 460.0,
    "average_db": -53.36
  },
  {
    "start_time": 460.0,
    "end_time": 465.0,
    "average_db": -32.61
  },
  {
    "start_time": 465.0,
    "end_time": 470.0,
    "average_db": -22.3
  },
  {
    "start_time": 470.0,
    "end_time": 475.0,
    "average_db": -50.28
  },
  {
    "start_time": 475.0,
    "end_time": 480.0,
    "average_db": -52.21
  },
  {
    "start_time": 480.0,
    "end_time": 485.0,
    "average_db": -49.69
  },
  {
    "start_time": 485.0,
    "end_time": 490.0,
    "average_db": -32.31
  },
  {
    "start_time": 490.0,
    "end_time": 495.0,
    "average_db": -6.94
  },
  {
    "start_time": 495.0,
    "end_time": 500.0,
    "average_db": -37.58
  },
  {
    "start_time": 500.0,
    "end_time": 505.0,
    "average_db": -49.85
  },
  {
    "start_time": 505.0,
    "end_time": 510.0,
    "average_db": -46.04
  },
  {
    "start_time": 510.0,
    "end_time": 515.0,
    "average_db": -51.71
  },
  {
    "start_time": 515.0,
    "end_time": 520.0,
    "average_db": -52.25
  },
  {
    "start_time": 520.0,
    "end_time": 525.0,
    "average_db": -43.48
  },
  {
    "start_time": 525.0,
    "end_time": 530.0,
    "average_db": -17.35
  },
  {
    "start_time": 530.0,
    "end_time": 535.0,
    "average_db": -52.14
  },
  {
    "start_time": 535.0,
    "end_time": 540.0,
    "average_db": -65.47
  },
  {
    "start_time": 540.0,
    "end_time": 545.0,
    "average_db": -28.45
  },
  {
    "start_time": 545.0,
    "end_time": 550.0,
    "average_db": -51.5
  },
  {
    "start_time": 550.0,
    "end_time": 555.0,
    "average_db": -51.66
  },
  {
    "start_time": 555.0,
    "end_time": 560.0,
    "average_db": -51.41
  },
  {
    "start_time": 560.0,
    "end_time": 565.0,
    "average_db": -47.67
  },
  {
    "start_time": 565.0,
    "end_time": 570.0,
    "average_db": -6.08
  },
  {
    "start_time": 570.0,
    "end_time": 575.0,
    "average_db": -10.42
  },
  {
    "start_time": 575.0,
    "end_time": 580.0,
    "average_db": -49.19
  },
  {
    "start_time": 580.0,
    "end_time": 585.0,
    "average_db": -50.02
  },
  {
    "start_time": 585.0,
    "end_time": 590.0,
    "average_db": -52.02
  },
  {
    "start_time": 590.0,
    "end_time": 595.0,
    "average_db": -29.77
  },
  {
    "start_time": 595.0,
    "end_time": 600.0,
    "average_db": -8.81
  },
  {
    "start_time": 600.0,
    "end_time": 605.0,
    "average_db": -31.13
  },
  {
    "start_time": 605.0,
    "end_time": 610.0,
    "average_db": -10.13
  },
  {
    "start_time": 610.0,
    "end_time": 615.0,
    "average_db": -48.6
  },
  {
    "start_time": 615.0,
    "end_time": 620.0,
    "average_db": -50.08
  },
  {
    "start_time": 620.0,
    "end_time": 625.0,
    "average_db": -34.84
  },
  {
    "start_time": 625.0,
    "end_time": 630.0,
    "average_db": -5.8
  },
  {
    "start_time": 630.0,
    "end_time": 635.0,
    "average_db": -30.28
  },
  {
    "start_time": 635.0,
    "end_time": 640.0,
    "average_db": -49.38
  },
  {
    "start_time": 640.0,
    "end_time": 645.0,
    "average_db": -10.2
  },
  {
    "start_time": 645.0,
    "end_time": 650.0,
    "average_db": -26.33
  },
  {
    "start_time": 650.0,
    "end_time": 655.0,
    "average_db": -45.04
  },
  {
    "start_time": 655.0,
    "end_time": 660.0,
    "average_db": -51.21
  },
  {
    "start_time": 660.0,
    "end_time": 665.0,
    "average_db": -52.35
  },
  {
    "start_time": 665.0,
    "end_time": 670.0,
    "average_db": -50.94
  },
  {
    "start_time": 670.0,
    "end_time": 675.0,
    "average_db": -6.85
  },
  {
    "start_time": 675.0,
    "end_time": 680.0,
    "average_db": -12.06
  },
  {
    "start_time": 680.0,
    "end_time": 685.0,
    "average_db": -50.21
  },
  {
    "start_time": 685.0,
    "end_time": 690.0,
    "average_db": -36.81
  },
  {
    "start_time": 690.0,
    "end_time": 695.0,
    "average_db": -43.05
  },
  {
    "start_time": 695.0,
    "end_time": 700.0,
    "average_db": -43.27
  },
  {
    "start_time": 700.0,
    "end_time": 705.0,
    "average_db": -51.46
  },
  {
    "start_time": 705.0,
    "end_time": 710.0,
    "average_db": -51.49
  },
  {
    "start_time": 710.0,
    "end_time": 715.0,
    "average_db": -50.65
  },
  {
    "start_time": 715.0,
    "end_time": 720.0,
    "average_db": -51.46
  },
  {
    "start_time": 720.0,
    "end_time": 725.0,
    "average_db": -53.15
  },
  {
    "start_time": 725.0,
    "end_time": 730.0,
    "average_db": -52.47
  },
  {
    "start_time": 730.0,
    "end_time": 735.0,
    "average_db": -51.04
  },
  {
    "start_time": 735.0,
    "end_time": 740.0,
    "average_db": -52.13
  },
  {
    "start_time": 740.0,
    "end_time": 745.0,
    "average_db": -51.55
  },
  {
    "start_time": 745.0,
    "end_time": 750.0,
    "average_db": -52.9
  },
  {
    "start_time": 750.0,
    "end_time": 755.0,
    "average_db": -50.9
  },
  {
    "start_time": 755.0,
    "end_time": 760.0,
    "average_db": -51.25
  },
  {
    "start_time": 760.0,
    "end_time": 765.0,
    "average_db": -34.53
  },
  {
    "start_time": 765.0,
    "end_time": 770.0,
    "average_db": -6.28
  },
  {
    "start_time": 770.0,
    "end_time": 775.0,
    "average_db": -44.81
  },
  {
    "start_time": 775.0,
    "end_time": 780.0,
    "average_db": -51.05
  },
  {
    "start_time": 780.0,
    "end_time": 785.0,
    "average_db": -52.31
  },
  {
    "start_time": 785.0,
    "end_time": 790.0,
    "average_db": -46.62
  },
  {
    "start_time": 790.0,
    "end_time": 795.0,
    "average_db": -50.62
  },
  {
    "start_time": 795.0,
    "end_time": 800.0,
    "average_db": -52.81
  },
  {
    "start_time": 800.0,
    "end_time": 805.0,
    "average_db": -48.96
  },
  {
    "start_time": 805.0,
    "end_time": 810.0,
    "average_db": -15.88
  },
  {
    "start_time": 810.0,
    "end_time": 815.0,
    "average_db": -22.8
  },
  {
    "start_time": 815.0,
    "end_time": 820.0,
    "average_db": -49.83
  },
  {
    "start_time": 820.0,
    "end_time": 825.0,
    "average_db": -45.07
  },
  {
    "start_time": 825.0,
    "end_time": 830.0,
    "average_db": -26.9
  },
  {
    "start_time": 830.0,
    "end_time": 835.0,
    "average_db": -34.06
  },
  {
    "start_time": 835.0,
    "end_time": 840.0,
    "average_db": -5.84
  },
  {
    "start_time": 840.0,
    "end_time": 845.0,
    "average_db": -35.61
  },
  {
    "start_time": 845.0,
    "end_time": 850.0,
    "average_db": -51.53
  },
  {
    "start_time": 850.0,
    "end_time": 855.0,
    "average_db": -54.03
  },
  {
    "start_time": 855.0,
    "end_time": 860.0,
    "average_db": -51.1
  },
  {
    "start_time": 860.0,
    "end_time": 865.0,
    "average_db": -49.14
  },
  {
    "start_time": 865.0,
    "end_time": 870.0,
    "average_db": -52.15
  },
  {
    "start_time": 870.0,
    "end_time": 875.0,
    "average_db": -51.88
  },
  {
    "start_time": 875.0,
    "end_time": 880.0,
    "average_db": -51.99
  },
  {
    "start_time": 880.0,
    "end_time": 885.0,
    "average_db": -51.98
  },
  {
    "start_time": 885.0,
    "end_time": 890.0,
    "average_db": -52.76
  },
  {
    "start_time": 890.0,
    "end_time": 895.0,
    "average_db": -53.38
  },
  {
    "start_time": 895.0,
    "end_time": 900.0,
    "average_db": -51.07
  },
  {
    "start_time": 900.0,
    "end_time": 905.0,
    "average_db": -47.83
  },
  {
    "start_time": 905.0,
    "end_time": 910.0,
    "average_db": -50.6
  },
  {
    "start_time": 910.0,
    "end_time": 915.0,
    "average_db": -52.32
  },
  {
    "start_time": 915.0,
    "end_time": 920.0,
    "average_db": -52.1
  },
  {
    "start_time": 920.0,
    "end_time": 925.0,
    "average_db": -51.48
  },
  {
    "start_time": 925.0,
    "end_time": 930.0,
    "average_db": -34.0
  },
  {
    "start_time": 930.0,
    "end_time": 935.0,
    "average_db": -7.89
  },
  {
    "start_time": 935.0,
    "end_time": 940.0,
    "average_db": -43.31
  },
  {
    "start_time": 940.0,
    "end_time": 945.0,
    "average_db": -52.24
  },
  {
    "start_time": 945.0,
    "end_time": 950.0,
    "average_db": -47.8
  },
  {
    "start_time": 950.0,
    "end_time": 955.0,
    "average_db": -40.74
  },
  {
    "start_time": 955.0,
    "end_time": 960.0,
    "average_db": -9.84
  },
  {
    "start_time": 960.0,
    "end_time": 965.0,
    "average_db": -41.38
  },
  {
    "start_time": 965.0,
    "end_time": 970.0,
    "average_db": -51.59
  },
  {
    "start_time": 970.0,
    "end_time": 975.0,
    "average_db": -44.46
  },
  {
    "start_time": 975.0,
    "end_time": 980.0,
    "average_db": -33.99
  },
  {
    "start_time": 980.0,
    "end_time": 985.0,
    "average_db": -7.91
  },
  {
    "start_time": 985.0,
    "end_time": 990.0,
    "average_db": -37.86
  },
  {
    "start_time": 990.0,
    "end_time": 995.0,
    "average_db": -53.26
  },
  {
    "start_time": 995.0,
    "end_time": 1000.0,
    "average_db": -53.36
  },
  {
    "start_time": 1000.0,
    "end_time": 1005.0,
    "average_db": -32.61
  },
  {
    "start_time": 1005.0,
    "end_time": 1010.0,
    "average_db": -22.3
  },
  {
    "start_time": 1010.0,
    "end_time": 1015.0,
    "average_db": -50.28
  },
  {
    "start_time": 1015.0,
    "end_time": 1020.0,
    "average_db": -52.21
  },
  {
    "start_time": 1020.0,
    "end_time": 1025.0,
    "average_db": -49.69
  },
  {
    "start_time": 1025.0,
    "end_time": 1030.0,
    "average_db": -32.31
  },
  {
    "start_time": 1030.0,
    "end_time": 1035.0,
    "average_db": -6.94
  },
  {
    "start_time": 1035.0,
    "end_time": 1040.0,
    "average_db": -37.58
  },
  {
    "start_time": 1040.0,
    "end_time": 1045.0,
    "average_db": -49.85
  },
  {
    "start_time": 1045.0,
    "end_time": 1050.0,
    "average_db": -46.04
  },
  {
    "start_time": 1050.0,
    "end_time": 1055.0,
    "average_db": -51.71
  },
  {
    "start_time": 1055.0,
    "end_time": 1060.0,
    "average_db": -52.25
  },
  {
    "start_time": 1060.0,
    "end_time": 1065.0,
    "average_db": -43.48
  },
  {
    "start_time": 1065.0,
    "end_time": 1070.0,
    "average_db": -17.35
  },
  {
    "start_time": 1070.0,
    "end_time": 1075.0,
    "average_db": -52.14
  },
  {
    "start_time": 1075.0,
    "end_time": 1080.0,
    "average_db": -65.47
  },
  {
    "start_time": 1080.0,
    "end_time": 1085.0,
    "average_db": -28.45
  },
  {
    "start_time": 1085.0,
    "end_time": 1090.0,
    "average_db": -51.5
  },
  {
    "start_time": 1090.0,
    "end_time": 1095.0,
    "average_db": -51.66
  },
  {
    "start_time": 1095.0,
    "end_time": 1100.0,
    "average_db": -51.41
  },
  {
    "start_time": 1100.0,
    "end_time": 1105.0,
    "average_db": -47.67
  },
  {
    "start_time": 1105.0,
    "end_time": 1110.0,
    "average_db": -6.08
  },
  {
    "start_time": 1110.0,
    "end_time": 1115.0,
    "average_db": -10.42
  },
  {
    "start_time": 1115.0,
    "end_time": 1120.0,
    "average_db": -49.19
  },
  {
    "start_time": 1120.0,
    "end_time": 1125.0,
    "average_db": -50.02
  },
  {
    "start_time": 1125.0,
    "end_time": 1130.0,
    "average_db": -52.02
  },
  {
    "start_time": 1130.0,
    "end_time": 1135.0,
    "average_db": -29.77
  },
  {
    "start_time": 1135.0,
    "end_time": 1140.0,
    "average_db": -8.81
  },
  {
    "start_time": 1140.0,
    "end_time": 1145.0,
    "average_db": -31.13
  },
  {
    "start_time": 1145.0,
    "end_time": 1150.0,
    "average_db": -10.13
  },
  {
    "start_time": 1150.0,
    "end_time": 1155.0,
    "average_db": -48.6
  },
  {
    "start_time": 1155.0,
    "end_time": 1160.0,
    "average_db": -50.08
  },
  {
    "start_time": 1160.0,
    "end_time": 1165.0,
    "average_db": -34.84
  },
  {
    "start_time": 1165.0,
    "end_time": 1170.0,
    "average_db": -5.8
  },
  {
    "start_time": 1170.0,
    "end_time": 1175.0,
    "average_db": -30.28
  },
  {
    "start_time": 1175.0,
    "end_time": 1180.0,
    "average_db": -49.38
  },
  {
    "start_time": 1180.0,
    "end_time": 1185.0,
    "average_db": -10.2
  },
  {
    "start_time": 1185.0,
    "end_time": 1190.0,
    "average_db": -26.33
  },
  {
    "start_time": 1190.0,
    "end_time": 1195.0,
    "average_db": -45.04
  },
  {
    "start_time": 1195.0,
    "end_time": 1200.0,
    "average_db": -51.21
  },
  {
    "start_time": 1200.0,
    "end_time": 1205.0,
    "average_db": -52.35
  },
  {
    "start_time": 1205.0,
    "end_time": 1210.0,
    "average_db": -50.94
  },
  {
    "start_time": 1210.0,
    "end_time": 1215.0,
    "average_db": -6.85
  },
  {
    "start_time": 1215.0,
    "end_time": 1220.0,
    "average_db": -12.06
  },
  {
    "start_time": 1220.0,
    "end_time": 1225.0,
    "average_db": -50.21
  },
  {
    "start_time": 1225.0,
    "end_time": 1230.0,
    "average_db": -36.81
  },
  {
    "start_time": 1230.0,
    "end_time": 1235.0,
    "average_db": -43.05
  },
  {
    "start_time": 1235.0,
    "end_time": 1240.0,
    "average_db": -43.27
  },
  {
    "start_time": 1240.0,
    "end_time": 1245.0,
    "average_db": -51.46
  },
  {
    "start_time": 1245.0,
    "end_time": 1250.0,
    "average_db": -51.49
  },
  {
    "start_time": 1250.0,
    "end_time": 1255.0,
    "average_db": -50.65
  },
  {
    "start_time": 1255.0,
    "end_time": 1260.0,
    "average_db": -51.46
  },
  {
    "start_time": 1260.0,
    "end_time": 1265.0,
    "average_db": -53.15
  },
  {
    "start_time": 1265.0,
    "end_time": 1270.0,
    "average_db": -52.47
  },
  {
    "start_time": 1270.0,
    "end_time": 1275.0,
    "average_db": -51.04
  },
  {
    "start_time": 1275.0,
    "end_time": 1280.0,
    "average_db": -52.13
  },
  {
    "start_time": 1280.0,
    "end_time": 1285.0,
    "average_db": -51.55
  },
  {
    "start_time": 1285.0,
    "end_time": 1290.0,
    "average_db": -52.9
  },
  {
    "start_time": 1290.0,
    "end_time": 1295.0,
    "average_db": -50.9
  },
  {
    "start_time": 1295.0,
    "end_time": 1300.0,
    "average_db": -51.25
  },
  {
    "start_time": 1300.0,
    "end_time": 1305.0,
    "average_db": -34.53
  },
  {
    "start_time": 1305.0,
    "end_time": 1310.0,
    "average_db": -6.28
  },
  {
    "start_time": 1310.0,
    "end_time": 1315.0,
    "average_db": -44.81
  },
  {
    "start_time": 1315.0,
    "end_time": 1320.0,
    "average_db": -51.05
  },
  {
    "start_time": 1320.0,
    "end_time": 1325.0,
    "average_db": -52.31
  },
  {
    "start_time": 1325.0,
    "end_time": 1330.0,
    "average_db": -46.62
  },
  {
    "start_time": 1330.0,
    "end_time": 1335.0,
    "average_db": -50.62
  },
  {
    "start_time": 1335.0,
    "end_time": 1340.0,
    "average_db": -52.81
  },
  {
    "start_time": 1340.0,
    "end_time": 1345.0,
    "average_db": -48.96
  },
  {
    "start_time": 1345.0,
    "end_time": 1350.0,
    "average_db": -15.88
  },
  {
    "start_time": 1350.0,
    "end_time": 1355.0,
    "average_db": -22.8
  },
  {
    "start_time": 1355.0,
    "end_time": 1360.0,
    "average_db": -49.83
  },
  {
    "start_time": 1360.0,
    "end_time": 1365.0,
    "average_db": -45.07
  },
  {
    "start_time": 1365.0,
    "end_time": 1370.0,
    "average_db": -26.9
  },
  {
    "start_time": 1370.0,
    "end_time": 1375.0,
    "average_db": -34.06
  },
  {
    "start_time": 1375.0,
    "end_time": 1380.0,
    "average_db": -5.84
  },
  {
    "start_time": 1380.0,
    "end_time": 1385.0,
    "average_db": -35.61
  },
  {
    "start_time": 1385.0,
    "end_time": 1390.0,
    "average_db": -51.53
  },
  {
    "start_time": 1390.0,
    "end_time": 1395.0,
    "average_db": -54.03
  },
  {
    "start_time": 1395.0,
    "end_time": 1400.0,
    "average_db": -51.1
  },
  {
    "start_time": 1400.0,
    "end_time": 1405.0,
    "average_db": -49.14
  },
  {
    "start_time": 1405.0,
    "end_time": 1410.0,
    "average_db": -52.15
  },
  {
    "start_time": 1410.0,
    "end_time": 1415.0,
    "average_db": -51.88
  },
  {
    "start_time": 1415.0,
    "end_time": 1420.0,
    "average_db": -51.99
  },
  {
    "start_time": 1420.0,
    "end_time": 1425.0,
    "average_db": -51.98
  },
  {
    "start_time": 1425.0,
    "end_time": 1430.0,
    "average_db": -52.76
  },
  {
    "start_time": 1430.0,
    "end_time": 1435.0,
    "average_db": -53.38
  },
  {
    "start_time": 1435.0,
    "end_time": 1440.0,
    "average_db": -51.07
  },
  {
    "start_time": 1440.0,
    "end_time": 1445.0,
    "average_db": -47.83
  },
  {
    "start_time": 1445.0,
    "end_time": 1450.0,
    "average_db": -50.6
  },
  {
    "start_time": 1450.0,
    "end_time": 1455.0,
    "average_db": -52.32
  },
  {
    "start_time": 1455.0,
    "end_time": 1460.0,
    "average_db": -52.1
  },
  {
    "start_time": 1460.0,
    "end_time": 1465.0,
    "average_db": -51.48
  },
  {
    "start_time": 1465.0,
    "end_time": 1470.0,
    "average_db": -34.0
  },
  {
    "start_time": 1470.0,
    "end_time": 1475.0,
    "average_db": -7.89
  },
  {
    "start_time": 1475.0,
    "end_time": 1480.0,
    "average_db": -43.31
  },
  {
    "start_time": 1480.0,
    "end_time": 1485.0,
    "average_db": -52.24
  },
  {
    "start_time": 1485.0,
    "end_time": 1490.0,
    "average_db": -47.8
  },
  {
    "start_time": 1490.0,
    "end_time": 1495.0,
    "average_db": -40.74
  },
  {
    "start_time": 1495.0,
    "end_time": 1500.0,
    "average_db": -9.84
  },
  {
    "start_time": 1500.0,
    "end_time": 1505.0,
    "average_db": -41.38
  },
  {
    "start_time": 1505.0,
    "end_time": 1510.0,
    "average_db": -51.59
  },
  {
    "start_time": 1510.0,
    "end_time": 1515.0,
    "average_db": -44.46
  },
  {
    "start_time": 1515.0,
    "end_time": 1520.0,
    "average_db": -33.99
  },
  {
    "start_time": 1520.0,
    "end_time": 1525.0,
    "average_db": -7.91
  },
  {
    "start_time": 1525.0,
    "end_time": 1530.0,
    "average_db": -37.86
  },
  {
    "start_time": 1530.0,
    "end_time": 1535.0,
    "average_db": -53.26
  },
  {
    "start_time": 1535.0,
    "end_time": 1540.0,
    "average_db": -53.36
  },
  {
    "start_time": 1540.0,
    "end_time": 1545.0,
    "average_db": -32.61
  },
  {
    "start_time": 1545.0,
    "end_time": 1550.0,
    "average_db": -22.3
  },
  {
    "start_time": 1550.0,
    "end_time": 1555.0,
    "average_db": -50.28
  },
  {
    "start_time": 1555.0,
    "end_time": 1560.0,
    "average_db": -52.21
  },
  {
    "start_time": 1560.0,
    "end_time": 1565.0,
    "average_db": -49.69
  },
  {
    "start_time": 1565.0,
    "end_time": 1570.0,
    "average_db": -32.31
  },
  {
    "start_time": 1570.0,
    "end_time": 1575.0,
    "average_db": -6.94
  },
  {
    "start_time": 1575.0,
    "end_time": 1580.0,
    "average_db": -37.58
  },
  {
    "start_time": 1580.0,
    "end_time": 1585.0,
    "average_db": -49.85
  },
  {
    "start_time": 1585.0,
    "end_time": 1590.0,
    "average_db": -46.04
  },
  {
    "start_time": 1590.0,
    "end_time": 1595.0,
    "average_db": -51.71
  },
  {
    "start_time": 1595.0,
    "end_time": 1600.0,
    "average_db": -52.25
  },
  {
    "start_time": 1600.0,
    "end_time": 1605.0,
    "average_db": -43.48
  },
  {
    "start_time": 1605.0,
    "end_time": 1610.0,
    "average_db": -17.35
  },
  {
    "start_time": 1610.0,
    "end_time": 1615.0,
    "average_db": -52.14
  },
  {
    "start_time": 1615.0,
    "end_time": 1620.0,
    "average_db": -65.47
  },
  {
    "start_time": 1620.0,
    "end_time": 1625.0,
    "average_db": -28.45
  },
  {
    "start_time": 1625.0,
    "end_time": 1630.0,
    "average_db": -51.5
  },
  {
    "start_time": 1630.0,
    "end_time": 1635.0,
    "average_db": -51.66
  },
  {
    "start_time": 1635.0,
    "end_time": 1640.0,
    "average_db": -51.41
  },
  {
    "start_time": 1640.0,
    "end_time": 1645.0,
    "average_db": -47.67
  },
  {
    "start_time": 1645.0,
    "end_time": 1650.0,
    "average_db": -6.08
  },
  {
    "start_time": 1650.0,
    "end_time": 1655.0,
    "average_db": -10.42
  },
  {
    "start_time": 1655.0,
    "end_time": 1660.0,
    "average_db": -49.19
  },
  {
    "start_time": 1660.0,
    "end_time": 1665.0,
    "average_db": -50.02
  },
  {
    "start_time": 1665.0,
    "end_time": 1670.0,
    "average_db": -52.02
  },
  {
    "start_time": 1670.0,
    "end_time": 1675.0,
    "average_db": -29.77
  },
  {
    "start_time": 1675.0,
    "end_time": 1680.0,
    "average_db": -8.81
  },
  {
    "start_time": 1680.0,
    "end_time": 1685.0,
    "average_db": -31.13
  },
  {
    "start_time": 1685.0,
    "end_time": 1690.0,
    "average_db": -10.13
  },
  {
    "start_time": 1690.0,
    "end_time": 1695.0,
    "average_db": -48.6
  },
  {
    "start_time": 1695.0,
    "end_time": 1700.0,
    "average_db": -50.08
  },
  {
    "start_time": 1700.0,
    "end_time": 1705.0,
    "average_db": -34.84
  },
  {
    "start_time": 1705.0,
    "end_time": 1710.0,
    "average_db": -5.8
  },
  {
    "start_time": 1710.0,
    "end_time": 1715.0,
    "average_db": -30.28
  },
  {
    "start_time": 1715.0,
    "end_time": 1720.0,
    "average_db": -49.38
  },
  {
    "start_time": 1720.0,
    "end_time": 1725.0,
    "average_db": -10.2
  },
  {
    "start_time": 1725.0,
    "end_time": 1730.0,
    "average_db": -26.33
  },
  {
    "start_time": 1730.0,
    "end_time": 1735.0,
    "average_db": -45.04
  },
  {
    "start_time": 1735.0,
    "end_time": 1740.0,
    "average_db": -51.21
  },
  {
    "start_time": 1740.0,
    "end_time": 1745.0,
    "average_db": -52.35
  },
  {
    "start_time": 1745.0,
    "end_time": 1750.0,
    "average_db": -50.94
  },
  {
    "start_time": 1750.0,
    "end_time": 1755.0,
    "average_db": -6.85
  },
  {
    "start_time": 1755.0,
    "end_time": 1760.0,
    "average_db": -12.06
  },
  {
    "start_time": 1760.0,
    "end_time": 1765.0,
    "average_db": -50.21
  },
  {
    "start_time": 1765.0,
    "end_time": 1770.0,
    "average_db": -36.81
  },
  {
    "start_time": 1770.0,
    "end_time": 1775.0,
    "average_db": -43.05
  },
  {
    "start_time": 1775.0,
    "end_time": 1780.0,
    "average_db": -43.27
  },
  {
    "start_time": 1780.0,
    "end_time": 1785.0,
    "average_db": -51.46
  },
  {
    "start_time": 1785.0,
    "end_time": 1790.0,
    "average_db": -51.49
  },
  {
    "start_time": 1790.0,
    "end_time": 1795.0,
    "average_db": -50.65
  },
  {
    "start_time": 1795.0,
    "end_time": 1800.0,
    "average_db": -51.46
  },
  {
    "start_time": 1800.0,
    "end_time": 1805.0,
    "average_db": -53.15
  },
  {
    "start_time": 1805.0,
    "end_time": 1810.0,
    "average_db": -52.47
  },
  {
    "start_time": 1810.0,
    "end_time": 1815.0,
    "average_db": -51.04
  },
  {
    "start_time": 1815.0,
    "end_time": 1820.0,
    "average_db": -52.13
  },
  {
    "start_time": 1820.0,
    "end_time": 1825.0,
    "average_db": -51.55
  },
  {
    "start_time": 1825.0,
    "end_time": 1830.0,
    "average_db": -52.9
  },
  {
    "start_time": 1830.0,
    "end_time": 1835.0,
    "average_db": -50.9
  },
  {
    "start_time": 1835.0,
    "end_time": 1840.0,
    "average_db": -51.25
  },
  {
    "start_time": 1840.0,
    "end_time": 1845.0,
    "average_db": -34.53
  },
  {
    "start_time": 1845.0,
    "end_time": 1850.0,
    "average_db": -6.28
  },
  {
    "start_time": 1850.0,
    "end_time": 1855.0,
    "average_db": -44.81
  },
  {
    "start_time": 1855.0,
    "end_time": 1860.0,
    "average_db": -51.05
  },
  {
    "start_time": 1860.0,
    "end_time": 1865.0,
    "average_db": -52.31
  },
  {
    "start_time": 1865.0,
    "end_time": 1870.0,
    "average_db": -46.62
  },
  {
    "start_time": 1870.0,
    "end_time": 1875.0,
    "average_db": -50.62
  },
  {
    "start_time": 1875.0,
    "end_time": 1880.0,
    "average_db": -52.81
  },
  {
    "start_time": 1880.0,
    "end_time": 1885.0,
    "average_db": -48.96
  },
  {
    "start_time": 1885.0,
    "end_time": 1890.0,
    "average_db": -15.88
  },
  {
    "start_time": 1890.0,
    "end_time": 1895.0,
    "average_db": -22.8
  },
  {
    "start_time": 1895.0,
    "end_time": 1900.0,
    "average_db": -49.83
  },
  {
    "start_time": 1900.0,
    "end_time": 1905.0,
    "average_db": -45.07
  },
  {
    "start_time": 1905.0,
    "end_time": 1910.0,
    "average_db": -26.9
  },
  {
    "start_time": 1910.0,
    "end_time": 1915.0,
    "average_db": -34.06
  },
  {
    "start_time": 1915.0,
    "end_time": 1920.0,
    "average_db": -5.84
  },
  {
    "start_time": 1920.0,
    "end_time": 1925.0,
    "average_db": -35.61
  },
  {
    "start_time": 1925.0,
    "end_time": 1930.0,
    "average_db": -51.53
  },
  {
    "start_time": 1930.0,
    "end_time": 1935.0,
    "average_db": -54.03
  },
  {
    "start_time": 1935.0,
    "end_time": 1940.0,
    "average_db": -51.1
  },
  {
    "start_time": 1940.0,
    "end_time": 1945.0,
    "average_db": -49.14
  },
  {
    "start_time": 1945.0,
    "end_time": 1950.0,
    "average_db": -52.15
  },
  {
    "start_time": 1950.0,
    "end_time": 1955.0,
    "average_db": -51.88
  },
  {
    "start_time": 1955.0,
    "end_time": 1960.0,
    "average_db": -51.99
  },
  {
    "start_time": 1960.0,
    "end_time": 1965.0,
    "average_db": -51.98
  },
  {
    "start_time": 1965.0,
    "end_time": 1970.0,
    "average_db": -52.76
  },
  {
    "start_time": 1970.0,
    "end_time": 1975.0,
    "average_db": -53.38
  },
  {
    "start_time": 1975.0,
    "end_time": 1980.0,
    "average_db": -51.07
  },
  {
    "start_time": 1980.0,
    "end_time": 1985.0,
    "average_db": -47.83
  },
  {
    "start_time": 1985.0,
    "end_time": 1990.0,
    "average_db": -50.6
  },
  {
    "start_time": 1990.0,
    "end_time": 1995.0,
    "average_db": -52.32
  },
  {
    "start_time": 1995.0,
    "end_time": 2000.0,
    "average_db": -52.1
  },
  {
    "start_time": 2000.0,
    "end_time": 2005.0,
    "average_db": -51.48
  },
  {
    "start_time": 2005.0,
    "end_time": 2010.0,
    "average_db": -34.0
  },
  {
    "start_time": 2010.0,
    "end_time": 2015.0,
    "average_db": -7.89
  },
  {
    "start_time": 2015.0,
    "end_time": 2020.0,
    "average_db": -43.31
  },
  {
    "start_time": 2020.0,
    "end_time": 2025.0,
    "average_db": -52.24
  },
  {
    "start_time": 2025.0,
    "end_time": 2030.0,
    "average_db": -47.8
  },
  {
    "start_time": 2030.0,
    "end_time": 2035.0,
    "average_db": -40.74
  },
  {
    "start_time": 2035.0,
    "end_time": 2040.0,
    "average_db": -9.84
  },
  {
    "start_time": 2040.0,
    "end_time": 2045.0,
    "average_db": -41.38
  },
  {
    "start_time": 2045.0,
    "end_time": 2050.0,
    "average_db": -51.59
  },
  {
    "start_time": 2050.0,
    "end_time": 2055.0,
    "average_db": -44.46
  },
  {
    "start_time": 2055.0,
    "end_time": 2060.0,
    "average_db": -33.99
  },
  {
    "start_time": 2060.0,
    "end_time": 2065.0,
    "average_db": -7.91
  },
  {
    "start_time": 2065.0,
    "end_time": 2070.0,
    "average_db": -37.86
  },
  {
    "start_time": 2070.0,
    "end_time": 2075.0,
    "average_db": -53.26
  },
  {
    "start_time": 2075.0,
    "end_time": 2080.0,
    "average_db": -53.36
  },
  {
    "start_time": 2080.0,
    "end_time": 2085.0,
    "average_db": -32.61
  },
  {
    "start_time": 2085.0,
    "end_time": 2090.0,
    "average_db": -22.3
  },
  {
    "start_time": 2090.0,
    "end_time": 2095.0,
    "average_db": -50.28
  },
  {
    "start_time": 2095.0,
    "end_time": 2100.0,
    "average_db": -52.21
  },
  {
    "start_time": 2100.0,
    "end_time": 2105.0,
    "average_db": -49.69
  },
  {
    "start_time": 2105.0,
    "end_time": 2110.0,
    "average_db": -32.31
  },
  {
    "start_time": 2110.0,
    "end_time": 2115.0,
    "average_db": -6.94
  },
  {
    "start_time": 2115.0,
    "end_time": 2120.0,
    "average_db": -37.58
  },
  {
    "start_time": 2120.0,
    "end_time": 2125.0,
    "average_db": -49.85
  },
  {
    "start_time": 2125.0,
    "end_time": 2130.0,
    "average_db": -46.04
  },
  {
    "start_time": 2130.0,
    "end_time": 2135.0,
    "average_db": -51.71
  },
  {
    "start_time": 2135.0,
    "end_time": 2140.0,
    "average_db": -52.25
  },
  {
    "start_time": 2140.0,
    "end_time": 2145.0,
    "average_db": -43.48
  },
  {
    "start_time": 2145.0,
    "end_time": 2150.0,
    "average_db": -17.35
  },
  {
    "start_time": 2150.0,
    "end_time": 2155.0,
    "average_db": -52.14
  },
  {
    "start_time": 2155.0,
    "end_time": 2160.0,
    "average_db": -65.47
  },
  {
    "start_time": 2160.0,
    "end_time": 2165.0,
    "average_db": -28.45
  },
  {
    "start_time": 2165.0,
    "end_time": 2170.0,
    "average_db": -51.5
  },
  {
    "start_time": 2170.0,
    "end_time": 2175.0,
    "average_db": -51.66
  },
  {
    "start_time": 2175.0,
    "end_time": 2180.0,
    "average_db": -51.41
  },
  {
    "start_time": 2180.0,
    "end_time": 2185.0,
    "average_db": -47.67
  },
  {
    "start_time": 2185.0,
    "end_time": 2190.0,
    "average_db": -6.08
  },
  {
    "start_time": 2190.0,
    "end_time": 2195.0,
    "average_db": -10.42
  },
  {
    "start_time": 2195.0,
    "end_time": 2200.0,
    "average_db": -49.19
  },
  {
    "start_time": 2200.0,
    "end_time": 2205.0,
    "average_db": -50.02
  },
  {
    "start_time": 2205.0,
    "end_time": 2210.0,
    "average_db": -52.02
  },
  {
    "start_time": 2210.0,
    "end_time": 2215.0,
    "average_db": -29.77
  },
  {
    "start_time": 2215.0,
    "end_time": 2220.0,
    "average_db": -8.81
  },
  {
    "start_time": 2220.0,
    "end_time": 2225.0,
    "average_db": -31.13
  },
  {
    "start_time": 2225.0,
    "end_time": 2230.0,
    "average_db": -10.13
  },
  {
    "start_time": 2230.0,
    "end_time": 2235.0,
    "average_db": -48.6
  },
  {
    "start_time": 2235.0,
    "end_time": 2240.0,
    "average_db": -50.08
  },
  {
    "start_time": 2240.0,
    "end_time": 2245.0,
    "average_db": -34.84
  },
  {
    "start_time": 2245.0,
    "end_time": 2250.0,
    "average_db": -5.8
  },
  {
    "start_time": 2250.0,
    "end_time": 2255.0,
    "average_db": -30.28
  },
  {
    "start_time": 2255.0,
    "end_time": 2260.0,
    "average_db": -49.38
  },
  {
    "start_time": 2260.0,
    "end_time": 2265.0,
    "average_db": -10.2
  },
  {
    "start_time": 2265.0,
    "end_time": 2270.0,
    "average_db": -26.33
  },
  {
    "start_time": 2270.0,
    "end_time": 2275.0,
    "average_db": -45.04
  },
  {
    "start_time": 2275.0,
    "end_time": 2280.0,
    "average_db": -51.21
  },
  {
    "start_time": 2280.0,
    "end_time": 2285.0,
    "average_db": -52.35
  },
  {
    "start_time": 2285.0,
    "end_time": 2290.0,
    "average_db": -50.94
  },
  {
    "start_time": 2290.0,
    "end_time": 2295.0,
    "average_db": -6.85
  },
  {
    "start_time": 2295.0,
    "end_time": 2300.0,
    "average_db": -12.06
  },
  {
    "start_time": 2300.0,
    "end_time": 2305.0,
    "average_db": -50.21
  },
  {
    "start_time": 2305.0,
    "end_time": 2310.0,
    "average_db": -36.81
  },
  {
    "start_time": 2310.0,
    "end_time": 2315.0,
    "average_db": -43.05
  },
  {
    "start_time": 2315.0,
    "end_time": 2320.0,
    "average_db": -43.27
  },
  {
    "start_time": 2320.0,
    "end_time": 2325.0,
    "average_db": -51.46
  },
  {
    "start_time": 2325.0,
    "end_time": 2330.0,
    "average_db": -51.49
  },
  {
    "start_time": 2330.0,
    "end_time": 2335.0,
    "average_db": -50.65
  },
  {
    "start_time": 2335.0,
    "end_time": 2340.0,
    "average_db": -51.46
  },
  {
    "start_time": 2340.0,
    "end_time": 2345.0,
    "average_db": -53.15
  },
  {
    "start_time": 2345.0,
    "end_time": 2350.0,
    "average_db": -52.47
  },
  {
    "start_time": 2350.0,
    "end_time": 2355.0,
    "average_db": -51.04
  },
  {
    "start_time": 2355.0,
    "end_time": 2360.0,
    "average_db": -52.13
  },
  {
    "start_time": 2360.0,
    "end_time": 2365.0,
    "average_db": -51.55
  },
  {
    "start_time": 2365.0,
    "end_time": 2370.0,
    "average_db": -52.9
  },
  {
    "start_time": 2370.0,
    "end_time": 2375.0,
    "average_db": -50.9
  },
  {
    "start_time": 2375.0,
    "end_time": 2380.0,
    "average_db": -51.25
  },
  {
    "start_time": 2380.0,
    "end_time": 2385.0,
    "average_db": -34.53
  },
  {
    "start_time": 2385.0,
    "end_time": 2390.0,
    "average_db": -6.28
  },
  {
    "start_time": 2390.0,
    "end_time": 2395.0,
    "average_db": -44.81
  },
  {
    "start_time": 2395.0,
    "end_time": 2400.0,
    "average_db": -51.05
  },
  {
    "start_time": 2400.0,
    "end_time": 2405.0,
    "average_db": -52.31
  },
  {
    "start_time": 2405.0,
    "end_time": 2410.0,
    "average_db": -46.62
  },
  {
    "start_time": 2410.0,
    "end_time": 2415.0,
    "average_db": -50.62
  },
  {
    "start_time": 2415.0,
    "end_time": 2420.0,
    "average_db": -52.81
  },
  {
    "start_time": 2420.0,
    "end_time": 2425.0,
    "average_db": -48.96
  },
  {
    "start_time": 2425.0,
    "end_time": 2430.0,
    "average_db": -15.88
  },
  {
    "start_time": 2430.0,
    "end_time": 2435.0,
    "average_db": -22.8
  },
  {
    "start_time": 2435.0,
    "end_time": 2440.0,
    "average_db": -49.83
  },
  {
    "start_time": 2440.0,
    "end_time": 2445.0,
    "average_db": -45.07
  },
  {
    "start_time": 2445.0,
    "end_time": 2450.0,
    "average_db": -26.9
  },
  {
    "start_time": 2450.0,
    "end_time": 2455.0,
    "average_db": -34.06
  },
  {
    "start_time": 2455.0,
    "end_time": 2460.0,
    "average_db": -5.84
  },
  {
    "start_time": 2460.0,
    "end_time": 2465.0,
    "average_db": -35.61
  },
  {
    "start_time": 2465.0,
    "end_time": 2470.0,
    "average_db": -51.53
  },
  {
    "start_time": 2470.0,
    "end_time": 2475.0,
    "average_db": -54.03
  },
  {
    "start_time": 2475.0,
    "end_time": 2480.0,
    "average_db": -51.1
  },
  {
    "start_time": 2480.0,
    "end_time": 2485.0,
    "average_db": -49.14
  },
  {
    "start_time": 2485.0,
    "end_time": 2490.0,
    "average_db": -52.15
  },
  {
    "start_time": 2490.0,
    "end_time": 2495.0,
    "average_db": -51.88
  },
  {
    "start_time": 2495.0,
    "end_time": 2500.0,
    "average_db": -51.99
  },
  {
    "start_time": 2500.0,
    "end_time": 2505.0,
    "average_db": -51.98
  },
  {
    "start_time": 2505.0,
    "end_time": 2510.0,
    "average_db": -52.76
  },
  {
    "start_time": 2510.0,
    "end_time": 2515.0,
    "average_db": -53.38
  },
  {
    "start_time": 2515.0,
    "end_time": 2520.0,
    "average_db": -51.07
  },
  {
    "start_time": 2520.0,
    "end_time": 2525.0,
    "average_db": -47.83
  },
  {
    "start_time": 2525.0,
    "end_time": 2530.0,
    "average_db": -50.6
  },
  {
    "start_time": 2530.0,
    "end_time": 2535.0,
    "average_db": -52.32
  },
  {
    "start_time": 2535.0,
    "end_time": 2540.0,
    "average_db": -52.1
  },
  {
    "start_time": 2540.0,
    "end_time": 2545.0,
    "average_db": -51.48
  },
  {
    "start_time": 2545.0,
    "end_time": 2550.0,
    "average_db": -34.0
  },
  {
    "start_time": 2550.0,
    "end_time": 2555.0,
    "average_db": -7.89
  },
  {
    "start_time": 2555.0,
    "end_time": 2560.0,
    "average_db": -43.31
  },
  {
    "start_time": 2560.0,
    "end_time": 2565.0,
    "average_db": -52.24
  },
  {
    "start_time": 2565.0,
    "end_time": 2570.0,
    "average_db": -47.8
  },
  {
    "start_time": 2570.0,
    "end_time": 2575.0,
    "average_db": -40.74
  },
  {
    "start_time": 2575.0,
    "end_time": 2580.0,
    "average_db": -9.84
  },
  {
    "start_time": 2580.0,
    "end_time": 2585.0,
    "average_db": -41.38
  },
  {
    "start_time": 2585.0,
    "end_time": 2590.0,
    "average_db": -51.59
  },
  {
    "start_time": 2590.0,
    "end_time": 2595.0,
    "average_db": -44.46
  },
  {
    "start_time": 2595.0,
    "end_time": 2600.0,
    "average_db": -33.99
  },
  {
    "start_time": 2600.0,
    "end_time": 2605.0,
    "average_db": -7.91
  },
  {
    "start_time": 2605.0,
    "end_time": 2610.0,
    "average_db": -37.86
  },
  {
    "start_time": 2610.0,
    "end_time": 2615.0,
    "average_db": -53.26
  },
  {
    "start_time": 2615.0,
    "end_time": 2620.0,
    "average_db": -53.36
  },
  {
    "start_time": 2620.0,
    "end_time": 2625.0,
    "average_db": -32.61
  },
  {
    "start_time": 2625.0,
    "end_time": 2630.0,
    "average_db": -22.3
  },
  {
    "start_time": 2630.0,
    "end_time": 2635.0,
    "average_db": -50.28
  },
  {
    "start_time": 2635.0,
    "end_time": 2640.0,
    "average_db": -52.21
  },
  {
    "start_time": 2640.0,
    "end_time": 2645.0,
    "average_db": -49.69
  },
  {
    "start_time": 2645.0,
    "end_time": 2650.0,
    "average_db": -32.31
  },
  {
    "start_time": 2650.0,
    "end_time": 2655.0,
    "average_db": -6.94
  },
  {
    "start_time": 2655.0,
    "end_time": 2660.0,
    "average_db": -37.58
  },
  {
    "start_time": 2660.0,
    "end_time": 2665.0,
    "average_db": -49.85
  },
  {
    "start_time": 2665.0,
    "end_time": 2670.0,
    "average_db": -46.04
  },
  {
    "start_time": 2670.0,
    "end_time": 2675.0,
    "average_db": -51.71
  },
  {
    "start_time": 2675.0,
    "end_time": 2680.0,
    "average_db": -52.25
  },
  {
    "start_time": 2680.0,
    "end_time": 2685.0,
    "average_db": -43.48
  },
  {
    "start_time": 2685.0,
    "end_time": 2690.0,
    "average_db": -17.35
  },
  {
    "start_time": 2690.0,
    "end_time": 2695.0,
    "average_db": -52.14
  },
  {
    "start_time": 2695.0,
    "end_time": 2700.0,
    "average_db": -65.47
  },
  {
    "start_time": 2700.0,
    "end_time": 2705.0,
    "average_db": -28.45
  },
  {
    "start_time": 2705.0,
    "end_time": 2710.0,
    "average_db": -51.5
  },
  {
    "start_time": 2710.0,
    "end_time": 2715.0,
    "average_db": -51.66
  },
  {
    "start_time": 2715.0,
    "end_time": 2720.0,
    "average_db": -51.41
  },
  {
    "start_time": 2720.0,
    "end_time": 2725.0,
    "average_db": -47.67
  },
  {
    "start_time": 2725.0,
    "end_time": 2730.0,
    "average_db": -6.08
  },
  {
    "start_time": 2730.0,
    "end_time": 2735.0,
    "average_db": -10.42
  },
  {
    "start_time": 2735.0,
    "end_time": 2740.0,
    "average_db": -49.19
  },
  {
    "start_time": 2740.0,
    "end_time": 2745.0,
    "average_db": -50.02
  },
  {
    "start_time": 2745.0,
    "end_time": 2750.0,
    "average_db": -52.02
  },
  {
    "start_time": 2750.0,
    "end_time": 2755.0,
    "average_db": -29.77
  },
  {
    "start_time": 2755.0,
    "end_time": 2760.0,
    "average_db": -8.81
  },
  {
    "start_time": 2760.0,
    "end_time": 2765.0,
    "average_db": -31.13
  },
  {
    "start_time": 2765.0,
    "end_time": 2770.0,
    "average_db": -10.13
  },
  {
    "start_time": 2770.0,
    "end_time": 2775.0,
    "average_db": -48.6
  },
  {
    "start_time": 2775.0,
    "end_time": 2780.0,
    "average_db": -50.08
  },
  {
    "start_time": 2780.0,
    "end_time": 2785.0,
    "average_db": -34.84
  },
  {
    "start_time": 2785.0,
    "end_time": 2790.0,
    "average_db": -5.8
  },
  {
    "start_time": 2790.0,
    "end_time": 2795.0,
    "average_db": -30.28
  },
  {
    "start_time": 2795.0,
    "end_time": 2800.0,
    "average_db": -49.38
  },
  {
    "start_time": 2800.0,
    "end_time": 2805.0,
    "average_db": -10.2
  },
  {
    "start_time": 2805.0,
    "end_time": 2810.0,
    "average_db": -26.33
  },
  {
    "start_time": 2810.0,
    "end_time": 2815.0,
    "average_db": -45.04
  },
  {
    "start_time": 2815.0,
    "end_time": 2820.0,
    "average_db": -51.21
  },
  {
    "start_time": 2820.0,
    "end_time": 2825.0,
    "average_db": -52.35
  },
  {
    "start_time": 2825.0,
    "end_time": 2830.0,
    "average_db": -50.94
  },
  {
    "start_time": 2830.0,
    "end_time": 2835.0,
    "average_db": -6.85
  },
  {
    "start_time": 2835.0,
    "end_time": 2840.0,
    "average_db": -12.06
  },
  {
    "start_time": 2840.0,
    "end_time": 2845.0,
    "average_db": -50.21
  },
  {
    "start_time": 2845.0,
    "end_time": 2850.0,
    "average_db": -36.81
  },
  {
    "start_time": 2850.0,
    "end_time": 2855.0,
    "average_db": -43.05
  },
  {
    "start_time": 2855.0,
    "end_time": 2860.0,
    "average_db": -43.27
  },
  {
    "start_time": 2860.0,
    "end_time": 2865.0,
    "average_db": -51.46
  },
  {
    "start_time": 2865.0,
    "end_time": 2870.0,
    "average_db": -51.49
  },
  {
    "start_time": 2870.0,
    "end_time": 2875.0,
    "average_db": -50.65
  },
  {
    "start_time": 2875.0,
    "end_time": 2880.0,
    "average_db": -51.46
  },
  {
    "start_time": 2880.0,
    "end_time": 2885.0,
    "average_db": -53.15
  },
  {
    "start_time": 2885.0,
    "end_time": 2890.0,
    "average_db": -52.47
  },
  {
    "start_time": 2890.0,
    "end_time": 2895.0,
    "average_db": -51.04
  },
  {
    "start_time": 2895.0,
    "end_time": 2900.0,
    "average_db": -52.13
  },
  {
    "start_time": 2900.0,
    "end_time": 2905.0,
    "average_db": -51.55
  },
  {
    "start_time": 2905.0,
    "end_time": 2910.0,
    "average_db": -52.9
  },
  {
    "start_time": 2910.0,
    "end_time": 2915.0,
    "average_db": -50.9
  },
  {
    "start_time": 2915.0,
    "end_time": 2920.0,
    "average_db": -51.25
  },
  {
    "start_time": 2920.0,
    "end_time": 2925.0,
    "average_db": -34.53
  },
  {
    "start_time": 2925.0,
    "end_time": 2930.0,
    "average_db": -6.28
  },
  {
    "start_time": 2930.0,
    "end_time": 2935.0,
    "average_db": -44.81
  },
  {
    "start_time": 2935.0,
    "end_time": 2940.0,
    "average_db": -51.05
  },
  {
    "start_time": 2940.0,
    "end_time": 2945.0,
    "average_db": -52.31
  },
  {
    "start_time": 2945.0,
    "end_time": 2950.0,
    "average_db": -46.62
  },
  {
    "start_time": 2950.0,
    "end_time": 2955.0,
    "average_db": -50.62
  },
  {
    "start_time": 2955.0,
    "end_time": 2960.0,
    "average_db": -52.81
  },
  {
    "start_time": 2960.0,
    "end_time": 2965.0,
    "average_db": -48.96
  },
  {
    "start_time": 2965.0,
    "end_time": 2970.0,
    "average_db": -15.88
  },
  {
    "start_time": 2970.0,
    "end_time": 2975.0,
    "average_db": -22.8
  },
  {
    "start_time": 2975.0,
    "end_time": 2980.0,
    "average_db": -49.83
  },
  {
    "start_time": 2980.0,
    "end_time": 2985.0,
    "average_db": -45.07
  },
  {
    "start_time": 2985.0,
    "end_time": 2990.0,
    "average_db": -26.9
  },
  {
    "start_time": 2990.0,
    "end_time": 2995.0,
    "average_db": -34.06
  },
  {
    "start_time": 2995.0,
    "end_time": 3000.0,
    "average_db": -5.84
  },
  {
    "start_time": 3000.0,
    "end_time": 3005.0,
    "average_db": -35.61
  },
  {
    "start_time": 3005.0,
    "end_time": 3010.0,
    "average_db": -51.53
  },
  {
    "start_time": 3010.0,
    "end_time": 3015.0,
    "average_db": -54.03
  },
  {
    "start_time": 3015.0,
    "end_time": 3020.0,
    "average_db": -51.1
  },
  {
    "start_time": 3020.0,
    "end_time": 3025.0,
    "average_db": -49.14
  },
  {
    "start_time": 3025.0,
    "end_time": 3030.0,
    "average_db": -52.15
  },
  {
    "start_time": 3030.0,
    "end_time": 3035.0,
    "average_db": -51.88
  },
  {
    "start_time": 3035.0,
    "end_time": 3040.0,
    "average_db": -51.99
  },
  {
    "start_time": 3040.0,
    "end_time": 3045.0,
    "average_db": -51.98
  },
  {
    "start_time": 3045.0,
    "end_time": 3050.0,
    "average_db": -52.76
  },
  {
    "start_time": 3050.0,
    "end_time": 3055.0,
    "average_db": -53.38
  },
  {
    "start_time": 3055.0,
    "end_time": 3060.0,
    "average_db": -51.07
  },
  {
    "start_time": 3060.0,
    "end_time": 3065.0,
    "average_db": -47.83
  },
  {
    "start_time": 3065.0,
    "end_time": 3070.0,
    "average_db": -50.6
  },
  {
    "start_time": 3070.0,
    "end_time": 3075.0,
    "average_db": -52.32
  },
  {
    "start_time": 3075.0,
    "end_time": 3080.0,
    "average_db": -52.1
  },
  {
    "start_time": 3080.0,
    "end_time": 3085.0,
    "average_db": -51.48
  },
  {
    "start_time": 3085.0,
    "end_time": 3090.0,
    "average_db": -34.0
  },
  {
    "start_time": 3090.0,
    "end_time": 3095.0,
    "average_db": -7.89
  },
  {
    "start_time": 3095.0,
    "end_time": 3100.0,
    "average_db": -43.31
  },
  {
    "start_time": 3100.0,
    "end_time": 3105.0,
    "average_db": -52.24
  },
  {
    "start_time": 3105.0,
    "end_time": 3110.0,
    "average_db": -47.8
  },
  {
    "start_time": 3110.0,
    "end_time": 3115.0,
    "average_db": -40.74
  },
  {
    "start_time": 3115.0,
    "end_time": 3120.0,
    "average_db": -9.84
  },
  {
    "start_time": 3120.0,
    "end_time": 3125.0,
    "average_db": -41.38
  },
  {
    "start_time": 3125.0,
    "end_time": 3130.0,
    "average_db": -51.59
  },
  {
    "start_time": 3130.0,
    "end_time": 3135.0,
    "average_db": -44.46
  },
  {
    "start_time": 3135.0,
    "end_time": 3140.0,
    "average_db": -33.99
  },
  {
    "start_time": 3140.0,
    "end_time": 3145.0,
    "average_db": -7.91
  },
  {
    "start_time": 3145.0,
    "end_time": 3150.0,
    "average_db": -37.86
  },
  {
    "start_time": 3150.0,
    "end_time": 3155.0,
    "average_db": -53.26
  },
  {
    "start_time": 3155.0,
    "end_time": 3160.0,
    "average_db": -53.36
  },
  {
    "start_time": 3160.0,
    "end_time": 3165.0,
    "average_db": -32.61
  },
  {
    "start_time": 3165.0,
    "end_time": 3170.0,
    "average_db": -22.3
  },
  {
    "start_time": 3170.0,
    "end_time": 3175.0,
    "average_db": -50.28
  },
  {
    "start_time": 3175.0,
    "end_time": 3180.0,
    "average_db": -52.21
  },
  {
    "start_time": 3180.0,
    "end_time": 3185.0,
    "average_db": -49.69
  },
  {
    "start_time": 3185.0,
    "end_time": 3190.0,
    "average_db": -32.31
  },
  {
    "start_time": 3190.0,
    "end_time": 3195.0,
    "average_db": -6.94
  },
  {
    "start_time": 3195.0,
    "end_time": 3200.0,
    "average_db": -37.58
  },
  {
    "start_time": 3200.0,
    "end_time": 3205.0,
    "average_db": -49.85
  },
  {
    "start_time": 3205.0,
    "end_time": 3210.0,
    "average_db": -46.04
  },
  {
    "start_time": 3210.0,
    "end_time": 3215.0,
    "average_db": -51.71
  },
  {
    "start_time": 3215.0,
    "end_time": 3220.0,
    "average_db": -52.25
  },
  {
    "start_time": 3220.0,
    "end_time": 3225.0,
    "average_db": -43.48
  },
  {
    "start_time": 3225.0,
    "end_time": 3230.0,
    "average_db": -17.35
  },
  {
    "start_time": 3230.0,
    "end_time": 3235.0,
    "average_db": -52.14
  },
  {
    "start_time": 3235.0,
    "end_time": 3240.0,
    "average_db": -65.47
  },
  {
    "start_time": 3240.0,
    "end_time": 3245.0,
    "average_db": -28.45
  },
  {
    "start_time": 3245.0,
    "end_time": 3250.0,
    "average_db": -51.5
  },
  {
    "start_time": 3250.0,
    "end_time": 3255.0,
    "average_db": -51.66
  },
  {
    "start_time": 3255.0,
    "end_time": 3260.0,
    "average_db": -51.41
  },
  {
    "start_time": 3260.0,
    "end_time": 3265.0,
    "average_db": -47.67
  },
  {
    "start_time": 3265.0,
    "end_time": 3270.0,
    "average_db": -6.08
  },
  {
    "start_time": 3270.0,
    "end_time": 3275.0,
    "average_db": -10.42
  },
  {
    "start_time": 3275.0,
    "end_time": 3280.0,
    "average_db": -49.19
  },
  {
    "start_time": 3280.0,
    "end_time": 3285.0,
    "average_db": -50.02
  },
  {
    "start_time": 3285.0,
    "end_time": 3290.0,
    "average_db": -52.02
  },
  {
    "start_time": 3290.0,
    "end_time": 3295.0,
    "average_db": -29.77
  },
  {
    "start_time": 3295.0,
    "end_time": 3300.0,
    "average_db": -8.81
  },
  {
    "start_time": 3300.0,
    "end_time": 3305.0,
    "average_db": -31.13
  },
  {
    "start_time": 3305.0,
    "end_time": 3310.0,
    "average_db": -10.13
  },
  {
    "start_time": 3310.0,
    "end_time": 3315.0,
    "average_db": -48.6
  },
  {
    "start_time": 3315.0,
    "end_time": 3320.0,
    "average_db": -50.08
  },
  {
    "start_time": 3320.0,
    "end_time": 3325.0,
    "average_db": -34.84
  },
  {
    "start_time": 3325.0,
    "end_time": 3330.0,
    "average_db": -5.8
  },
  {
    "start_time": 3330.0,
    "end_time": 3335.0,
    "average_db": -30.28
  },
  {
    "start_time": 3335.0,
    "end_time": 3340.0,
    "average_db": -49.38
  },
  {
    "start_time": 3340.0,
    "end_time": 3345.0,
    "average_db": -10.2
  },
  {
    "start_time": 3345.0,
    "end_time": 3350.0,
    "average_db": -26.33
  },
  {
    "start_time": 3350.0,
    "end_time": 3355.0,
    "average_db": -45.04
  },
  {
    "start_time": 3355.0,
    "end_time": 3360.0,
    "average_db": -51.21
  },
  {
    "start_time": 3360.0,
    "end_time": 3365.0,
    "average_db": -52.35
  },
  {
    "start_time": 3365.0,
    "end_time": 3370.0,
    "average_db": -50.94
  },
  {
    "start_time": 3370.0,
    "end_time": 3375.0,
    "average_db": -6.85
  },
  {
    "start_time": 3375.0,
    "end_time": 3380.0,
    "average_db": -12.06
  },
  {
    "start_time": 3380.0,
    "end_time": 3385.0,
    "average_db": -50.21
  },
  {
    "start_time": 3385.0,
    "end_time": 3390.0,
    "average_db": -36.81
  },
  {
    "start_time": 3390.0,
    "end_time": 3395.0,
    "average_db": -43.05
  },
  {
    "start_time": 3395.0,
    "end_time": 3400.0,
    "average_db": -43.27
  },
  {
    "start_time": 3400.0,
    "end_time": 3405.0,
    "average_db": -51.46
  },
  {
    "start_time": 3405.0,
    "end_time": 3410.0,
    "average_db": -51.49
  },
  {
    "start_time": 3410.0,
    "end_time": 3415.0,
    "average_db": -50.65
  },
  {
    "start_time": 3415.0,
    "end_time": 3420.0,
    "average_db": -51.46
  },
  {
    "start_time": 3420.0,
    "end_time": 3425.0,
    "average_db": -53.15
  },
  {
    "start_time": 3425.0,
    "end_time": 3430.0,
    "average_db": -52.47
  },
  {
    "start_time": 3430.0,
    "end_time": 3435.0,
    "average_db": -51.04
  },
  {
    "start_time": 3435.0,
    "end_time": 3440.0,
    "average_db": -52.13
  },
  {
    "start_time": 3440.0,
    "end_time": 3445.0,
    "average_db": -51.55
  },
  {
    "start_time": 3445.0,
    "end_time": 3450.0,
    "average_db": -52.9
  },
  {
    "start_time": 3450.0,
    "end_time": 3455.0,
    "average_db": -50.9
  },
  {
    "start_time": 3455.0,
    "end_time": 3460.0,
    "average_db": -51.25
  },
  {
    "start_time": 3460.0,
    "end_time": 3465.0,
    "average_db": -34.53
  },
  {
    "start_time": 3465.0,
    "end_time": 3470.0,
    "average_db": -6.28
  },
  {
    "start_time": 3470.0,
    "end_time": 3475.0,
    "average_db": -44.81
  },
  {
    "start_time": 3475.0,
    "end_time": 3480.0,
    "average_db": -51.05
  },
  {
    "start_time": 3480.0,
    "end_time": 3485.0,
    "average_db": -52.31
  },
  {
    "start_time": 3485.0,
    "end_time": 3490.0,
    "average_db": -46.62
  },
  {
    "start_time": 3490.0,
    "end_time": 3495.0,
    "average_db": -50.62
  },
  {
    "start_time": 3495.0,
    "end_time": 3500.0,
    "average_db": -52.81
  },
  {
    "start_time": 3500.0,
    "end_time": 3505.0,
    "average_db": -48.96
  },
  {
    "start_time": 3505.0,
    "end_time": 3510.0,
    "average_db": -15.88
  },
  {
    "start_time": 3510.0,
    "end_time": 3515.0,
    "average_db": -22.8
  },
  {
    "start_time": 3515.0,
    "end_time": 3520.0,
    "average_db": -49.83
  },
  {
    "start_time": 3520.0,
    "end_time": 3525.0,
    "average_db": -45.07
  },
  {
    "start_time": 3525.0,
    "end_time": 3530.0,
    "average_db": -26.9
  },
  {
    "start_time": 3530.0,
    "end_time": 3535.0,
    "average_db": -34.06
  },
  {
    "start_time": 3535.0,
    "end_time": 3540.0,
    "average_db": -5.84
  },
  {
    "start_time": 3540.0,
    "end_time": 3545.0,
    "average_db": -35.61
  },
  {
    "start_time": 3545.0,
    "end_time": 3550.0,
    "average_db": -51.53
  },
  {
    "start_time": 3550.0,
    "end_time": 3555.0,
    "average_db": -54.03
  },
  {
    "start_time": 3555.0,
    "end_time": 3560.0,
    "average_db": -51.1
  },
  {
    "start_time": 3560.0,
    "end_time": 3565.0,
    "average_db": -49.14
  },
  {
    "start_time": 3565.0,
    "end_time": 3570.0,
    "average_db": -52.15
  },
  {
    "start_time": 3570.0,
    "end_time": 3575.0,
    "average_db": -51.88
  },
  {
    "start_time": 3575.0,
    "end_time": 3580.0,
    "average_db": -51.99
  },
  {
    "start_time": 3580.0,
    "end_time": 3585.0,
    "average_db": -51.98
  },
  {
    "start_time": 3585.0,
    "end_time": 3590.0,
    "average_db": -52.76
  },
  {
    "start_time": 3590.0,
    "end_time": 3595.0,
    "average_db": -53.38
  },
  {
    "start_time": 3595.0,
    "end_time": 3600.0,
    "average_db": -51.07
  }
];
const reactionData = [
  {
    "start": "0.0:11.0",
    "end": "0.0:12.0",
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
    "start": "0.0:14.0",
    "end": "0.0:14.0",
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
    "start": "0.0:17.0",
    "end": "0.0:17.0",
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
    "start": "0.0:17.0",
    "end": "0.0:18.0",
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
    "start": "0.0:29.0",
    "end": "0.0:29.0",
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
    "start": "0.0:32.0",
    "end": "0.0:33.0",
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
    "start": "0.0:40.0",
    "end": "0.0:40.0",
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
    "start": "4.0:35.0",
    "end": "4.0:35.0",
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
    "start": "4.0:35.0",
    "end": "4.0:36.0",
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
    "start": "4.0:55.0",
    "end": "4.0:55.0",
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
    "start": "8.0:10.0",
    "end": "8.0:10.0",
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
    "start": "8.0:11.0",
    "end": "8.0:12.0",
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
    "start": "8.0:12.0",
    "end": "8.0:12.0",
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
    "start": "8.0:14.0",
    "end": "8.0:15.0",
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
    "start": "8.0:15.0",
    "end": "8.0:15.0",
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
    "start": "8.0:21.0",
    "end": "8.0:22.0",
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
    "start": "8.0:22.0",
    "end": "8.0:22.0",
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
    "start": "8.0:22.0",
    "end": "8.0:23.0",
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
    "start": "8.0:24.0",
    "end": "8.0:25.0",
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
    "start": "8.0:27.0",
    "end": "8.0:27.0",
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
    "start": "8.0:27.0",
    "end": "8.0:28.0",
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
    "start": "8.0:28.0",
    "end": "8.0:28.0",
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
    "start": "8.0:28.0",
    "end": "8.0:29.0",
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
    "start": "8.0:46.0",
    "end": "8.0:46.0",
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
    "start": "8.0:46.0",
    "end": "8.0:47.0",
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
    "start": "8.0:47.0",
    "end": "8.0:47.0",
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
    "start": "8.0:47.0",
    "end": "8.0:48.0",
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
    "start": "8.0:52.0",
    "end": "8.0:52.0",
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
    "start": "8.0:52.0",
    "end": "8.0:53.0",
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
    "start": "8.0:53.0",
    "end": "8.0:53.0",
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
  },
  {
    "start": "9.0:11.0",
    "end": "9.0:12.0",
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
    "start": "9.0:14.0",
    "end": "9.0:14.0",
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
    "start": "9.0:17.0",
    "end": "9.0:17.0",
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
    "start": "9.0:17.0",
    "end": "9.0:18.0",
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
    "start": "9.0:29.0",
    "end": "9.0:29.0",
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
    "start": "9.0:32.0",
    "end": "9.0:33.0",
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
    "start": "9.0:40.0",
    "end": "9.0:40.0",
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
    "start": "9.0:46.0",
    "end": "9.0:46.0",
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
    "start": "9.0:55.0",
    "end": "9.0:56.0",
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
    "start": "9.0:56.0",
    "end": "9.0:56.0",
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
    "start": "9.0:56.0",
    "end": "9.0:57.0",
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
    "start": "9.0:57.0",
    "end": "9.0:57.0",
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
    "start": "10.0:5.0",
    "end": "10.0:5.0",
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
    "start": "10.0:5.0",
    "end": "10.0:6.0",
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
    "start": "10.0:12.0",
    "end": "10.0:12.0",
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
    "start": "10.0:25.0",
    "end": "10.0:26.0",
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
    "start": "10.0:26.0",
    "end": "10.0:26.0",
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
    "start": "10.0:27.0",
    "end": "10.0:27.0",
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
    "start": "10.0:27.0",
    "end": "10.0:28.0",
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
    "start": "10.0:28.0",
    "end": "10.0:29.0",
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
    "start": "10.0:29.0",
    "end": "10.0:30.0",
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
    "start": "10.0:42.0",
    "end": "10.0:42.0",
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
    "start": "10.0:43.0",
    "end": "10.0:44.0",
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
    "start": "10.0:44.0",
    "end": "10.0:45.0",
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
    "start": "10.0:45.0",
    "end": "10.0:45.0",
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
    "start": "13.0:30.0",
    "end": "13.0:30.0",
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
    "start": "18.0:32.0",
    "end": "18.0:33.0",
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
    "start": "20.0:12.0",
    "end": "20.0:12.0",
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
    "start": "20.0:14.0",
    "end": "20.0:14.0",
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
    "start": "20.0:14.0",
    "end": "20.0:15.0",
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
    "start": "20.0:15.0",
    "end": "20.0:16.0",
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
    "start": "20.0:16.0",
    "end": "20.0:16.0",
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
    "start": "20.0:16.0",
    "end": "20.0:17.0",
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
    "start": "20.0:17.0",
    "end": "20.0:17.0",
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
    "start": "20.0:17.0",
    "end": "20.0:18.0",
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
    "start": "20.0:39.0",
    "end": "20.0:39.0",
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
    "start": "21.0:1.0",
    "end": "21.0:1.0",
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
    "start": "21.0:41.0",
    "end": "21.0:42.0",
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
    "start": "21.0:45.0",
    "end": "21.0:45.0",
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
    "start": "21.0:46.0",
    "end": "21.0:47.0",
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
    "start": "21.0:47.0",
    "end": "21.0:47.0",
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
    "start": "21.0:47.0",
    "end": "21.0:48.0",
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
    "start": "21.0:48.0",
    "end": "21.0:48.0",
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
    "start": "22.0:4.0",
    "end": "22.0:4.0",
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
    "start": "22.0:5.0",
    "end": "22.0:5.0",
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
    "start": "22.0:13.0",
    "end": "22.0:13.0",
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
    "start": "22.0:13.0",
    "end": "22.0:14.0",
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
    "start": "22.0:20.0",
    "end": "22.0:20.0",
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
    "start": "22.0:20.0",
    "end": "22.0:21.0",
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
    "start": "22.0:30.0",
    "end": "22.0:30.0",
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
    "start": "22.0:35.0",
    "end": "22.0:35.0",
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
    "start": "22.0:35.0",
    "end": "22.0:36.0",
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
    "start": "22.0:36.0",
    "end": "22.0:36.0",
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
    "start": "22.0:55.0",
    "end": "22.0:55.0",
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
    "start": "22.0:55.0",
    "end": "22.0:56.0",
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
    "start": "22.0:57.0",
    "end": "22.0:57.0",
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
    "start": "22.0:57.0",
    "end": "22.0:58.0",
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
    "start": "23.0:0.0",
    "end": "23.0:0.0",
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
    "start": "23.0:9.0",
    "end": "23.0:10.0",
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
    "start": "23.0:12.0",
    "end": "23.0:12.0",
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
    "start": "23.0:49.0",
    "end": "23.0:50.0",
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
    "start": "23.0:55.0",
    "end": "23.0:55.0",
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
    "start": "24.0:27.0",
    "end": "24.0:28.0",
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
    "start": "24.0:32.0",
    "end": "24.0:32.0",
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
    "start": "24.0:33.0",
    "end": "24.0:33.0",
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
    "start": "24.0:34.0",
    "end": "24.0:34.0",
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
    "start": "24.0:34.0",
    "end": "24.0:35.0",
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
    "start": "24.0:40.0",
    "end": "24.0:41.0",
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
    "start": "24.0:56.0",
    "end": "24.0:56.0",
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
    "start": "24.0:56.0",
    "end": "24.0:57.0",
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
    "start": "24.0:57.0",
    "end": "24.0:57.0",
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
    "start": "24.0:59.0",
    "end": "24.0:59.0",
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
    "start": "25.0:15.0",
    "end": "25.0:16.0",
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
    "start": "25.0:24.0",
    "end": "25.0:25.0",
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
    "start": "25.0:25.0",
    "end": "25.0:25.0",
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
    "start": "25.0:35.0",
    "end": "25.0:36.0",
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
    "start": "25.0:36.0",
    "end": "25.0:36.0",
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
    "start": "25.0:41.0",
    "end": "25.0:42.0",
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
    "start": "25.0:47.0",
    "end": "25.0:47.0",
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
    "start": "26.0:2.0",
    "end": "26.0:2.0",
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
    "start": "26.0:2.0",
    "end": "26.0:3.0",
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
    "start": "26.0:3.0",
    "end": "26.0:3.0",
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
    "start": "26.0:9.0",
    "end": "26.0:10.0",
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
    "start": "26.0:10.0",
    "end": "26.0:10.0",
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
    "start": "26.0:11.0",
    "end": "26.0:12.0",
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
    "start": "26.0:12.0",
    "end": "26.0:12.0",
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
    "start": "26.0:14.0",
    "end": "26.0:15.0",
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
    "start": "26.0:15.0",
    "end": "26.0:15.0",
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
    "start": "26.0:21.0",
    "end": "26.0:22.0",
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
    "start": "26.0:22.0",
    "end": "26.0:22.0",
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
    "start": "26.0:22.0",
    "end": "26.0:23.0",
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
    "start": "26.0:24.0",
    "end": "26.0:25.0",
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
    "start": "26.0:27.0",
    "end": "26.0:27.0",
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
    "start": "26.0:27.0",
    "end": "26.0:28.0",
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
    "start": "26.0:28.0",
    "end": "26.0:28.0",
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
    "start": "26.0:28.0",
    "end": "26.0:29.0",
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
    "start": "26.0:46.0",
    "end": "26.0:46.0",
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
    "start": "26.0:46.0",
    "end": "26.0:47.0",
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
    "start": "26.0:47.0",
    "end": "26.0:47.0",
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
    "start": "26.0:47.0",
    "end": "26.0:48.0",
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
    "start": "26.0:52.0",
    "end": "26.0:52.0",
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
    "start": "26.0:52.0",
    "end": "26.0:53.0",
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
    "start": "26.0:53.0",
    "end": "26.0:53.0",
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
  },
  {
    "start": "27.0:11.0",
    "end": "27.0:12.0",
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
    "start": "27.0:14.0",
    "end": "27.0:14.0",
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
    "start": "27.0:17.0",
    "end": "27.0:17.0",
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
    "start": "27.0:17.0",
    "end": "27.0:18.0",
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
    "start": "27.0:29.0",
    "end": "27.0:29.0",
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
    "start": "27.0:32.0",
    "end": "27.0:33.0",
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
    "start": "27.0:40.0",
    "end": "27.0:40.0",
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
    "start": "27.0:46.0",
    "end": "27.0:46.0",
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
    "start": "27.0:55.0",
    "end": "27.0:56.0",
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
    "start": "27.0:56.0",
    "end": "27.0:56.0",
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
    "start": "27.0:56.0",
    "end": "27.0:57.0",
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
    "start": "27.0:57.0",
    "end": "27.0:57.0",
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
    "start": "28.0:5.0",
    "end": "28.0:5.0",
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
    "start": "28.0:5.0",
    "end": "28.0:6.0",
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
    "start": "28.0:12.0",
    "end": "28.0:12.0",
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
    "start": "28.0:25.0",
    "end": "28.0:26.0",
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
    "start": "28.0:26.0",
    "end": "28.0:26.0",
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
    "start": "28.0:27.0",
    "end": "28.0:27.0",
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
    "start": "28.0:27.0",
    "end": "28.0:28.0",
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
    "start": "28.0:28.0",
    "end": "28.0:29.0",
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
    "start": "28.0:29.0",
    "end": "28.0:30.0",
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
    "start": "28.0:42.0",
    "end": "28.0:42.0",
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
    "start": "28.0:43.0",
    "end": "28.0:44.0",
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
    "start": "28.0:44.0",
    "end": "28.0:45.0",
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
    "start": "28.0:45.0",
    "end": "28.0:45.0",
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
    "start": "28.0:53.0",
    "end": "28.0:53.0",
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
    "start": "28.0:53.0",
    "end": "28.0:54.0",
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
    "start": "29.0:11.0",
    "end": "29.0:12.0",
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
    "start": "29.0:12.0",
    "end": "29.0:12.0",
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
    "start": "29.0:14.0",
    "end": "29.0:14.0",
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
    "start": "29.0:14.0",
    "end": "29.0:15.0",
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
    "start": "29.0:15.0",
    "end": "29.0:16.0",
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
    "start": "29.0:16.0",
    "end": "29.0:16.0",
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
    "start": "29.0:16.0",
    "end": "29.0:17.0",
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
    "start": "29.0:17.0",
    "end": "29.0:17.0",
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
    "start": "29.0:17.0",
    "end": "29.0:18.0",
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
    "start": "29.0:39.0",
    "end": "29.0:39.0",
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
    "start": "30.0:1.0",
    "end": "30.0:1.0",
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
    "start": "30.0:41.0",
    "end": "30.0:42.0",
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
    "start": "30.0:45.0",
    "end": "30.0:45.0",
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
    "start": "30.0:46.0",
    "end": "30.0:47.0",
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
    "start": "30.0:47.0",
    "end": "30.0:47.0",
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
    "start": "30.0:47.0",
    "end": "30.0:48.0",
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
    "start": "30.0:48.0",
    "end": "30.0:48.0",
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
    "start": "31.0:4.0",
    "end": "31.0:4.0",
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
    "start": "31.0:5.0",
    "end": "31.0:5.0",
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
    "start": "31.0:13.0",
    "end": "31.0:13.0",
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
    "start": "31.0:13.0",
    "end": "31.0:14.0",
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
    "start": "31.0:20.0",
    "end": "31.0:20.0",
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
    "start": "31.0:20.0",
    "end": "31.0:21.0",
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
    "start": "31.0:30.0",
    "end": "31.0:30.0",
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
    "start": "31.0:35.0",
    "end": "31.0:35.0",
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
    "start": "31.0:35.0",
    "end": "31.0:36.0",
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
    "start": "31.0:36.0",
    "end": "31.0:36.0",
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
    "start": "31.0:55.0",
    "end": "31.0:55.0",
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
    "start": "31.0:55.0",
    "end": "31.0:56.0",
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
    "start": "31.0:57.0",
    "end": "31.0:57.0",
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
    "start": "31.0:57.0",
    "end": "31.0:58.0",
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
    "start": "32.0:0.0",
    "end": "32.0:0.0",
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
    "start": "32.0:9.0",
    "end": "32.0:10.0",
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
    "start": "32.0:12.0",
    "end": "32.0:12.0",
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
    "start": "32.0:49.0",
    "end": "32.0:50.0",
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
    "start": "32.0:55.0",
    "end": "32.0:55.0",
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
    "start": "33.0:27.0",
    "end": "33.0:28.0",
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
    "start": "33.0:32.0",
    "end": "33.0:32.0",
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
    "start": "33.0:33.0",
    "end": "33.0:33.0",
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
    "start": "33.0:34.0",
    "end": "33.0:34.0",
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
    "start": "33.0:34.0",
    "end": "33.0:35.0",
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
    "start": "33.0:40.0",
    "end": "33.0:41.0",
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
    "start": "33.0:56.0",
    "end": "33.0:56.0",
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
    "start": "33.0:56.0",
    "end": "33.0:57.0",
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
    "start": "33.0:57.0",
    "end": "33.0:57.0",
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
    "start": "33.0:59.0",
    "end": "33.0:59.0",
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
    "start": "34.0:15.0",
    "end": "34.0:16.0",
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
    "start": "34.0:24.0",
    "end": "34.0:25.0",
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
    "start": "34.0:25.0",
    "end": "34.0:25.0",
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
    "start": "34.0:35.0",
    "end": "34.0:36.0",
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
    "start": "34.0:36.0",
    "end": "34.0:36.0",
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
    "start": "34.0:41.0",
    "end": "34.0:42.0",
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
    "start": "34.0:47.0",
    "end": "34.0:47.0",
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
    "start": "35.0:2.0",
    "end": "35.0:2.0",
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
    "start": "35.0:2.0",
    "end": "35.0:3.0",
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
    "start": "35.0:3.0",
    "end": "35.0:3.0",
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
    "start": "35.0:9.0",
    "end": "35.0:10.0",
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
    "start": "35.0:10.0",
    "end": "35.0:10.0",
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
    "start": "35.0:11.0",
    "end": "35.0:12.0",
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
    "start": "36.0:29.0",
    "end": "36.0:29.0",
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
    "start": "36.0:32.0",
    "end": "36.0:33.0",
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
    "start": "36.0:40.0",
    "end": "36.0:40.0",
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
    "start": "40.0:36.0",
    "end": "40.0:36.0",
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
    "start": "40.0:55.0",
    "end": "40.0:55.0",
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
    "start": "40.0:55.0",
    "end": "40.0:56.0",
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
    "start": "40.0:57.0",
    "end": "40.0:57.0",
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
    "start": "43.0:24.0",
    "end": "43.0:25.0",
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
    "start": "43.0:25.0",
    "end": "43.0:25.0",
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
    "start": "47.0:17.0",
    "end": "47.0:17.0",
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
    "start": "47.0:17.0",
    "end": "47.0:18.0",
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
    "start": "47.0:39.0",
    "end": "47.0:39.0",
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
    "start": "55.0:5.0",
    "end": "55.0:6.0",
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
    "start": "55.0:25.0",
    "end": "55.0:26.0",
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
    "start": "55.0:26.0",
    "end": "55.0:26.0",
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
    "start": "55.0:27.0",
    "end": "55.0:27.0",
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
    "start": "55.0:27.0",
    "end": "55.0:28.0",
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
    "start": "55.0:28.0",
    "end": "55.0:29.0",
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
    "start": "55.0:42.0",
    "end": "55.0:42.0",
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
    "start": "55.0:43.0",
    "end": "55.0:44.0",
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
    "start": "55.0:44.0",
    "end": "55.0:45.0",
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
    "start": "55.0:45.0",
    "end": "55.0:45.0",
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
    "start": "55.0:53.0",
    "end": "55.0:53.0",
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
    "start": "55.0:53.0",
    "end": "55.0:54.0",
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
    "start": "56.0:11.0",
    "end": "56.0:12.0",
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
    "start": "56.0:12.0",
    "end": "56.0:12.0",
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
    "start": "56.0:14.0",
    "end": "56.0:14.0",
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
    "start": "56.0:14.0",
    "end": "56.0:15.0",
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
    "start": "56.0:16.0",
    "end": "56.0:16.0",
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
    "start": "56.0:16.0",
    "end": "56.0:17.0",
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
    "start": "56.0:17.0",
    "end": "56.0:17.0",
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
    "start": "56.0:17.0",
    "end": "56.0:18.0",
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
    "start": "56.0:39.0",
    "end": "56.0:39.0",
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
    "start": "57.0:1.0",
    "end": "57.0:1.0",
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
    "start": "57.0:41.0",
    "end": "57.0:42.0",
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
    "start": "57.0:45.0",
    "end": "57.0:45.0",
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
    "start": "57.0:47.0",
    "end": "57.0:47.0",
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
    "start": "57.0:47.0",
    "end": "57.0:48.0",
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
    "start": "57.0:48.0",
    "end": "57.0:48.0",
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
    "start": "58.0:4.0",
    "end": "58.0:4.0",
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
    "start": "58.0:5.0",
    "end": "58.0:5.0",
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
    "start": "58.0:13.0",
    "end": "58.0:13.0",
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
    "start": "58.0:13.0",
    "end": "58.0:14.0",
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
    "start": "58.0:20.0",
    "end": "58.0:20.0",
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
    "start": "58.0:30.0",
    "end": "58.0:30.0",
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
    "start": "58.0:35.0",
    "end": "58.0:35.0",
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
    "start": "58.0:35.0",
    "end": "58.0:36.0",
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
    "start": "58.0:36.0",
    "end": "58.0:36.0",
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
    "start": "58.0:55.0",
    "end": "58.0:55.0",
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
    "start": "58.0:55.0",
    "end": "58.0:56.0",
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
    "start": "58.0:57.0",
    "end": "58.0:57.0",
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
    "start": "58.0:57.0",
    "end": "58.0:58.0",
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
    "start": "59.0:0.0",
    "end": "59.0:0.0",
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
    "start": "59.0:9.0",
    "end": "59.0:10.0",
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
    "start": "59.0:12.0",
    "end": "59.0:12.0",
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
    "start": "59.0:49.0",
    "end": "59.0:50.0",
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
    "start": "59.0:55.0",
    "end": "59.0:55.0",
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
  height = 500 
}) => {
  const chartRef = useRef<any>(null);

  // Handle chart resize when window or container size changes
  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.getEchartsInstance();
        if (chartInstance) {
          chartInstance.resize();
        }
      }
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);
    
    // Also listen for sidebar toggle (using a timeout to allow CSS transitions to complete)
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(handleResize, 300); // Wait for CSS transition to complete
    });
    
    const chartContainer = chartRef.current?.ele;
    if (chartContainer) {
      resizeObserver.observe(chartContainer.parentElement);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  // Convert time string to seconds for easier plotting
  const timeToSeconds = (timeStr: string): number => {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  // Process data for ECharts with minimum confidence filter
  const processedData = data
    .filter(item => item.max_reaction.confidence >= 0.3) // Only show reactions with 30%+ confidence
    .map(item => ({
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

  // Process audio level data - sample every 10th point to reduce clutter
  const processedAudioData = audioData
    .filter((_, index) => index % 10 === 0) // Show only every 10th data point
    .map((item: AudioLevelData) => ({
      time: item.start_time,
      db: Math.abs(item.average_db) // Convert negative dB values to positive
    }));

  // Separate grouped data by reaction type and limit to top reactions
  const laughterData = groupedReactions
    .filter(item => item.reaction === 'laughter')
    .sort((a, b) => b.confidence - a.confidence) // Sort by confidence descending
    .slice(0, 20) // Limit to top 20 laughter reactions
    .map(item => [item.time, item.confidence, item.timeStr, item.totalReactions]);

  const applauseData = groupedReactions
    .filter(item => item.reaction === 'applause')
    .sort((a, b) => b.confidence - a.confidence) // Sort by confidence descending
    .slice(0, 20) // Limit to top 20 applause reactions
    .map(item => [item.time, item.confidence, item.timeStr, item.totalReactions]);

  const option = {

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
            const dbValue = Array.isArray(param.data) ? param.data[1] : param.data;
            result += `<div style="color: #8B5CF6; margin: 4px 0;">🔊 Audio: <strong>${dbValue.toFixed(1)} dB</strong></div>`;
          } else if (param.seriesName === 'Laughter') {
            const [, confidence, , totalReactions] = param.data;
            result += `<div style="color: #F59E0B; margin: 4px 0; display: flex; align-items: center; gap: 6px;"><img src="/icons/laughed.svg" style="width: 16px; height: 16px;"/> Laughter: <strong>${(confidence * 100).toFixed(1)}%</strong></div>`;
            if (totalReactions > 1) { 
              result += `<div style="color: #92400E; font-size: 11px; margin: 2px 0;">• ${totalReactions} reactions in 5s interval</div>`;
            }
          } else if (param.seriesName === 'Applause') {
            const [, confidence, , totalReactions] = param.data;
            result += `<div style="color: #10B981; margin: 4px 0; display: flex; align-items: center; gap: 6px;"><img src="/icons/clapping.svg" style="width: 16px; height: 16px;"/> Applause: <strong>${(confidence * 100).toFixed(1)}%</strong></div>`;
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
        { name: 'Laughter', icon: 'image:///icons/laughed.svg' },
        { name: 'Applause', icon: 'image:///icons/clapping.svg' },
        { name: 'Audio Level', icon: 'image:///icons/microphone.svg' }
      ],
      top: 65,
      itemGap: 40,
      itemWidth: 25,
      itemHeight: 25,
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
      min: 0,
      max: 3600, // Limit to 60 minutes (60 * 60 = 3600 seconds)
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
        symbol: 'image:///icons/laughed.svg',
        symbolSize: 30, // Slightly larger for SVG visibility
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
            opacity: 1,
            borderColor: '#FFFFFF',
            borderWidth: 3,
            shadowColor: 'rgba(245, 158, 11, 0.6)',
            shadowBlur: 10,
            scale: 1.2
          }
        }
      },
      {
        name: 'Applause',
        type: 'scatter',
        yAxisIndex: 0,
        data: applauseData,
        symbol: 'image:///icons/clapping.svg',
        symbolSize: 30, // Slightly larger for SVG visibility
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
            opacity: 1,
            borderColor: '#FFFFFF',
            borderWidth: 3,
            shadowColor: 'rgba(16, 185, 129, 0.6)',
            shadowBlur: 10,
            scale: 1.2
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
        ref={chartRef}
        option={option} 
        style={{ width: '100%', height }}
        opts={{ renderer: 'canvas', devicePixelRatio: 2 }}
      />
      <div className="px-6 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
        </div>
        <p className="text-xs text-gray-500 text-center mt-3">
          Top 20 reactions per type (min. 30% confidence) • Audio sampled every 50 seconds • Hover for details
        </p>
      </div>
    </div>
  );
};

export default ConferenceReactionsChart;