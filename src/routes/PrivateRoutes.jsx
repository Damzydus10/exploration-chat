import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const PrivateRoutes = ({children}) => {
  const {currentuser} = UserAuth();

    if (!currentuser){
        return <Navigate to = "/" replace= {true} />
    }

  return children
}

