import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../common/hooks/redux.hook";

const PrivateRoute  = () => {

    const auth  = useAuth();
    console.log(auth)
    return (
        auth ?<Outlet/> : <Navigate to="/"/>
        
        // auth ?<Navigate to='/PageEmptyTeam'/> : <Navigate to="/"/>
    );
};

export default PrivateRoute;