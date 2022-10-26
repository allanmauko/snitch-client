// import { Fragment } from "react";

function About() {
  return (
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-sm-5 p-3 text-dark">
          <h5
            style={{
              fontFamily: "Acme",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "40px",
              lineHeight: "51px",
              textAlign: "center",
              color: "#000000"
            }}
          >
            A few words about this blog platform, <br />
            Snitch, and how this site was made
          </h5>
        </div>
        <div class="col-sm-7 p-3 text-dark">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-4">
                <img
                  class="rounded"
                  src="https://pilbox.themuse.com/image.jpg?filter=antialias&h=384&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2Fquestions-to-ask-05202022-602012447-Thomas-Barwick.jpg%3Fv%3Ded8d97d1eee7834c77adc5d87afe41247a8b2473&w=767"
                  alt="Holding image"
                  width="200px"
                  height="150px"
                />
              </div>
              <div class="col-4">
                {" "}
                <h5>Mika Matikainen</h5>
                <p>Apr 15, 2020 · 4 min read</p>
              </div>
              <div class="col-4">
                Social media icons
                
                  <div class="d-flex justify-content-start">
                    <a href="#!">
                      <i class="fab fa-facebook-f fa-lg me-3"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-twitter fa-lg me-3"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-instagram fa-lg"></i>
                    </a>
                  </div>
              
              </div>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. In hac habitasse platea
              dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Aliquam quis posuere ligula. In eu dui molestie, molestie lectus
              eu, semper lectus.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;










//   <div className="login-page">
// <div className="login-box">
//   <div className="illustration-wrapper">
//     <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
//   </div>
// {/* <Col xs={24} md={12}> */}
// <Form 
//     name="login-form"
//   >
//     <p className="form-title">LOG IN</p>
//     <Form.Item
//       name="email"
//       rules={[{required: true, message: 'Please input your email!'}]}
//     >
//       <Input
//         placeholder="Input email"
//         name="email"
//         value={loginData.email}
//         onChange={(event)=> setEmail(event.target.value)}
//       />
//     </Form.Item>

//     <Form.Item
//     placeholder="input password"
//       name="password"
//       rules={[{required: true, message: 'Please input your password!'}]}
//     >
//       <Input.Password 
//         placeholder="Password"
//         name="password"
//         value={loginData.password}
//         onChange={(event)=> setPassword(event.target.value)}
//       />
//     </Form.Item>

//     {error.length > 0 && (
//                           <ul style={{color:"red"}}className="fs-5">
//                               {error.map(error => <li key={error}>{error}</li>)}
//                           </ul>
//                       )}

//     <Form.Item>
//       <Button type="submit" className="login-form-button" onClick={handleSubmit}>
//         LOGIN
//         {/* <Link 
//         // href="/"
//         > LOGIN</Link> */}
//       </Button>
//     </Form.Item>
//     <p>If you dont have an account?<Link href="/signup"> Click me!</Link></p>
//   </Form>
// {/* </Col> */}
// </div>
// </div>

