import React,{useRef, useState} from 'react'
import {Form, Button, Card,Alert} from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()

    const [error, setError]  = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
           return setError('Password do not match');
        }
        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push(`/${emailRef.current.value.split('@')[0]}`);

        }
        catch(e){
            //console.log("error",e);
           setError(e.message);
        }
        finally{
            setLoading(false);
        }
        
        
    }

    return (
        <div className="w-72 flex flex-col mx-auto">
        <Card className = "w-100">
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger" onClose={() => setError('')} dismissible><p>{error}</p></Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type = "password" ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100 " type="submit"> 
                       Sign Up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
            Already have a account? <Link to="/login">Log In</Link>
        </div>
        </div>
    )
}

export default SignUp

