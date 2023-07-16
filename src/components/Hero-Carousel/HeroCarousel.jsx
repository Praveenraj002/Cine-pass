import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows";

const HeroCarousel = () => {
  const settingsLg = {
    arrows: true,
    // dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1688198088033_motogpdesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1687763200745_mnarrahmandesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1687764110373_madrasdesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1689053674628_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1689073078036_avaraedesktop.jpeg",
  ];

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => {
            return (
              <div key={image} className="w-full h-52 md:h-96 py-3 px-2">
                <img
                  src={image}
                  alt="test"
                  className="w-full h-full rounded-md"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {images.map((image) => {
            return (
              <div key={image} className="w-full h-80 p-2 py-3">
                <img
                  src={image}
                  alt="test"
                  className="w-full h-full rounded-md"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
