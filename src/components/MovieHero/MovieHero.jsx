// import MovieInfo from "./MovieInfo";
import { useContext } from "react";
import MovieInfo from "./MovieInfo";
import { MovieContext } from "../../Context/Movie";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  return (
    <>
      <div
        className="relative md:hidden w-full"
        style={{ height: "calc(180vw)" }}
      >
        <div className="absolute z-20 bottom-4 left-4">
          <MovieInfo />
        </div>
        <div className="w-full h-60 absolute bg-opacity-50 bg-black z-10 bottom-0" />
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          className="w-full h-full"
        />
      </div>
      <div
        className="relative hidden md:block w-full lg:hidden"
        style={{ height: "calc(80vw)" }}
      >
        <div className="absolute z-20 bottom-4 left-4">
          <MovieInfo />
        </div>
        <div className="w-full h-56 absolute bg-opacity-50 bg-black z-10 bottom-0" />
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="poster"
          className="w-full h-full"
        />
      </div>

      {/* Large */}
      <div
        className="relative hidden w-full lg:block "
        style={{ height: "32rem" }}
      >
        <div
          className="absolute z-10 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        />
        <div className="absolute z-30 left-24 top-16 flex items-center gap-12">
          <div className="w-64 h-96">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div>
            <MovieInfo />
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="poster"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default MovieHero;
