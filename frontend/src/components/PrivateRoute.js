import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!window.localStorage.getItem("jwt")) {
          navigate("/login");
        }
      }, []);
      
    return children;
}

export default PrivateRoute;