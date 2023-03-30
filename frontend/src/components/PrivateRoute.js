import { Navigate } from "react-router-dom"

const PrivateRoute = ({token, children}) => {
  if(token !== "")
    return children;
  else
    return <Navigate to="/login" replace />
}

export default PrivateRoute;