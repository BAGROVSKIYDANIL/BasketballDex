import {useAppDispatch, useAppSelector} from '../../../../common/hooks/redux.hook';
import { getTeamCard } from '../../asyncAction';
import { useEffect } from 'react';
import { TeamState } from '../../interfaces/interface';
import CardsTeamsItem from './Card';

const Lists = () =>
{
    const dispatch = useAppDispatch();
    const {teamArrCard, pageIndex}: TeamState = useAppSelector((state) => state.team) 
    const currentCardTeam = teamArrCard.slice(pageIndex.startIndex, pageIndex.endIndex)


    useEffect(() =>
    {
        dispatch(getTeamCard())
    }, [dispatch, pageIndex])

    return (

            <div className="team-cards">
                <ul className="team-cards__grid">
                        {
                            // teamArrCard && Array.isArray(teamArrCard)?
                            currentCardTeam.map((item:any, index:any) => {
                                return (
                                    <CardsTeamsItem imageUrl={item.imageUrl} 
                                                    name={item.name} 
                                                    year={item.foundationYear} 
                                                    key={index} />
                                        )})
                            // : null
                        }
                    </ul>
            </div>
    )
}

export default Lists;