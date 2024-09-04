import React from 'react';
import { Bar } from 'react-chartjs-2';
import { TopStreamedSong } from '../types';

interface TopStreamedSongsChartProps {
  data: TopStreamedSong[];
}

const TopStreamedSongsChart: React.FC<TopStreamedSongsChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(song => song.name),
    datasets: [
      {
        label: 'Stream Count',
        data: data.map(song => song.streamCounts),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-gray-700 font-semibold mb-4">Top 5 Streamed Songs</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default TopStreamedSongsChart;
