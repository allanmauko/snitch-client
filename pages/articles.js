import React, { useEffect, useState } from "react";
import ArticleCard from "./articleCard";

function Articles() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/articles")
      .then((response) => response.json())
      .then((articles) => {
        setAllArticles(articles);
      });
  }, []);
  console.log(allArticles);
  return (
    <div className="row">
      {allArticles.length !== 0
        ? allArticles.map((article) => {
            return (
              <div className="col-4" key={article.id}>
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  date={article.date_posted}
                  content={article.content}
                />
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
}

export default Articles;
