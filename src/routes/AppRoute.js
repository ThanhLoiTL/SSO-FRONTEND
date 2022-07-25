import App from "../App"
import { Outlet } from "react-router-dom";


const AppRoute = () => {
    return (
        <>
            <App></App>
            <Outlet />
        </>
    )
}

export default AppRoute;