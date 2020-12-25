import React, { useState } from 'react';
import { Form, Col, Row ,Accordion, Card, Button} from 'react-bootstrap';
import {MdAdd,MdDelete} from 'react-icons/md';

function CaourselWithImageForm() {
    const [caourselWithImageItems, setCaourselWithImageItems] = useState([{
        "image": "",
        "altText": "",
        "title": "",
        "caption": ""
    }])
    const addCaourselWithImageItem = () => {
        const newCaourselWithImageItems = [...caourselWithImageItems];
        newCaourselWithImageItems.push({
            "image": "",
            "altText": "",
            "title": "",
            "caption": ""
        });
        setCaourselWithImageItems([...newCaourselWithImageItems]);
    }

    const removeCaourselWithImageItem = (index) => {
        const newCaourselWithImageItems = caourselWithImageItems.map(caourselWithImageItem => ({ ...caourselWithImageItem }));
        newCaourselWithImageItems.splice(index, 1);
        setCaourselWithImageItems([...newCaourselWithImageItems]);
    }
    return (
       
        <>
         
            
                <Accordion  size="sm" defaultActiveKey="0" className="mb-2">
                {
                    caourselWithImageItems.map((caourselWithImageItem, index) => {
                    return   <Card size="sm" className="flex " key={index}>
                        <Card.Header  className="flex flex-row justify-between items-center p-0">
                          <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                            Caoursel {index+1}
                          </Accordion.Toggle>
                          <div className="flex flex-row" >
                                <span className="mx-1 cursor-pointer" onClick={addCaourselWithImageItem}><MdAdd /></span>
                                {caourselWithImageItems.length > 1 && <span className="mx-1 cursor-pointer"
                                    onClick={() => removeCaourselWithImageItem(index)}>
                                    <MdDelete />
                                </span>
                                }
                          </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey={index.toString()}>
                          <Card.Body>
                          <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCaourselImage">
                                        <Form.Label column="sm">Upload Image</Form.Label>
                                        <Form.File size="sm" id="formProfileImage" />
                                    </Form.Group>    
                                </Form.Row>
                                <Form.Row>
                                <Form.Group as={Col} controlId="formGridAltText">
                                        <Form.Label column="sm">Alt Text</Form.Label>
                                        <Form.Control size="sm" type="text" placeholder="Enter Alternate text" />
                                    </Form.Group>
                                </Form.Row>    
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCaourselTitle">
                                        <Form.Label column="sm">Title</Form.Label>
                                        <Form.Control size="sm" type="text" placeholder="Enter Title" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                <Form.Group as={Col} controlId="formGridCaourselCaption">
                                    <Form.Label column="sm">Caption</Form.Label>
                                    <Form.Control className="w-full" as="textarea" size="sm" placeholder="Provide caption about image" rows={3} />
                                 </Form.Group>
                                    
                                </Form.Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>




                       {/* <div className="flex flex-col border border-black rounded p-2 m-2" key={index}>
                            <div className="flex flex-row justify-between items-center px-2 bg-gray-200">
                                <div>Caoursel {index+1}</div>
                                <div className="flex flex-row" >
                                <span className="mx-1 cursor-pointer" onClick={addCaourselWithImageItem}><MdAdd /></span>
                                {caourselWithImageItems.length > 1 && <span className="mx-1 cursor-pointer"
                                    onClick={() => removeCaourselWithImageItem(index)}>
                                    <MdDelete />
                                </span>
                                }
                                </div>
                            </div>
                            <div>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCaourselImage">
                                        <Form.Label column="sm">Upload Image</Form.Label>
                                        <Form.File size="sm" id="formProfileImage" />
                                    </Form.Group>    
                                </Form.Row>
                                <Form.Row>
                                <Form.Group as={Col} controlId="formGridAltText">
                                        <Form.Label column="sm">Alt Text</Form.Label>
                                        <Form.Control size="sm" type="text" placeholder="Enter Alternate text" />
                                    </Form.Group>
                                </Form.Row>    
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCaourselTitle">
                                        <Form.Label column="sm">Title</Form.Label>
                                        <Form.Control size="sm" type="text" placeholder="Enter Title" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                <Form.Group as={Col} controlId="formGridCaourselCaption">
                                    <Form.Label column="sm">Caption</Form.Label>
                                    <Form.Control className="w-full" as="textarea" size="sm" placeholder="Provide caption about image" rows={3} />
                                 </Form.Group>
                                    
                                </Form.Row>
                            </div>
                            </div>*/}
                    })
                }



            </Accordion>
            
        </>
    )
}

export default CaourselWithImageForm
