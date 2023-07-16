import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.original_title}
            className="w-full h-full rounded-md"
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-cinePass" : "text-black"
          }`}
        >
          {props.original_title ? props.original_title : props.original_name}
        </h3>
        <p
          className={`text-base ${props.isDark ? "text-white" : "text-black"}`}
        >
          {`${props.release_date ? props.release_date : props.first_air_date}`}
        </p>
      </div>
    </Link>
  );
};

export default Poster;
