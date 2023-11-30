import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../core/redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useAuth = () =>
{
    // const {isLogged} = useAppSelector((state) => state.app)
    // const {isLogged} = useAppSelector((state) => state.auth)
    // return isLogged;
    return !! localStorage.getItem('token')
}