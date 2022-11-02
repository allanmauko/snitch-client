import React, { useEffect, useState } from "react";
import ArticleCard from "./articleCard";
import Header from "../components/header/header";

function Articles() {
  const [allArticles, setAllArticles] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((response) => response.json())
      .then((articles) => {
        setAllArticles(articles);
      });
  }, []);
  
  console.log(allArticles);
  return (
    <>
      <Header />
      <div className="row mt-5">
        {allArticles.length !== 0
          ? allArticles.map((article) => {
              return (
                <div className="col-4 mt-5" key={article.id}>
                  <ArticleCard
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    date={article.created_at}
                    content={article.value}
                    imageUrl={article.image_url}
                  />
                </div>
              );
            })
          : "Loading..."}
      </div>
    </>
  );
}

export default Articles;
