import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { isOpen } from '../../../../core/redux/actions';

import './MenuBurger.scss'

const MenuBurger: React.FC = () => 
{
    const dispatch = useAppDispatch();
    const {open} =useAppSelector((state) => state.app)

    const openMenus = () =>
    {
            if(open)
            {
                dispatch(isOpen(false))
            }else
            {
                dispatch(isOpen(true))
            }

    }


    return(
        <div
        onClick={openMenus}
        className="burger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}

export default MenuBurger;