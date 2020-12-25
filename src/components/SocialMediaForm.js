import React,{useEffect} from 'react'
import { Form, Col, Row } from 'react-bootstrap'

function SocialMediaForm() {
    const socialMediaForums = ["Facebook","Instagram","Linkedin","Youtube","Amazon","Github","Personal Website"]
    
    
    return (
        <>
            <Form>
               <Form.Row>
                    <Form.Group as={Col} controlId="formGridWhatsappNumber">
                        <Form.Label column="sm">Whatsapp</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Enter Whatsapp number" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridWhatsappMessage">
                        <Form.Label column="sm">Whatsapp Default Message</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Enter Whatsapp default message" />
                    </Form.Group>
                </Form.Row>
                {
                    socialMediaForums.map((socialMediaForum,index) =>{
                        let placeHolderData = `Enter ${socialMediaForum} Link`;
                        let controlId = `formGrid${socialMediaForum}`
                        return <Form.Row key={index}>
                        <Form.Group as={Col} controlId={controlId}>
                            <Form.Label column="sm">{socialMediaForum}</Form.Label>
                            <Form.Control size="sm" type="text" placeholder={placeHolderData} />
                        </Form.Group>
                    </Form.Row>
                    })
                }
                

                


            </Form>
        </>
    )
}

export default SocialMediaForm
