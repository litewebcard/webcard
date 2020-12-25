import React,{useRef, useState} from 'react'
import {Form, Button, Card,Alert} from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'
import {Link} from 'react-router-dom'

function Login() {
    const emailRef = useRef()
  
    
    const {resetPassword} = useAuth()

    const [error, setError]  = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage]  = useState('');

   
    async function handleSubmit(event){
        event.preventDefault();
       
        try{
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
           // history.push(`/${emailRef.current.value.split('@')[0]}`)
           setMessage('Please check your inbox for further information');
        }
        catch(e){
          
            const codeArr = e.code && e.code.split('/');
            const code = codeArr.length > 1 && codeArr[1];
            
            if(code){
                switch(code){
                    case "user-not-found":
                        setError('Invalid username');
                        break;
                    default:
                        setError('Failed to reset password');
                        break;
                }
            }else{
                setError('Failed to reset password');
            }
            
        }
        finally{
            setLoading(false);
        }
        
        
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Reset Password</h2>
                {message && <Alert variant="information">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100 " type="submit"> 
                      Reset Password
                    </Button>
                </Form>
                <div className = "w-100 text-center mt-3">
                    <Link to="/login">Login</Link>
                </div>
            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign up</Link>
        </div>
        </>
    )
}

export default Login

