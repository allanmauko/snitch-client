import React from "react";

function userLogout() {
  fetch("http://127.0.0.1:3000/logout", {
    method: "DELETE"
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.clear();
      window.location = "/";
    });

//   return <div>userLogout</div>;
}

export default userLogout;
