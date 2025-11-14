import { fetchPopular } from "@/lib/tmdb";
import Image from "next/image";
import { Movie } from "@/types/movie";

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movies: Movie[] = await fetchPopular(); // array
  const movie = movies[Number(params.id)] || movies[0];

  const poster =
    movie.posterURL ||
    movie.Poster ||
    movie.imageURL ||
    "/placeholder.png";

  return (
    <div className="container detail-page">
      <div className="detail-inner">
        
        <div className="poster">
          <Image
            src={poster}
            alt={movie.Title}
            width={350}
            height={500}
          />
        </div>

        <div className="meta">
          <h1 className="title">{movie.Title}</h1>

          <p className="overview">
            {movie.plot || movie.description || "No description available."}
          </p>

          <ul className="meta-list">
            <li><strong>Year:</strong> {movie.year || "Unknown"}</li>

            {movie.genres && movie.genres.length > 0 && (
              <li><strong>Genres:</strong> {movie.genres.join(", ")}</li>
            )}
          </ul>

        </div>
      </div>
    </div>
  );
}


// import { fetchMovieById } from "@/lib/tmdb";
// import Image from "next/image";

// export default async function MoviePage({ params }: { params: { id: string } }) {
//   const movie = await fetchMovieById(params.id);

//   return (
//     <div className="container detail-page">
//       <div className="detail-inner">
//         <div className="poster">
//           <Image
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//             width={400}
//             height={600}
//           />
//         </div>

//         <div className="meta">
//           <h1 className="title">{movie.title}</h1>
//           <p className="overview">{movie.overview}</p>

//           <ul className="meta-list">
//             <li><strong>Release Date:</strong> {movie.release_date}</li>
//             <li><strong>Rating:</strong> {movie.vote_average}</li>
//             <li>
//               <strong>Genres:</strong>{" "}
//               {movie.genres?.map((g: any) => g.name).join(", ")}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
