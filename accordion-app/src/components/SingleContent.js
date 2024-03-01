const SingleContent = ({ title, description }) => {
  return (
    <article className="content">
      <header>
        <h4>{title}</h4>
        <button className="btn">View Data</button>
      </header>
      <p>{description}</p>
    </article>
  );
};

export default SingleContent;
