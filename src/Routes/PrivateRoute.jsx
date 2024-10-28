import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import LoadingEffect from "../components/Shared/LoadingEffect/LoadingEffect"

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <LoadingEffect/>
    }
    if(user){
        return children
    }
  return <Navigate to="/login" state={{from:location}} replace/>
}

PrivateRoute.propTypes={
    children: PropTypes.node.isRequired,  
 
}

export default PrivateRoute