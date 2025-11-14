import Image from "next/image";
import { Movie } from "@/types/movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
  if (!movie) return null;

  // Handle missing posters
  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "/placeholder.png";

  // Safe alt text
  const altText = movie.Title || "Movie poster";

  return (
    <section className="hero">
      <div className="hero-image">
        <Image
          src={poster}
          alt={altText}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h2 className="hero-title">{movie.Title}</h2>
       
      </div>
    </section>
  );
}


// import Image from "next/image";
// import { Movie } from "@/types/movie";

// export default function HeroBanner({ movie }: { movie: Movie }) {
//   if (!movie) return null;

//   const poster =
//     movie.posterURL ||
//     movie.Poster ||
//     movie.imageURL ||
//     "/placeholder.png";

//   return (
//     <section className="hero">
//       <div className="hero-image">
//         <Image
//           src={poster}
//           alt={movie.Title}
//           fill
//           priority
//           style={{ objectFit: "cover" }}
//         />
//         <div className="hero-overlay" />
//       </div>

//       <div className="hero-content">
//         <h2 className="hero-title">{movie.Title}</h2>
//       </div>
//     </section>
//   );
// }





// import Image from "next/image";
// import { Movie } from "@/types/movie";

// export default function HeroBanner({ movie }: { movie: Movie }) {
//   if (!movie) return null;

//   return (
//     <section className="hero">
//       <div className="hero-image">
//         <Image
//           src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//           alt={movie.title}
//           fill
//           priority
//           style={{ objectFit: "cover" }}
//         />
//         <div className="hero-overlay" />
//       </div>

//       <div className="hero-content">
//         <h2 className="hero-title">{movie.title}</h2>
//         <p className="hero-tagline">{movie.overview}</p>
//       </div>
//     </section>
//   );
// }
