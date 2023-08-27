import { getAuth } from "firebase/auth";
import { createContext } from "react";

export const AuthProvider = createContext();
const auth = getAuth();

const Providers = ({children}) => {

    const user = {displayName: "Nure Alam"};

    const authInfo = {
        user,
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Providers;