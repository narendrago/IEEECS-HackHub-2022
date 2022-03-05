import React,{useContext,useState,useEffect} from 'react';
import { auth } from '../firebase';

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser]=useState('');
    
    useEffect(() => {
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
        })
        return unsubscribe;
    },[currentUser])

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
        
      }
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
      }
    
      function logout() {
        return auth.signOut()
      }
     
    
    const value={
        currentUser,
        login,
        signup,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    )
}