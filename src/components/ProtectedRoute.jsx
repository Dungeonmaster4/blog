import { Outlet } from "react-router-dom"
import Loginpage from "../pages/Loginpage"

export const ProtectedRoute = ({isAuth}) => {
    return isAuth ? <Outlet/> : <Loginpage />
}