import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Router from "next/router";
// import axios from "axios";

function UpdateArticle() {
  const [image_url, setImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [number_of_likes, setNumberOfLikes] = useState("");

  const [id, setId] = useState(null);

  // console.log(imageURL)
  // console.log(title)
  // console.log(blogItem)

  const handleUpdateArticle = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:3000/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url,
        title,
        value,
        number_of_likes,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const handleUpdateArticle = () => {
  //   fetch(`https://635aa5516f97ae73a632efe8.mockapi.io/blogs/${id}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       imageURL,
  //       title,
  //       blogItem,
  //     }),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       Router.push("/")
  //     });
  // };

  // const handleUpdateArticle = ()=> {
  //   axios.put(`https://635aa5516f97ae73a632efe8.mockapi.io/blogs/${id}`, {
  //       imageURL,
  //       title,
  //       blogItem
  //     })
  // };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setImageURL(localStorage.getItem("Image URL"));
    setTitle(localStorage.getItem("Title"));
    setValue(localStorage.getItem("Value"));
    setNumberOfLikes(localStorage.getItem("Number of Likes"));
  }, []);

  return (
    <>
      <div style={{ width: "70%", align: "center", margin: "auto" }}>
        <Form>
          <Form.Label htmlFor="basic-url">Your Image URL</Form.Label>
          <InputGroup
            className="mb-3"
            value={image_url}
            onChange={(e) => setImageURL(e.target.value)}
          >
            <InputGroup.Text id="basic-addon3">
              https://example.com/imageurl1234/
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Technology is the way of the future"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Likes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Technology is the way of the future"
              onChange={(e) => setNumberOfLikes(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Blog</Form.Label>
            <Form.Control
              as="textarea"
              value={value}
              rows={15}
              placeholder="Technology is the way of the future....."
              onChange={(e) => setValue(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button type="submit" variant="success" onClick={handleUpdateArticle}>
          Update Blog
        </Button>
      </div>
    </>
  );
}

export default UpdateArticle;
