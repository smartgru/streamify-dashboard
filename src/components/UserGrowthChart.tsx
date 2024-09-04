import React from 'react';
import { Line } from 'react-chartjs-2';
import { UserGrowth } from '../types';

interface UserGrowthChartProps {
  data: UserGrowth[];
}

const UserGrowthChart: React.FC<UserGrowthChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Total Users',
        data: data.map(item => item.totalUsers),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Active Users',
        data: data.map(item => item.activeUsers),
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-gray-700 font-semibold mb-4">User Growth</h3>
      <Line data={chartData} />
    </div>
  );
};

export default UserGrowthChart;
