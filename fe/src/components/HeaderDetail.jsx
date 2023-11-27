const HeaderDetail = (props) => {
  return (
    <div className="title-page-detail">
      <h1 className="bold mb-4">{props.title}</h1>
      <p className="mb-2">{props.date}</p>
    </div>
  );
};

export default HeaderDetail;
