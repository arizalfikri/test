import { Box } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement,
  LinearScale,
  RadialLinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  BarElement
);

export default function BarChart() {
  const labels = [
    "22 May",
    "23 May",
    "24 May",
    "25 May",
    "26 May",
    "27 May",
    "28 May",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Legend 1",
        data: [78, 115, 155, 170, 110, 50, 43],
        backgroundColor: "#198564",
      },
      {
        label: "Legend 2",
        data: [42, 100, 50, 175, 90, 30, 55],
        backgroundColor: "#F9D14B",
      },
    ],
  };
  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1,
        },
      ],
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          padding: 30,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };
  return <Bar data={data} options={options} />;
}
