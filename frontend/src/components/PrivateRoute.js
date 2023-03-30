import { Navigate } from "react-router-dom"

const PrivateRoute = ({token, children}) => {
  console.log(token)
  if(token === null || token === "")
    return <Navigate to="/login" replace />
  else
    return children;
}

export default PrivateRoute;