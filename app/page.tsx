import { fetchPopular, fetchTopRated, fetchNowPlaying } from "@/lib/tmdb";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";

export default async function Home() {
  const popular = await fetchPopular();
  const topRated = await fetchTopRated();
  const nowPlaying = await fetchNowPlaying();

  console.log("POPULAR DATA =>", popular);

  return (
    <div className="container">
      <HeroBanner movie={popular[0]} />

      <section className="rows">
        <MovieRow movies={popular} categoryTitle="Popular" />
        <MovieRow movies={topRated} categoryTitle="Top Rated" />
        <MovieRow movies={nowPlaying} categoryTitle="Now Playing" />
      </section>
    </div>
  );
}





// import { fetchPopular, fetchTopRated, fetchNowPlaying } from "@/lib/tmdb";
// // import { fetchPopular, fetchTopRated, fetchNowPlaying } from "@/lib/tmdb";

// import HeroBanner from "./components/HeroBanner";
// import MovieRow from "./components/MovieRow";

// export default async function Home() {
//   const popular = await fetchPopular();
//   const topRated = await fetchTopRated();
//   const nowPlaying = await fetchNowPlaying();

//   return (
//     <div className="container">
//       <HeroBanner movie={popular.results[0]} />

//       <section className="rows">
//         <MovieRow movies={popular.results} categoryTitle="Popular" />
//         <MovieRow movies={topRated.results} categoryTitle="Top Rated" />
//         <MovieRow movies={nowPlaying.results} categoryTitle="Now Playing" />
//       </section>
//     </div>
//   );
// }

