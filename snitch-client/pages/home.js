import { useState, useEffect } from "react";
import Navbar from "../pages/navbar";
import Banner from "./banner";
import About from "../pages/about";
// import ArticleCard from "./articleCard";
import Footer from "./footer";
import Login from "./login";
import Loading from "./loading";
import Articles from "./articles";


function App() {

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch('https://635aa5516f97ae73a632efe8.mockapi.io/blogs')
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setArticles(data)
    })
    .catch(error => {
      setLoading(false)
      console.log(error)
    })
  }, [])

  // console.log(articles)

    function removeArticle(id){
    const updatedArticles = articles.filter((article) => article.id !== id)
    setArticles(updatedArticles)
  }

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // if(articles.length === 0){
  //   return(
  //     <div>
  //       <h2>There are no tours left</h2>
  //       <
  //     </div>
  //   )
  // }


  return (
    <div>
          <Navbar />
          {/* <Login /> */}
          <Banner />
          <About />
          <Articles articles={articles} removeArticle={removeArticle} />
          {/* <ArticleCard /> */}
          <Footer />
        
    </div>
  );
}
export default App;


// https://course-api.com/react-tours-project