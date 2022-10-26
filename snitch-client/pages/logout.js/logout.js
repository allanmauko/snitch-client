function Logout() {
    fetch("http://127.0.0.1:3000/logout", {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.clear();
        window.location = "/";
      });
  }
  export default Logout;
  