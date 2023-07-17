import { BiShareAlt, BiSearch, BiMenu, BiChevronDown } from "react-icons/bi";
import NavLogo from "../../assets/Images/cine-pass.png";
import { useContext } from "react";
import { MovieContext } from "../../Context/Movie";
import { Link } from "react-router-dom";

const NavSm = () => {
  const { movie } = useContext(MovieContext);

  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl text-white font-bold">
            {movie.original_title}
          </h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-2 flex items-center justify-between">
        <div className="flex gap-4 items-center w-1/2">
          <Link to="/">
            <div className="w-28 h-14">
              <img src={NavLogo} alt="Nav-Logo" className="w-full h-full" />
            </div>
          </Link>
          <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full font-sans bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-base flex items-center hover:text-white cursor-pointer">
            Chennai <BiChevronDown />
          </span>
          <button className="border border-1 border-cinePass bg-cinePass text-black px-3 py-1 text-base rounded hover:border hover:border-1 hover:border-cinePass hover:text-cinePass hover:bg-transparent">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-md lg:relative lg:bg-black p-4">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">
          <NavSm />
        </div>
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
