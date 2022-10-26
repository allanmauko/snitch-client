import { useState } from "react";

function Article({ id, name, info, image, removeArticle }) {

  const [seeMore, setSeeMore] = useState(false);
  
  return (
    // <div class="container-fluid mt-3">
    //   <div class="row row-cols-1 row-cols-md-3 g-4">
    //     <div class="col-sm-4">
    //       <div class="card h-100">
    //         <img src={image} class="card-img-top" alt="..." />
    //         <div class="card-body">
    //           <h5 class="card-title">{name}</h5>
    //           <p class="card-text">{seeMore ? info : `${info.substring(0, 200)}`}
    //             <button class = "btn btn-outline-info btn-sm rounded" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Read less" : "Read more"}</button>
    //           </p>
    //         </div>  
    //         <div class="card-footer">
    //         <button className='btn btn-danger delete-btn'>Not Intersted in this article</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>  
   
    // </div>
  <>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{seeMore ? info : `${info.substring(0, 200)}`}</p>
        <button class = "btn btn-outline-info btn-sm rounded" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Read less" : "Read more"}</button>
        <button className='delete-btn btn btn-danger' onClick={()=> {removeArticle(id)}}>Not interested in this Article</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{seeMore ? info : `${info.substring(0, 200)}`}</p>
        <button class = "btn btn-outline-info btn-sm rounded" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Read less" : "Read more"}</button>
        <button className='delete-btn btn btn-danger' onClick={()=> {removeArticle(id)}}>Not interested in this Article</button></div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{seeMore ? info : `${info.substring(0, 200)}`}</p>
        <button class = "btn btn-outline-info btn-sm rounded" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Read less" : "Read more"}</button>
        <button className='delete-btn btn btn-danger' onClick={()=> {removeArticle(id)}}>Not interested in this Article</button>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default Article;


// { id, name, info, image, price }


{/* <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={data.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{data.name}</h5>
              <p class="card-text">{data.info}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">{data.price}</small>
            </div>
          </div>
        </div>
      </div>
    </div> */}