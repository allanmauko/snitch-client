import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import Page from "./home/page";


export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div>
      <Head>
        <title>BuildCon</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link rel="icon" href="/pro.ico" />
      </Head>
      <Script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      ></Script>
      <Page setCurrentUser={setCurrentUser} currentUser={currentUser} />
    </div>
  );
}
