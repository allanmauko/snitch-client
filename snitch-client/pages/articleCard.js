import Link from "next/link";

function ArticleCard({id, title, date, content ,imageUrl, user }) {
    return (
      <>
        <div className="card border-success mb-3" style={{ maxWidth: "40rem" }}>
          <div className="card-header">
          <Link className="text-decoration-none" href={`/article/${id}`}>{title}</Link>
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