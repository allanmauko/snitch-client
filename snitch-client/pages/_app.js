import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
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
