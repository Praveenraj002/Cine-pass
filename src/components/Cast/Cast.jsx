const Cast = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 md:w-32 md:h-32">
          <img
            src={props.image}
            alt="cast"
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-lg font-bold">{props.name}</h1>
        <p className="text-md font-medium">{props.title}</p>
      </div>
    </>
  );
};

export default Cast;
