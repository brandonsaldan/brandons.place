import type { APIRoute } from 'astro';
import type { MusicAlbumDetail } from '../../data/music-types';

export const prerender = false;

const USER = 'shibbbe';
const LASTFM_ENDPOINT = 'https://ws.audioscrobbler.com/2.0/';

type AlbumInfo = {
  userplaycount?: string;
};

export const GET: APIRoute = async ({ url }) => {
  const artist = url.searchParams.get('artist')?.trim();
  const album = url.searchParams.get('album')?.trim();
  if (!artist || !album || artist.length > 150 || album.length > 150) {
    return Response.json({ error: 'invalid_album' }, { status: 400 });
  }

  const apiKey = process.env.LASTFM_API_KEY || import.meta.env.LASTFM_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'not_configured' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }

  try {
    const requestUrl = new URL(LASTFM_ENDPOINT);
    requestUrl.search = new URLSearchParams({
      method: 'album.getinfo', artist, album, username: USER,
      api_key: apiKey, format: 'json', autocorrect: '1',
    }).toString();
    const response = await fetch(requestUrl, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw new Error(`Album lookup returned ${response.status}`);
    const payload = await response.json();
    if (payload.error || !payload.album) throw new Error('Album lookup unavailable');

    const info = payload.album as AlbumInfo;
    const count = Number(info.userplaycount);

    const detail: MusicAlbumDetail = {
      allTimePlays: Number.isFinite(count) && count >= 0 ? count : null,
    };
    return Response.json(detail, { headers: { 'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400' } });
  } catch (error) {
    console.error('Could not load album details:', error);
    return Response.json({ error: 'unavailable' }, { status: 502, headers: { 'Cache-Control': 'no-store' } });
  }
};
