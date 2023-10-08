import {useSelector} from 'react-redux'
import { Reducer } from 'react';
import { RootState } from '../../../../core/redux/store';

import './MenuBurger.scss'

const MenuBurger: React.FC = () => 
{

    const overlay = useSelector((state: RootState) => state.app.overlay);
    const domNodeRef = useSelector((state: RootState) => state.app.domNodeRef);

    const openMenu = () =>
    {
            domNodeRef?.current.classList.toggle('active');
            overlay?.current.classList.toggle('visible');
    }


    return(
        <div
        onClick={openMenu}
        className="burger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}

export default MenuBurger;