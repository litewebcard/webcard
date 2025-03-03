import React, {useContext, useState,useEffect}from 'react';
import {auth} from '../firebase';

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
const [currentUser, setCurrentUser] = useState("");

//set user on page load and unsubcribe when user is close the page 
useEffect(()=>{
 const unsubscribe = auth.onAuthStateChanged(user => {
    setCurrentUser(user);
});

 return unsubscribe;
},[])

//sign up user
function signup(email,password){
    return auth.createUserWithEmailAndPassword(email,password);
}

function login(email,password){
    return auth.signInWithEmailAndPassword(email,password);
}
function logout(){
    return auth.signOut();
}

function resetPassword(email){
    return auth.sendPasswordResetEmail(email);
}

const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}



