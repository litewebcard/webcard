import React,{useState, useRef} from 'react'
import { Overlay, Popover, Button,Form } from 'react-bootstrap';
import {FaCog} from 'react-icons/fa';

function PageSettings({ pages }) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    return (

        <div ref={ref}>
           <FaCog className="cursor-pointer" onClick={handleClick}/>
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Title as="h3">Select Page</Popover.Title>
                    <Popover.Content>
                        {
                            pages.map((page,index)=>{
                                if(page != "Basic Form" && page!= "Company Form" && page!="Review"){
                                    return <Form.Check 
                                 key={index}   
                                type="checkbox"
                                id="page-checkbox"
                                label={page}
                              />
                                }
                                
                            })
                        }
                    </Popover.Content>
                </Popover>
            </Overlay>
        </div>

    )
}

export default PageSettings

