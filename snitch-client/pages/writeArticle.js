import React, { useState } from "react";

function WriteArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //   Good date format
  const prettyDate = new Date().toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });
  
  //  submit the data
  function handleSubmit(e) {
    e.preventDefault();

    // send data to server
    fetch("http://127.0.0.1:3000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        value: description,
        number_of_likes: 0,
        image_url: ""
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if article  created successfully
        let successAlert = new Swal({
          title: "Success!",
          text: "Article saved successfully!",
          type: "success"
        });
        // after successfull article creaating
        successAlert.then(function () {
          window.location = "/articles";
        });
      })
      .catch((err) => {
        console.log(err);
        // after article failed
        let failAlert = new Swal({
          title: "Oops!",
          text: "User not saved!",
          type: "error"
        });
        // after alert reload page
        failAlert.then(function () {
          window.location = "/writeArticle";
        });
      });
  }

  return (
    <div className="container ">
      <h1>New Blog</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div
            className="card border-success mb-3"
            style={{ maxWidth: "40rem" }}
          >
            <div className="card-header">
              <div className="form-group">
                <label htmlFor="articleTitle" className="form-label mt-4">
                  Article Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="articleTitle"
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">Article Written On: {prettyDate}</h4>
              <div className="card-text text-truncate">
                <div className="form-group">
                  <label
                    htmlFor="descripionTextarea"
                    className="form-label mt-4"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="descripionTextarea"
                    placeholder="Not less than 20 characters"
                    rows="3"
                    pattern=".{20,}"
                    required
                    title="20 characters minimum"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-lg btn-primary m-3" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WriteArticle;
