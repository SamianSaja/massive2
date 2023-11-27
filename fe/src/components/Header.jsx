
const Header = (props) => {
  return (
    <div className="title-page text-center">
      <h1 className="bold mb-2">
        <span>{props.titleSpan}</span>
        {props.titleH}
      </h1>
      <p className="fs-5" > {props.desk}</p>
    </div>
  );
};

export default Header;
