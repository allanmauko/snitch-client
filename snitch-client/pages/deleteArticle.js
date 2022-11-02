import React from "react";

function DeleteArticle() {
  // Create one state that will contain the incoming data
  const [APIData, setAPIData] = useState([]);


  function Delete() {
    fetch(`http://localhost:3000/articles/${id}`,{
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((articles) => {
      Router.push("/");
      });
  }
  
  console.log(allArticles);

  return <div>deteteArtilce</div>;
}

export default DeleteArticle;
