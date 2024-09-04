import React from 'react';

interface MetricsCardProps {
  title: string;
  value: string | number;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-6 shadow rounded-lg text-center">
      <h2 className="text-gray-600 text-sm font-semibold">{title}</h2>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default MetricsCard;
