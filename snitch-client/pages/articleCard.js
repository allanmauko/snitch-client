function ArticleCard({id, title, date, content }) {
  return (
    <>
      <div className="card border-success mb-3" style={{ maxWidth: "40rem" }}>
        <div className="card-header">
        <a className="text-decoration-none" href={`/articles/${id}`}>{title}</a>
        </div>
        <div className="card-body">
          <h4 className="card-title">{date}</h4>
          <p className="card-text text-truncate">{content}</p>
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
