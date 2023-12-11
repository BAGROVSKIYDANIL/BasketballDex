import {useAppDispatch, useAppSelector} from '../../../../common/hooks/redux.hook';
import { getTeamCard } from '../../asyncAction';
import { useEffect } from 'react';
import { TeamState } from '../../reducer';
import CardsTeamsItem from './Card';

const Lists = () =>
{
    const dispatch = useAppDispatch();
    const {arrCard}: TeamState = useAppSelector((state) => state.team)
    
    useEffect(() =>
    {
                dispatch(getTeamCard())
    }, [dispatch])

    return (

            <div className="team-cards">
                <ul className="team-cards__grid">
                        {
                            arrCard && Array.isArray(arrCard)?
                            arrCard.map((item:any, index:any) => {
                                return (
                                    <CardsTeamsItem imageUrl={item.imageUrl} 
                                                    name={item.name} 
                                                    year={item.foundationYear} 
                                                    key={index} />
                                        )})
                            : null
                        }
                    </ul>
            </div>
    )
}

export default Lists;