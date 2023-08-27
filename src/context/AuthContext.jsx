import { createContext, useState, useContext, useEffect } from "react"; 
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext ();
export const AuthProvider = ({children}) => {
    const [currentuser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //signing with google
    const signinwithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }
//sign out
const logout = () => signOut(auth);

    const value = {
        currentuser,
        setCurrentUser, 
        signinwithGoogle,
        logout
    }

    //set current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
             });

            return unsubscribe;
    }, []);


    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}
export const UserAuth = () => {
    return useContext(AuthContext); 
}