import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logOut=()=>{
        return signOut(auth);
    }
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, [])
    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;