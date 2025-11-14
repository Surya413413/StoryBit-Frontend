const BASE = "https://www.omdbapi.com/?apikey=thewdb";

export async function fetchPopular() {
  const res = await fetch(`${BASE}&s=avengers`);
  const data = await res.json();
  return data.Search || []; // Always returns array
}

export async function fetchTopRated() {
  const res = await fetch(`${BASE}&s=batman`);
  const data = await res.json();
  return data.Search || [];
}

export async function fetchNowPlaying() {
  const res = await fetch(`${BASE}&s=superman`);
  const data = await res.json();
  return data.Search || [];
}

export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}&i=${id}`);
  return res.json();
}








// const BASE = "https://api.themoviedb.org/3";
// const API_KEY = process.env.TMDB_API_KEY;

// async function fetcher(path: string) {
//   const res = await fetch(`${BASE}${path}?api_key=${API_KEY}`, { next: { revalidate: 60 } });
//   if (!res.ok) {
//     throw new Error("Failed to fetch from TMDB");
//   }
//   return res.json();
// }

// export async function fetchPopular() {
//   return fetcher("/movie/popular");
// }

// export async function fetchTopRated() {
//   return fetcher("/movie/top_rated");
// }

// export async function fetchNowPlaying() {
//   return fetcher("/movie/now_playing");
// }

// export async function fetchMovieById(id: string) {
//   const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}`);
//   if (!res.ok) throw new Error("Failed to fetch movie");
//   return res.json();
// }
