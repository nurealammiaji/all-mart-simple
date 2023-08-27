import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthProvider = createContext();

const Providers = ({children}) => {

    const [user, setUser] = useState(null);

    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
        onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
    }, [])

    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        registration,
        login,
        logout,
    }

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Providers;