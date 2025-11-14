"use client";

import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie, index }: { movie: Movie; index: number }) {
  const poster =
    movie.posterURL ||
    movie.Poster ||
    movie.imageURL ||
    "/placeholder.png";

  return (
    <Link className="movie-card" href={`/movie/${index}`}>
      <div className="card-thumb">
        <Image
          src={poster}
          alt={movie.Title}
          width={150}
          height={225}
        />
      </div>
      <div className="card-title">{movie.Title}</div>
    </Link>
  );
}



// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Movie } from "@/types/movie";

// export default function MovieCard({ movie }: { movie: Movie }) {
//   return (
//     <Link className="movie-card" href={`/movie/${movie.id}`}>
//       <div className="card-thumb">
//         <Image
//           src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
//           alt={movie.title}
//           width={150}
//           height={225}
//         />
//       </div>
//       <div className="card-title">{movie.title}</div>
//     </Link>
//   );
// }
