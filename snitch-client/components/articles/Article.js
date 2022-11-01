import { useState } from "react";
import Link from "next/link";


function Article({ id, title, value, image_url, number_of_likes, removeArticle, setData }) {

  const [seeMore, setSeeMore] = useState(false);
  // const [apiData, setApiData] = useState([]);


  
  return (
  <div className="articles-page" style={{width: "200%",
  margin: "auto", paddingLeft: "275px", paddingBottom: "20px"}}>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={image_url} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-likes">{number_of_likes}</h6>
        <p class="card-text">{seeMore ? value : `${value.substring(0, 200)}`}</p>
        <button class = "btn btn-outline-info btn-sm rounded" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Read less" : "Read more"}</button>
        <button className='delete-btn btn btn-danger' onClick={()=> {removeArticle(id)}}>Not interested in this Article</button>
      
            {/* <button className="btn-update btn btn-danger" onClick={handleDeleteBlog}>Delete Blog</button> */}
            <button className="btn-update btn btn-success" style={{color: "black"}} onClick={() => setData(id, image_url, number_of_likes, title, value)} >
                <Link href="/updateArticle" >Update Blog</Link>
              </button>
            </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Article;


// onClick={() => setID(data.id) } 

 // const handleDeleteBlog = (id) => {
  //   // e.preventDefault();
    
  //   fetch(`https://635aa5516f97ae73a632efe8.mockapi.io/blogs/${id}`, {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: null
  //   })
  //   .then(response => {
  //       return response.json()
  //   })
  //   .then(data => 
  //       // this is the data we get after putting our data, do whatever you want with this data
  //       console.log(data) 
  //   );

  //   }