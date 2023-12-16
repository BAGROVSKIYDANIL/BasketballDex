import { useEffect } from 'react';
import { getPlayerCard } from '../../asyncAction';
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/redux.hook';
import PlayersCard from './PlayersCard';


const PlayersList = () => {

    const dispatch = useAppDispatch();
    const {arrPlayersCard} = useAppSelector((state) => state.players)
    console.log(arrPlayersCard)
    useEffect(() =>
    {
        dispatch(getPlayerCard())
    }, [dispatch])
    console.log(arrPlayersCard)
    return (
        <div className="cards">
            <ul className="cards__grid">
                {
                    arrPlayersCard && Array.isArray(arrPlayersCard)?
                    arrPlayersCard.map((item: any, index: any) =>
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
                    : null
                }
            </ul>
        </div>
    );
};

export default PlayersList;