
// import React, { useReducer } from 'react'
// import Users from './Users'
// import {
//     Navbar,
//     NavbarBrand

// } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Chirps from './Chirps'
// import Sign from './Sign'
// import Create from './Create'
// import { Route, Link } from "react-router-dom"
// import Search from './Search'


// function Feed() {
//     return (
//         <>


//             <section>

//                 <Route exact path='/feed' component={Chirps} />
//                 <Route exact path='/create' component={Create} />
//                 <Route exact path="/signup" component={Sign} />
//                 <Route exact path='/users' component={Users} />
//                 <Route exact path='/search' component={Search} />



//             </section>

//             <br />
//             <br />
//             <nav>
//                 <Navbar color="light" light expand="md">
//                     <Link to='/create'>
//                         <NavbarBrand href="/create">Chirp Out</NavbarBrand>
//                     </Link>
//                     <Link to='/users'>
//                         <NavbarBrand href="/users">Users</NavbarBrand>
//                     </Link>
//                     <Link to='/search'>
//                         <NavbarBrand href="/signup">Search</NavbarBrand>
//                     </Link>

//                     <Link to='/signup'>
//                         <NavbarBrand href="/signup">Sign Up</NavbarBrand>
//                     </Link>



//                 </Navbar>
//             </nav>
//         </>
//     )


import React, { useReducer } from "react";
import Users from "./Users";
import { Navbar, Button, Nav, NavbarBrand , Col, Form, Label, Input, FormGroup} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Chirps from "./Chirps";
import Sign from "./Sign";
import Create from "./Create";
import { Route, Link } from "react-router-dom";
import '../App.css'
function Feed() {
  return (
    <>
    
      <br />
      <br />
    <div className="tablet">
   
    
            <Col>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Chirp Away</Label>
                        <Input type="text" name="email" id="exampleEmail" placeholder="Name of Chirp" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="textarea" name="text" id="exampleText" placeholder="Chirp Here" />
                    </FormGroup>
                    <Button color="warning">Chirp IT out</Button>{' '}
                </Form>
            </Col>
        </div>
        <section>
        <Route exact path="/feed" component={Chirps} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/signup" component={Sign} />
        <Route exact path="/users" component={Users} />
      </section>
        <br></br>
      <nav className="bottomNav">
        <Navbar color="secondary" light expand="md"  >
          <Link to="/create">
            <NavbarBrand href="/create"><i className="fas fa-play"></i></NavbarBrand>
          </Link>
          <NavbarBrand href="/users"><i className="fas fa-users"></i></NavbarBrand>
          <Link to="/signup">
            <NavbarBrand href="/signup"><i className="fas fa-sign-in-alt"></i></NavbarBrand>
          </Link>
        </Navbar>
      </nav>
    </>
  );
}

export default Feed;
