import MovieHero from "../components/MovieHero/MovieHero";
import MovieLayout from "../layouts/MoviePage.layout";
import Cast from "../components/Cast/Cast";
import { FaCcApplePay, FaCcAmazonPay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider";
import { MovieContext } from "../Context/Movie";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../Footer/Footer";

// import { SiPaytm, SiVisa } from "react-icons/si";

const MoviePage = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [suggestedMovies, setSuggestedMovies] = useState([]);

  useEffect(() => {
    const reqMovieCast = async () => {
      const getMovieCast = await axios.get(`/movie/${id}/credits`);
      setCast(getMovieCast.data.cast);
    };
    reqMovieCast();
  }, [id]);

  console.log(cast);

  useEffect(() => {
    const reqMovieCrew = async () => {
      const getMovieCrew = await axios.get(`/movie/${id}/credits`);
      setCrew(getMovieCrew.data.crew);
    };
    reqMovieCrew();
  }, [id]);

  useEffect(() => {
    const reqSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    reqSimilarMovies();
  }, [id]);

  useEffect(() => {
    const reqSuggestedMovies = async () => {
      const getSuggestedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setSuggestedMovies(getSuggestedMovies.data.results);
    };
    reqSuggestedMovies();
  }, [id]);

  console.log(crew);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <MovieLayout />
      <MovieHero />
      <div className="my-12 container  px-4  lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-2xl font-bold my-3">About the Movie</h2>
          <p>{movie.overview}</p>
        </div>
        <div>
          <hr className="my-8" />
        </div>
        <div className="my-8 ">
          <h1 className="text-2xl font-bold mb-6">Applicable Offers</h1>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex items-start gap-2 bg-cinePass border-2 border-black border-dashed p-3 rounded-md">
              <div className="w-9 h-9">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">Apple Pay Booking offer</h3>
                <p className="text-black">
                  Get 50% off up to INR 150 on all Apple pay Bookings
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-cinePass border-2 border-black border-dashed p-3 rounded-md">
              <div className="w-9 h-9">
                <FaCcAmazonPay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">Amazon Pay Booking offer</h3>
                <p className="text-black">
                  Get 35% off up to INR 150 on all Amazon Pay Bookings
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-6">Cast</h1>
          <Slider {...settingsCast}>
            {cast.map((castData) => {
              return (
                <Cast
                  key={castData.cast_id}
                  image={`https://image.tmdb.org/t/p/original${castData.profile_path}`}
                  name={castData.name}
                  title={`as ${castData.character}`}
                />
              );
            })}
          </Slider>
          <div>
            <hr className="my-8" />
          </div>
          <h1 className="text-2xl font-bold mb-6">Crew</h1>
          <Slider {...settingsCast}>
            {crew.map((crewData) => {
              return (
                <Cast
                  key={crewData.cast_id}
                  image={`https://image.tmdb.org/t/p/original${crewData.profile_path}`}
                  name={crewData.name}
                  title={crewData.job}
                />
              );
            })}
          </Slider>
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={similarMovies}
            title="You might also like"
            isDark={false}
          />
        </div>
        <div>
          <hr className="my-8" />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={suggestedMovies}
            title="Cine Pass Exclusive"
            isDark={false}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoviePage;
