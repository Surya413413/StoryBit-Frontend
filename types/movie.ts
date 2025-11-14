
// export interface Movie {
//   id: number;
//   title: string;
//   overview?: string;
//   poster_path?: string | null;
//   backdrop_path?: string | null;
//   release_date?: string;
//   vote_average?: number;
//   genres?: { id: number; name: string }[];
// }

export interface Movie {
  id?: number;
  Title: string;
  posterURL?: string;
   Poster: string;
  imageURL?: string;
  description?: string;
  plot?: string;
  year?: number;
  genres?: string[]; 
}

// export interface Movie {
//   Title: string;      // <-- Capital T
//   Year: string;
//   imdbID: string;
//   Type?: string;
//   Poster: string;     // <-- Capital P
//   Plot?: string;
// }





