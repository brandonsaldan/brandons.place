export type MusicPeriod = '7day' | '1month' | '12month' | 'overall';

export type MusicTrack = {
  title: string;
  artist: string;
  album: string;
  image: string | null;
  playedAt: string | null;
  nowPlaying: boolean;
};

export type MusicAlbum = {
  title: string;
  artist: string;
  image: string | null;
  plays: number;
};

export type MusicAlbumDetail = {
  allTimePlays: number | null;
};

export type MusicArtist = {
  name: string;
  plays: number;
};

export type MusicResponse = {
  user: string;
  period: MusicPeriod;
  totalScrobbles: number;
  registeredAt: string | null;
  recentTracks: MusicTrack[];
  topAlbums: MusicAlbum[];
  topArtists: MusicArtist[];
};
