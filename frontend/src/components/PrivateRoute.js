import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ children, redirectTo }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!window.localStorage.getItem("jwt")) {
          navigate("/login");
        }
        if(window.localStorage.getItem("jwt") && ( redirectTo === "/login" || redirectTo === "/register")){
          navigate("/");
        }
      }, []);
    return children;
}

export default PrivateRoute;