import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const BarChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F", "G"],
    datasets: [
      {
        label: "Progress",
        data: [1, 3, 6, 2, 6, 4, 5],
        backgroundColor: [
          "rgba(228, 235, 250, 1)",
          "rgba(228, 235, 250, 1)",
          "rgba(228, 235, 250, 1)",
          "rgba(228, 235, 250, 1)",
          "rgba(228, 235, 250, 1)",
          "rgba(228, 235, 250, 1)",
          "rgba(77, 128, 244, 1)",
        ],
        borderRadius: 3,
        barPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
