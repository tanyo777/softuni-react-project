import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const ProtectedRoute = ({ children }) => {
    const userContext = useContext(UserContext);
    console.log(userContext);
    if(!userContext.user.accessToken) {
        return <Navigate to="/login"/>
    }
    return children;

};

export default ProtectedRoute;