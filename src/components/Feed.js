import React, { useReducer } from 'react'
import Users from './Users'
import {
    Navbar,
    NavbarBrand

} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chirps from './Chirps'
import Sign from './Sign'
import Create from './Create'
import { Route, Link } from "react-router-dom"


function Feed() {
    return (
        <>


            <section>

                <Route exact path='/feed' component={Chirps} />
                <Route exact path='/create' component={Create} />
                <Route exact path="/signup" component={Sign} />
                <Route exact path='/users' component={Users} />



            </section>

            <br />
            <br />
            <nav>
                <Navbar color="light" light expand="md">
                    <Link to='/create'>
                        <NavbarBrand href="/create">Chirp Out</NavbarBrand>
                    </Link>
                    <NavbarBrand href="/users">Users</NavbarBrand>
                    <Link to='/signup'>
                        <NavbarBrand href="/signup">Sign Up</NavbarBrand>
                    </Link>


                </Navbar>
            </nav>
        </>
    )
}

export default Feed