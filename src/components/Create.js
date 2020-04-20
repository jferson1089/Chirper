import React from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

function Create() {

    return (
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
    )
}

export default Create