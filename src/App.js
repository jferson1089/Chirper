import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Login from "./components/Login";
import SlModal from "./components/SignupLoginModal";
import { Link } from "react-router-dom";
import { Button} from "reactstrap";
function App() {
  return (
    <body>
      <Link to="/feed">
        <header >
        <Button className="topNav" color="secondary"><i class="fab fa-earlybirds"></i></Button>{' '}
        </header>
        
        
      </Link>
      <Feed />
      {/* <SlModal /> */}
    </body>
  );
}

export default App;
