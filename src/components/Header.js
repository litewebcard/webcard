import React, {useState,useEffect}from 'react';
import { Nav, Navbar, Form, FormControl, Button,Alert } from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext'

function Header({pages}) {

    const {currentUser,logout} =  useAuth();
    const [error,setError] = useState("");
    const history = useHistory();
   

    useEffect(() => {
        return () => {
            setError('');
        }
    }, [])

   /* async function handleLogout(){
        setError('');
       
        try{
            await logout();
            history.push('./login');
        }
        catch(e){
            setError("Something went wrong while logout.");
            
        }
        finally{

        }
    }

    function handleEdit(){
        setError('');
       
        try{
            history.push('./form');
        }
        catch(e){
            setError("Something went wrong while navigating to form.");
            
        }
        finally{

        }
    }*/

    function handleSearchEmail(){
        
        setError('');
       
        const searchEmail = document.getElementById('searchCardEmail');
        let searchEmailVal ='';
        if(searchEmail.value == ''){
            setError("Enter Email id or username");
           
            return;
        }
        searchEmailVal = searchEmail.value.indexOf('@')!=-1 ? 
                          searchEmail.value.split('@')[0] : searchEmail.value;
        history.push(`/${searchEmailVal}`);                 
    }

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="">LiteWebCard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/*<Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>*/}
                    
                </Nav>
                
                <Nav className="mr-3 items-center lg:h-8">
                    <Form className="w-full h-8 flex flex-row mr-2">
                        <FormControl id="searchCardEmail" type="text" size="sm" placeholder="Enter Email id or username" className="mr-sm-2" />
                        <Button size="sm" variant="outline-light" onClick={handleSearchEmail}>Search</Button>
                    </Form>
                    {currentUser ? 
                    <>
                     <Navbar.Text className="mx-1"><a href="">{currentUser.email}</a></Navbar.Text>
                     <Nav.Link as={Link} className="text-center w-24 text-sm" to={{
                        pathname: '/form',
                        aboutprops: {
                            "pages": pages
                        }}}>Edit
                        </Nav.Link>
                     <Nav.Link as={Link} className="text-center w-32 text-sm" to="/logout">
                         Log Out
                     </Nav.Link>
                     </>
                     :
                     <>
                     <Nav.Link as={Link} className="w-24 text-center text-sm" to="/login">Log In</Nav.Link>
                     <Nav.Link as={Link} className="w-24 text-center text-sm" to="/signup">Sign Up</Nav.Link>
                     </>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div>
             {error && <Alert variant="danger" onClose={() => setError('')} dismissible><p>{error}</p></Alert>}
        </div>
        </>

    )

}

export default Header
