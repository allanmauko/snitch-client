import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import Link from 'next/link';
import {useRouter} from 'next/router';
import axios from "axios";

const UserPage = () => {
  const [articles, setArticle] = useState([]);

  // const cat = useLocation().search
  let cat = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/articles`);
        setArticle(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
      <div className="home">
        <div className="articles">
          {articles.map((article) => (
              <div className="article" key={article.id}>
                <div className="img">
                  <img src={`../upload/${article.img}`} alt="" />
                </div>
                <div className="content">
                  <Link className="link" to={`/article/${article.id}`}>
                    <h1>{article.title}</h1>
                  </Link>
                  <p>{getText(article.desc)}</p>
                  <button>Read More</button>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default UserPage;