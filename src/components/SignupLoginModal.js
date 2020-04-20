import React from 'react'
import { Col, Button, Card } from 'reactstrap';
import Login from './Login'
import Sign from './Sign'
import { Route, Link } from 'react-router-dom'

function slModal() {
    return (
        <>
            <Col>
                <Card body outline color="secondary">
                    <div className="cardButtons">
                        <Link to='/signup'>
                            <Button color="warning">Sign Up</Button>{' '}
                        </Link>

                        <Link to='/login'>
                            <Button color="danger">Log In</Button>{' '}
                        </Link>
                    </div>
                    <hr />
                    <Route exact path='/signup' component={Sign} />
                    <Route exact path='/login' component={Login} />
                </Card>
            </Col>
        </>
    )
}
export default slModal