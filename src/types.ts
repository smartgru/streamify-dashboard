export interface Metrics {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: string;
  topArtist: string;
}

export interface UserGrowth {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

export interface TopStreamedSong {
  name: string;
  streamCounts: number;
}

export interface Stream {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

export interface MockData {
  metrics: Metrics;
  userGrowth: UserGrowth[];
  revenueDistribution: number[];
  topStreamedSongs: TopStreamedSong[];
  streams: Stream[];
}
