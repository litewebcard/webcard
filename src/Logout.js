import React,{useState,useEffect} from 'react'
import {useAuth} from './contexts/AuthContext'
import {useHistory} from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function Logout() {
    const {logout} =  useAuth();
    const [error,setError] = useState("");
    const history = useHistory();

    useEffect(() => {
        async function handleLogout(){
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
        handleLogout();
    }, [])
    
    return (
        <div>
             {error && <Alert variant="danger" onClose={() => setError('')} dismissible><p>{error}</p></Alert>}
           
        </div>
    )
}

export default Logout
