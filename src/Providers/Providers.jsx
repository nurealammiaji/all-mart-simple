import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthProvider = createContext();

const Providers = ({children}) => {

    const user = {displayName: "Nure Alam"};

    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        registration,
        login,
    }

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Providers;