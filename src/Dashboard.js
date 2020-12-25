import React,{useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function Dashboard() {
    const [error,setError] = useState("");
    const {currentUser,logout} =  useAuth();
    const history = useHistory();
   // console.log("currentUser...",currentUser);

    async function handleLogout(){
        setError('');
        try{
            await logout();
            history.push('./login');
        }
        catch(e){
            setError("Something went wrong while logout.")
        }
        finally{

        }
    }
    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email : </strong>{currentUser.email}
            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log out</Button>
            
        </div>
        </>
    )
}

export default Dashboard
