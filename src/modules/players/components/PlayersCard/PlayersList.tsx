import { useEffect } from 'react';
import { getPlayerCard } from '../../asyncAction';
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/redux.hook';
import PlayersCard from './PlayersCard';
import { Link } from 'react-router-dom';

const PlayersList = () => {

    const dispatch = useAppDispatch();
    const {arrPlayersCard, pageIndex, selectedTeam} = useAppSelector((state) => state.players)
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
                    currentCardPlayer.map((item: any, index: any) =>
                    {
                        return(
                                    <PlayersCard avatarUrl={item.avatarUrl}
                                    name={item.name}
                                    team={item.team}
                                    number={item.number}
                                    key={item.id}
                                    index={index}
                                    />
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default PlayersList;