import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'


function CompanyForm() {
    return (
        <>
            <Form>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCompanyName">
                        <Form.Label column="sm">Company Name</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Enter Company Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridProfession">
                        <Form.Label column="sm">Profession</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Enter Profession" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridControlTextarea">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" placeholder="Provide description about for work" rows={3} />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label column="sm">Address</Form.Label>
                    <Form.Control size="sm" placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label column="sm">Address 2</Form.Label>
                    <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label column="sm">City</Form.Label>
                        <Form.Control size="sm"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label column="sm">State</Form.Label>
                        <Form.Control size="sm" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label column="sm">Zip</Form.Label>
                        <Form.Control size="sm"/>
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Get Google Maps Link" />
                </Form.Group>
                <Form.Group>
                    <Form.Label column="sm">Upload Company Logo</Form.Label>
                    <Form.File size="sm" id="formCompanyLogo" />
                </Form.Group>


            </Form>
        </>
    )
}

export default CompanyForm
