import React from 'react';

import MetricsCard from '../components/MetricsCard';
import UserGrowthChart from '../components/UserGrowthChart';
import RevenueDistributionChart from '../components/RevenueDistributionChart';
import TopStreamedSongsChart from '../components/TopStreamedSongsChart';
import StreamsTable from '../components/StreamsTable';
import { MockData } from '../types';

const mockData: MockData = {
  metrics: {
    totalUsers: 10000,
    activeUsers: 5000,
    totalStreams: 75000,
    revenue: '$120,000',
    topArtist: 'Artist A',
  },
  userGrowth: [
    { month: 'Jan', totalUsers: 1000, activeUsers: 800 },
    { month: 'Feb', totalUsers: 1500, activeUsers: 1200 },
    { month: 'Mar', totalUsers: 2000, activeUsers: 1600 },
    { month: 'Apr', totalUsers: 3000, activeUsers: 2500 },
    { month: 'May', totalUsers: 3500, activeUsers: 2800 },
    { month: 'Jun', totalUsers: 4000, activeUsers: 3000 },
    { month: 'Jul', totalUsers: 4500, activeUsers: 3500 },
    { month: 'Aug', totalUsers: 6000, activeUsers: 4000 },
    { month: 'Sep', totalUsers: 7000, activeUsers: 4500 },
    { month: 'Oct', totalUsers: 8000, activeUsers: 4800 },
    { month: 'Nov', totalUsers: 9000, activeUsers: 4900 },
    { month: 'Dec', totalUsers: 10000, activeUsers: 5000 },
  ],
  revenueDistribution: [70000, 50000],
  topStreamedSongs: [
    { name: 'Song A', streamCounts: 12000 },
    { name: 'Song B', streamCounts: 11000 },
    { name: 'Song C', streamCounts: 9000 },
    { name: 'Song D', streamCounts: 8000 },
    { name: 'Song E', streamCounts: 7500 },
  ],
  streams: [
    { songName: 'Song A', artist: 'Artist A', dateStreamed: '2024-09-01', streamCount: 500, userId: 'User123' },
    { songName: 'Song B', artist: 'Artist B', dateStreamed: '2024-09-02', streamCount: 450, userId: 'User124' },
    { songName: 'Song C', artist: 'Artist A', dateStreamed: '2024-09-03', streamCount: 450, userId: 'User125' },
    { songName: 'Song D', artist: 'Artist A', dateStreamed: '2024-09-03', streamCount: 450, userId: 'User126' },
    { songName: 'Song E', artist: 'Artist C', dateStreamed: '2024-09-04', streamCount: 450, userId: 'User127' },
  ],
};

const Dashboard: React.FC = () => {
  const { metrics, userGrowth, revenueDistribution, topStreamedSongs, streams } = mockData;

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricsCard title="Total Users" value={metrics.totalUsers} />
        <MetricsCard title="Active Users" value={metrics.activeUsers} />
        <MetricsCard title="Total Streams" value={metrics.totalStreams} />
        <MetricsCard title="Revenue" value={metrics.revenue} />
        <MetricsCard title="Top Artist" value={metrics.topArtist} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <UserGrowthChart data={userGrowth} />
        <RevenueDistributionChart data={revenueDistribution} />
        <TopStreamedSongsChart data={topStreamedSongs} />
      </div>

      <StreamsTable data={streams} />
    </div>
  );
};

export default Dashboard;
