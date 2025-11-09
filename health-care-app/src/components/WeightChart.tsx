import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Record } from '../App';

// Chart.jsに必要なコンポーネントを登録
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  records: Record[];
}

const WeightChart: React.FC<ChartProps> = ({ records }) => {
  const data = {
    labels: records.map(r => r.date),
    datasets: [
      {
        label: 'Weight (kg)',
        data: records.map(r => r.weight),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Weight Fluctuation',
      },
    },
    scales: {
      y: {
        beginAtZero: false, // 体重なので0から始める必要はない
      }
    }
  };

  return <Line options={options} data={data} />;
};

export default WeightChart;
