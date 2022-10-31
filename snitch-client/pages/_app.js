import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import AppContext from "../components/AppContext";

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState();

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
