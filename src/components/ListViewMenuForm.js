import React,{useState} from 'react'
import { Form, Col, Row } from 'react-bootstrap';
import {MdAdd,MdDelete} from 'react-icons/md';

function ListViewMenuForm() {
    const [menuList,setMenuList] = useState([{"text":""}]);
 
    const addMenuItem = () =>{
        const newMenuList =[...menuList];
        newMenuList.push({"text":""});
        setMenuList([...newMenuList]);
    }

    const removeMenuItem = (index)=>{
        const newMenuList = menuList.map(menuItem => ({...menuItem}));
        newMenuList.splice(index,1);
        setMenuList([...newMenuList]);
    }

    return (
        <>
         {
           menuList.map((menuItem,index) =>{
            return <Form.Row key={index}>
            <Form.Group className="flex flex-row justify-betwen items-center w-full " controlId="formGridMenuList">
                <Form.Control size="sm" type="text" placeholder="Enter Text" />
                <div className="px-2 flex flex-row justify-evenly mx-2"> 
                    <span className="mx-1 cursor-pointer" onClick={addMenuItem}><MdAdd /></span>
                    {menuList.length > 1 && <span className="mx-1 cursor-pointer" onClick={()=>removeMenuItem(index)}>
                        <MdDelete />
                    </span>
                    }
                </div>
            </Form.Group>
            </Form.Row>
           })  
         
        }
        </>
    )
}

export default ListViewMenuForm
