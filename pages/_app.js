import Head from "next/head";
import Script from "next/script";
import Home from "../pages/home";
import "../styles/Navbar.module.css"

// import Navbar from "../pages/navbar";
// import "../css/customcss.css";
function MyApp() {
  return (
    <>
      <Head>
        // Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        // bootstrap CDN
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
      {/* <Component {...pageProps} /> */}
      <Home />
      {/* <Navbar /> */}
    </>
  );
}
export default MyApp;
