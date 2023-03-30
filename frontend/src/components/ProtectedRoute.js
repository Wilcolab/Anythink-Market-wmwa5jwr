import { Navigate } from "react-router-dom"

const ProtectedRoute = ({token, children}) => {
  if(token !== "")
    return children;
  else
    return <Navigate to="/login" replace />
}

export default ProtectedRoute;