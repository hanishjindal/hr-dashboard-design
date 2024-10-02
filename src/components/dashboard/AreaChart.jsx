import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip
);

const AreaChart = () => {
  const createGradient = (ctx, area) => {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0, "rgba(255, 229, 166, 0.3)");
    gradient.addColorStop(1, "rgba(255, 229, 166, 1)");
    return gradient;
  };

  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Weekly Progress",
        data: [50, 60, 55, 70, 65, 70],
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return createGradient(ctx, chartArea);
        },
        borderColor: "rgba(241, 194, 77, 1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        min: 0,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default AreaChart;
