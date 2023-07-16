export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          borderRadius: "50%",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          borderRadius: "50%",
        }}
        onClick={props.onClick}
      />
    </>
  );
};
