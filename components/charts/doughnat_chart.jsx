import { Box } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, CategoryScale, ArcElement);

export default function DoughnatChart() {
  const data = {
    labels: ["Legend 1", "Legend 2", "Legend 3", "Legend 4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [25, 15, 25, 35],
        backgroundColor: ["#202330", "#F9D14B", "#FD7D36", "#24C2B9"],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 30,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: true,
        text: "Chart.js Doughnut Chart",
      },
    },
  };
  return <Doughnut data={data} options={options} />;
}
