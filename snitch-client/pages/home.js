import Navbar from "../pages/navbar";
import Banner from "./banner";
import About from "../pages/about";
import ArticleCard from "./articleCard";
import Footer from "./footer";
import Login from "./login";


function App() {
  return (
    <div>
          <Navbar />
          <Login />
          <Banner />
          <About />
          <ArticleCard />
          <Footer />
    </div>
  );
}
export default  App;