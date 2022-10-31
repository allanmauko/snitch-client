import { useState } from "react";
// import Link from "next/link";


function Article({ id, title, blogItem, imageURL, removeArticle }) {

  const [seeMore, setSeeMore] = useState(false);
  // const [APIData, setAPIData] = useState({});


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


  
  return (
  <div className="articles-page" style={{width: "200%",
  margin: "auto", paddingLeft: "275px", paddingBottom: "20px"}}>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={imageURL} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{seeMore ? blogItem : `${blogItem.substring(0, 200)}`}</p>
        <button class = "btn btn-outline-info btn-sm rounded" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Read less" : "Read more"}</button>
        <button className='delete-btn btn btn-danger' onClick={()=> {removeArticle(id)}}>Not interested in this Article</button>
      
            {/* <button className="btn-update btn btn-danger" onClick={handleDeleteBlog}>Delete Blog</button> */}
            </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Article;
