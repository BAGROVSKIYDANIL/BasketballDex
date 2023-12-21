import { useEffect } from 'react';
import { getPlayerCard } from '../../asyncAction';
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/redux.hook';
import PlayersCard from './PlayersCard';


const PlayersList = () => {

    const dispatch = useAppDispatch();
    const {arrPlayersCard, pageIndex, selectedTeam} = useAppSelector((state) => state.players)
    // const currentCardPlayer = arrPlayersCard.slice(pageIndex.startIndex, pageIndex.endIndex)
    const currentCardPlayer = selectedTeam.length === 0 ? 
    arrPlayersCard.slice(pageIndex.startIndex, pageIndex.endIndex) : arrPlayersCard

    useEffect(() =>
    {
        dispatch(getPlayerCard())
    }, [dispatch, pageIndex])

    return (
        <div className="cards">
            <ul className="cards__grid">
                {
                    // arrPlayersCard && Array.isArray(arrPlayersCard)?
                    currentCardPlayer.map((item: any, index: any) =>
                    {
                        return(
                            <PlayersCard avatarUrl={item.avatarUrl}
                                         name={item.name}
                                         team={item.team}
                                         number={item.number}
                                         key={index}
                                         />
                        )
                    })
                    // : null
                }
            </ul>
        </div>
    );
};

export default PlayersList;