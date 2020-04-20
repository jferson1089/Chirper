import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Login from "./components/Login";
import SlModal from "./components/SignupLoginModal";
import { Link } from "react-router-dom";
function App() {
  return (
    <body>
      <Link to="/feed">
        {" "}
        <Feed />
      </Link>
      <Feed />
      {/* <SlModal /> */}
    </body>
  );
}

export default App;
