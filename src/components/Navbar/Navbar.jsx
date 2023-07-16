import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
} from "react-icons/bi";
import NavLogo from "../../assets/Images/cine-pass.png";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl text-cinePass font-bold">It all starts here!</h3>
          <span className="text-grey-400 text-xs flex items-center">
            Chennai <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <>
      <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full font-sans bg-transparent border-none focus:outline-none"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
        />
      </div>
    </>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-2 flex items-center justify-between">
        <div className="flex gap-4 items-center w-1/2">
          <div className="w-28 h-14">
            <img src={NavLogo} alt="Nav-Logo" className="w-full h-full" />
          </div>
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
          <button className="border border-1 border-cinePass bg-cinePass text-black px-3 py-1 text-base rounded-lg hover:border hover:border-1 hover:border-cinePass hover:text-cinePass hover:bg-transparent hover:duration-300">
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

const Navbar = () => {
  return (
    <>
      <nav className="bg-black p-4">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
