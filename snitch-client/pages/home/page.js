import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/header/header';
import Banner from '../../sections/banner';
import About from '../../sections/about';
// import Services from '../../sections/services';
import Team from '../../sections/team';
import Footer from '../../sections/footer';
import Loading from '../../components/articles/Loading';
import Articles from '../../components/articles/Articles';
// import UserSignUp from '../userSignUp';
import AppContext from '../../components/AppContext';

const Page = () => {

const context = useContext(AppContext)

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch('http://127.0.0.1:3000/articles')
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

  const setData = (id, image_url, title, value, number_of_likes) => {
    console.log(id)
    console.log(image_url)
    console.log(title)
    console.log(value)
    console.log(number_of_likes)
    localStorage.setItem("ID", id)
    localStorage.setItem('image_url', image_url)
    localStorage.setItem('title', title)
    localStorage.setItem('value', value)
    localStorage.setItem('number_of_likes', number_of_likes)
}

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }


  return (
      <div>
        <Header />
        {/* <UserSignUp/> */}
        <Banner />
        <About />
        {/* <Services/> */}
        {/* <Articles articles={articles} removeArticle={removeArticle} /> */}
        {context.currentUser ? <Articles articles={articles} removeArticle={removeArticle} setData={setData} /> : <h1>Kindly login to view blogs!</h1>}
        <Team/>
        <Footer/>
      </div>
  );
};

export default Page;