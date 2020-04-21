
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
// import { Navbar, Button, Nav, NavbarBrand } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Chirps from "./Chirps";
import Sign from "./Sign";
import Create from "./Create";
import { Button, Form, FormGroup, Label, Input, Col, Navbar, Nav, NavbarBrand } from 'reactstrap';
import { Route, Link } from "react-router-dom";
import { Breakpoint, setDefaultBreakpoints } from 'react-socks';
import '../App.css'

function Feed() {
<<<<<<< HEAD
  setDefaultBreakpoints([
    { xs: 0 },
    { s: 376 },
    { m: 426 },
    { l: 769 },
    { xl: 1025 }
  ]);
  return (
    <>
   
 

      <section>
        <Route exact path="/feed" component={Chirps} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/signup" component={Sign} />
        <Route exact path="/users" component={Users} />
      </section>

      <br />
      <br />
      <Breakpoint medium only>
    <>
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
        </>
      </Breakpoint>
      <ul>
    {setDefaultBreakpoints}
    </ul>
        <br></br>
      <nav className="bottomNav">
        <Navbar color="secondary" light expand="md"  >
          <Link to="/create">
            <NavbarBrand href="/create"><i class="fas fa-play"></i></NavbarBrand>
          </Link>
          <NavbarBrand href="/users"><i class="fas fa-users"></i></NavbarBrand>
          <Link to="/signup">
            <NavbarBrand href="/signup"><i class="fas fa-sign-in-alt"></i></NavbarBrand>
          </Link>
        </Navbar>
      </nav>
    </>
  );
=======
    return (
        <>


            <section>
                <Route exact path="/feed" component={Chirps} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/signup" component={Sign} />
                <Route exact path="/users" component={Users} />
            </section>

            <br />
            <br />

            <nav className="bottomNav">
                <Navbar color="secondary" light expand="md"  >
                    <Link to="/create">
                        <NavbarBrand href="/create"><i class="fas fa-play"></i></NavbarBrand>
                    </Link>
                    <Link to='/users'>
                        <NavbarBrand href="/users"><i class="fas fa-users"></i></NavbarBrand>
                    </Link>
                    <Link to="/signup">
                        <NavbarBrand href="/signup"><i class="fas fa-sign-in-alt"></i></NavbarBrand>
                    </Link>
                </Navbar>
            </nav >
        </>
    );

>>>>>>> origin/master
}

export default Feed;
