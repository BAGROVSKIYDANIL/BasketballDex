import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../core/redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useAuth = () =>
{
    return !! localStorage.getItem('token')
    // return !! sessionStorage.getItem('token')
}