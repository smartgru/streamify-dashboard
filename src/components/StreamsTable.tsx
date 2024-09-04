import React, { useState } from 'react';
import { Stream } from '../types';

interface StreamsTableProps {
  data: Stream[];
}

const DataTable: React.FC<StreamsTableProps> = ({ data }) => {
  // State for sorting and filtering
  const [sortKey, setSortKey] = useState<'dateStreamed' | 'streamCount'>('dateStreamed');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filters, setFilters] = useState<{ songName: string; artist: string }>({
    songName: '',
    artist: '',
  });

  // Function to handle sorting
  const sortData = (data: Stream[]) => {
    return data.sort((a, b) => {
      const aValue = sortKey === 'dateStreamed' ? new Date(a.dateStreamed).getTime() : a.streamCount;
      const bValue = sortKey === 'dateStreamed' ? new Date(b.dateStreamed).getTime() : b.streamCount;

      if (sortOrder === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
  };

  // Function to handle filtering
  const filterData = (data: Stream[]) => {
    return data.filter((item) => 
      item.songName.toLowerCase().includes(filters.songName.toLowerCase()) &&
      item.artist.toLowerCase().includes(filters.artist.toLowerCase())
    );
  };

  // Apply sorting and filtering
  const sortedAndFilteredData = filterData(sortData(data));

  // Handle column header click for sorting
  const handleHeaderClick = (key: 'dateStreamed' | 'streamCount') => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by song name"
          value={filters.songName}
          onChange={(e) => setFilters({ ...filters, songName: e.target.value })}
          className="border p-2 rounded mr-4"
        />
        <input
          type="text"
          placeholder="Filter by artist"
          value={filters.artist}
          onChange={(e) => setFilters({ ...filters, artist: e.target.value })}
          className="border p-2 rounded"
        />
      </div>
      <table className="w-full bg-gray-100 border border-gray-200">
        <thead>
          <tr>
            <th className="border-b p-2">Song Name</th>
            <th className="border-b p-2">Artist</th>
            <th 
              className="border-b p-2 cursor-pointer"
              onClick={() => handleHeaderClick('dateStreamed')}
            >
              Date Streamed {sortKey === 'dateStreamed' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th 
              className="border-b p-2 cursor-pointer"
              onClick={() => handleHeaderClick('streamCount')}
            >
              Stream Count {sortKey === 'streamCount' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th className="border-b p-2">User ID</th>
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredData.map((item, index) => (
            <tr key={index}>
              <td className="border-b p-2 text-center">{item.songName}</td>
              <td className="border-b p-2 text-center">{item.artist}</td>
              <td className="border-b p-2 text-center">{item.dateStreamed}</td>
              <td className="border-b p-2 text-center">{item.streamCount}</td>
              <td className="border-b p-2 text-center">{item.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
