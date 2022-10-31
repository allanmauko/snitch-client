import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';




function BlogForm() {

  const [imageURL, setImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [blogItem, setBlogItem] = useState("");

// const navigate = useNavigate();

const handlePublishBlog = (e) => {
  e.preventDefault();
  fetch('https://635aa5516f97ae73a632efe8.mockapi.io/blogs', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    imageURL,
    title,
    blogItem
}),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    Router.push("/")
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


  return (
    <div style={{width: "70%", align: "center", margin: "auto"}}>
         <Form>
         <Form.Label htmlFor="basic-url">Your Image URL</Form.Label>
      <InputGroup className="mb-3" onChange={(e) => setImageURL(e.target.value)}>
        <InputGroup.Text id="basic-addon3" >
          https://example.com/imageurl1234/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control type="text" placeholder="Technology is the way of the future" onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Blog</Form.Label>
        <Form.Control as="textarea" rows={15} placeholder="Technology is the way of the future....." onChange={(e) => setBlogItem(e.target.value)} />
      </Form.Group>
    </Form>
    <Button variant="success" onClick={handlePublishBlog} >Publish Blog</Button>
    
    </div>
  )
}

export default BlogForm


// https://static8.depositphotos.com/1008303/880/i/950/depositphotos_8803246-stock-photo-asian-college-student.jpg