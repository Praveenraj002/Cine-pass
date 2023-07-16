import { useContext, useState } from "react";
import { MovieContext } from "../../Context/Movie";
import { PaymentModal } from "../PaymentModal/Payment";

const MovieInfo = () => {
  const { movie } = useContext(MovieContext);
  const [isOpen, setIsOpen] = useState(false);

  const bookMovie = () => {
    setIsOpen(true);
  };

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="flex flex-col gap-3 lg:gap-8">
        <div className=" flex gap-4">
          <span className="text-black bg-cinePass md:text-cinePass text-sm md:bg-black px-5 py-1 rounded-xl">
            Premier
          </span>
          <span className="text-black bg-cinePass md:text-cinePass text-sm md:bg-black px-5 py-1 rounded-xl">
            Highest Rated
          </span>
        </div>
        <h1 className="hidden lg:block text-white lg:text-4xl font-extrabold">
          {movie.original_title}
        </h1>

        <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col font-semibold">
          <div className="text-white font-mono flex flex-col gap-2">
            <h4>
              {" "}
              <span className="text-cinePass font-mono bg-black px-3 py-1 rounded-xl mr-2">
                {`${(movie.runtime / 60).toFixed(2)} hrs`}
              </span>{" "}
              2D, IMAX 2D
            </h4>
            <h4>{`Language: ${movie.original_language}`}</h4>
            <h4 className="text-white">{genres} • A</h4>
          </div>
          <div>
            <button
              className="border border-1 border-cinePass bg-cinePass text-black px-5 py-3 text-xl font-bold rounded-lg hover:border hover:border-1 hover:border-cinePass hover:text-cinePass hover:bg-transparent hover:duration-300 mt-4"
              onClick={bookMovie}
            >
              Book tickets
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
