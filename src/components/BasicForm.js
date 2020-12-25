import React from 'react'
import { Form,Col,Row } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'

function BasicForm() {
    const {currentUser} = useAuth();
    return (
        <>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label column="sm">First Name</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Enter First Name" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label column="sm">Last Name</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Enter Last Name" required/>
                    </Form.Group>
                </Form.Row>    
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPhone1">
                        <Form.Label column="sm">Contact No</Form.Label>
                        <Form.Control size="sm" type="tel" placeholder="0123456789" pattern="[0-9]{10}" required/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone2" >
                        <Form.Label column="sm">Contact No 2</Form.Label>
                        <Form.Control size="sm" type="tel" placeholder="0123456789" pattern="[0-9]{10}" />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label column="sm">Email</Form.Label>
                    <Form.Control size="sm" placeholder={currentUser.email} disabled />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label column="sm">Upload Profile Image</Form.Label>
                    <Form.File size="sm" id="formProfileImage" />
                </Form.Group>
                
              


            </Form>
        </>
    )
}

export default BasicForm
