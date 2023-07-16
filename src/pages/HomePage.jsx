import HeroCarousel from "../components/Hero-Carousel/HeroCarousel";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard";
import EntertainmentBanner from "../assets/Images/entertainment-banner.png";
import PosterSlider from "../components/PosterSlider/PosterSlider";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [popularTvSeries, setPopularTvSeries] = useState([]);
  const [ratedTvSeries, setRatedTvSeries] = useState([]);

  useEffect(() => {
    const reqPremierMovies = async () => {
      const getPremierMovies = await axios.get("/movie/upcoming");
      setPremierMovies(getPremierMovies.data.results);
    };
    reqPremierMovies();
  }, []);

  useEffect(() => {
    const reqRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    reqRecommendedMovies();
  }, []);

  useEffect(() => {
    const reqPopularTvSeries = async () => {
      const getPopularTvSeries = await axios.get("/tv/popular");
      setPopularTvSeries(getPopularTvSeries.data.results);
    };
    reqPopularTvSeries();
  }, []);

  useEffect(() => {
    const reqRatedTvSeries = async () => {
      const getRatedTvSeries = await axios.get("/tv/top_rated");
      setRatedTvSeries(getRatedTvSeries.data.results);
    };
    reqRatedTvSeries();
  }, []);

  //

  console.log(premierMovies);
  console.log(popularTvSeries);

  return (
    <>
      <HeroCarousel />
      <div className=" flex flex-col gap-6 md:gap-10">
        <div className="container mx-auto px-2">
          <h1 className="text-xl font-bold my-3">
            The Best of <span>Live Events</span>
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="container mx-auto px-2 my-6">
          <PosterSlider
            images={recommendedMovies}
            title="Recommended Movies"
            isDark={false}
          />
        </div>
        <div className="bg-black py-16">
          <div className="container mx-auto px-2 flex flex-col gap-3">
            <PosterSlider
              images={premierMovies}
              title="Premiers"
              subtitle="Brand new Movies every alternative days"
              isDark={true}
            />
          </div>
        </div>
        <div className="my-4 container mx-auto px-2">
          <img src={EntertainmentBanner} alt="banner" className="rounded-lg" />
        </div>
        <div className="container mx-auto px-2 my-6">
          <PosterSlider
            images={popularTvSeries}
            title="Popular TV Series"
            isDark={false}
          />
        </div>
        <div className="container mx-auto px-2 my-6">
          <PosterSlider
            images={ratedTvSeries}
            title="Top Rated TV Series"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
