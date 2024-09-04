import React from 'react';
import { Pie } from 'react-chartjs-2';

interface RevenueDistributionChartProps {
  data: number[];
}

const RevenueDistributionChart: React.FC<RevenueDistributionChartProps> = ({ data }) => {
  const chartData = {
    labels: ['Subscriptions', 'Ads'],
    datasets: [
      {
        label: 'Revenue',
        data: data,
        backgroundColor: ['#4caf50', '#ff5722'],
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-gray-700 font-semibold mb-4">Revenue Distribution</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default RevenueDistributionChart;
