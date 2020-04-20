import React, { useEffect, useState } from 'react'
import {
    Card, Col, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Row
} from 'reactstrap';
import UserChirps from './UserChirps'
import { getUserByUsername } from '../service/api-helper';




function Users() {

    const [user, setUser] = useState([])

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getUserByUsername('adam')
            console.log('get by username?', resp)
            setUser(resp)

        }
        makeAPICall()
    }, [])

    const renderUser = user.map((user, index) => {
        return (
            <li key={index}>
                <Col>
                    <Card body outline color="warning">
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{user.username}</CardTitle>
                            <CardSubtitle>Followers : {user.followers}  Following : {user.following}</CardSubtitle>
                            <CardText>User ID : {user._id}</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Row></Row>
                    <Card body outline color='danger'>
                        <UserChirps />
                    </Card>
                </Col>

            </li>
        )
    })


    return (
        <>
            {renderUser}
            {/* <Col>
                <Card body outline color="warning">
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle>User Id? Or Real Name</CardSubtitle>
                        <CardText>Something can go here?</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Row></Row>
                <Card body outline color='danger'>
                    <UserChirps />
                </Card>
            </Col> */}
        </>
    )
}

export default Users