import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasLoggedIn, setHasLoggedIn] = useState(false);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
            return user;
        });
    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password).then((res) => {
            setHasLoggedIn(true);
            setUser(res.user);
            setLoading(false);
            return res;
        });
    };

    const logOut = () => {
        setLoading(true);
        setHasLoggedIn(false);
        return signOut(auth).then(() => {
            setUser(null);
            setLoading(false);
        });
    };

    const updateUserProfile = (profile) => {
        if (!auth.currentUser) return Promise.reject("No user logged in");
        return updateProfile(auth.currentUser, profile);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (hasLoggedIn) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [hasLoggedIn]);

    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        updateUserProfile,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
