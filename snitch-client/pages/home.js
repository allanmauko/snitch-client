import { useState, useEffect } from "react";
import Navbar from "../pages/navbar";
import Banner from "./banner";
import About from "../pages/about";
import ArticleCard from "./articleCard";
import Footer from "./footer";
import Login from "./login";
import Loading from "./loading";
import Articles from "./articles";


function App() {

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch('https://course-api.com/react-tours-project')
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

  console.log(articles)

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }


  return (
    <div>
          <Navbar />
          <Login />
          <Banner />
          <About />
          <ArticleCard />
          <Footer />
          <Articles articles={articles}/>
        
    </div>
  );
}
export default App;