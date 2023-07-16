import { useEffect, useContext } from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Context/Movie";
import axios from "axios";

const MovieLayout = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  useEffect(() => {
    const reqMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    reqMovie();
  }, [id]);

  console.log(movie);

  return (
    <>
      <MovieNavbar />
    </>
  );
};

export default MovieLayout;
