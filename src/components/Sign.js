import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Sign() {

    return (
        <>
            <Form>
                <Col>
                    <Col>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail"></Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Select a Username" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword"></Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Enter a Password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAddress"></Label>
                            <Input type="text" name="address" id="exampleAddress" placeholder="Paste a valid Image URL" />
                        </FormGroup>
                        <Button>Sign in</Button>
                    </Col>
                </Col>
            </Form>
        </>

    )
}

export default Sign