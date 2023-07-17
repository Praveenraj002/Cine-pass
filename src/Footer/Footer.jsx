import Logo from "../assets/Images/cine-pass.png";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="py-8 flex flex-col items-center ">
          <div className="w-16 h-12 md:w-24 md:h-16 my-3 mb-10">
            <img src={Logo} alt="Footer-Logo" className="w-full h-full" />
          </div>
          <h2 className="text-sm md:text-base text-gray-400">
            Designed and Built by{" "}
            <a
              href="https://praveenraj-sl.netlify.app/"
              className="text-white hover:text-cinePass"
            >
              Praveen Raj
            </a>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
