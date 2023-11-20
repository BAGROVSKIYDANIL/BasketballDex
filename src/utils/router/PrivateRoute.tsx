import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../common/hooks/redux.hook";

const PrivateRoute  = () => {

    const auth  = useAuth();

    return (
        auth ?<Outlet/> : <Navigate to="/"/>
    );
};

export default PrivateRoute;