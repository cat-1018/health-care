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

// Chart.jsのコンポーネントはWeightChart.tsxで既に登録されているが、
// 個々のコンポーネントが自己完結するように、ここでも登録しておくのが安全。
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

const BmiChart: React.FC<ChartProps> = ({ records }) => {
  const data = {
    labels: records.map(r => r.date),
    datasets: [
      {
        label: 'BMI',
        data: records.map(r => r.bmi),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        text: 'BMI Fluctuation',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      }
    }
  };

  return <Line options={options} data={data} />;
};

export default BmiChart;
