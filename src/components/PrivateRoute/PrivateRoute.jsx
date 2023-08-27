import { useContext } from "react";
import { AuthProvider } from "../../Providers/Providers";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthProvider);

    if(loading) {
        return <div>Loading ...</div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;