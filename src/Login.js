import React,{useRef, useState, useEffect} from 'react'
import {Form, Button, Card,Alert} from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    //mountRef is use to check if dismount is caused before async call finished.Inorder to avoid memory leak
    const mountedRef = useRef(true)
    
    const {login} = useAuth()

    const [error, setError]  = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();
       
        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            if(!mountedRef.current) return null;
           // history.push(`/${emailRef.current.value.split('@')[0]}`)
           history.push('/');
        }
        catch(e){
            const codeArr = e.code && e.code.split('/');
            const code = codeArr.length > 1 && codeArr[1];
            
            if(code){
                switch(code){
                    case "user-not-found":
                    case "wrong-password":
                        setError('Invalid username or password');
                        break;
                    default:
                        setError('Error while log in');    
                        break;
                }
            }else{
                setError('Error while log in'); 
            }
            
        }
        finally{
            setLoading(false);
        }
        
        
    }

    useEffect(() => {
       
        return () => {
            mountedRef.current = false;
        }
    }, [])

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
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
                    
                    <Button disabled={loading} className="w-100 " type="submit"> 
                      Log In
                    </Button>
                </Form>
                <div className = "w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password?</Link>
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

