import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


function Post() {
  const [article, setArticle] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    fetch(`http://localhost:3000/articles/${id}`)
      .then((response) => response.json())
      .then((obj) => {
        setArticle(obj);
      });
  }, [id]);
  console.log(article);
  //   Good date format
  const prettyDate =
    article &&
    new Date(article.created_at).toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });

  // delete article
  function handleDelete() {
    fetch(`http://localhost:3000/articles/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((res) => {
        router.push("/articles");
      });
  }

  return (
    <div className="container ">
      <h1>Blog</h1>
      {article ? (
        <div>
          <div
            className="card border-success mb-3"
            style={{ maxWidth: "40rem" }}
          >
            <div className="card-header">{article.title}</div>
            <div className="card-body">
              <h4 className="card-title">{prettyDate}</h4>
              <p className="card-text text-truncate">{article.value}</p>
            </div>
            <button className="btn btn-danger m-3" type="button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Post;
