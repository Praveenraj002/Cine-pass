import Poster from "../Poster/Poster";
import Slider from "react-slick";
import PosterCarouselSettings from "../../Config/PosterCarousel.config";

const PosterSlider = (props) => {

  const sliderConfig = props.config ? props.config : PosterCarouselSettings

  return (
    <>
      <div className="flex flex-col items-start">
        <h3
          className={`text-xl md:text-2xl my-2 font-bold ${
            props.isDark ? "text-cinePass" : "text-black"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-base ${
            props.isDark ? "text-white" : "text-black"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider {...sliderConfig}>
        {props.images.map((image) => {
          return <Poster key={image.title} {...image} isDark={props.isDark} />;
        })}
      </Slider>
    </>
  );
};

export default PosterSlider;
