"use client";

import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

export default function MovieRow({
  movies,
  categoryTitle,
}: {
  movies: Movie[];
  categoryTitle: string;
}) {
  return (
    <section className="movie-row">
      <h3 className="row-title">{categoryTitle}</h3>

      <div className="row-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} index={index} />
        ))}
      </div>
    </section>
  );
}


// "use client";

// import MovieCard from "./MovieCard";
// import { Movie } from "@/types/movie";

// export default function MovieRow({
//   movies,
//   categoryTitle,
// }: {
//   movies: Movie[];
//   categoryTitle: string;
// }) {
//   return (
//     <section className="movie-row">
//       <h3 className="row-title">{categoryTitle}</h3>

//       <div className="row-list" role="list">
//         {movies.map((m) => (
//           <MovieCard key={m.id} movie={m} />
//         ))}
//       </div>
//     </section>
//   );
// }
