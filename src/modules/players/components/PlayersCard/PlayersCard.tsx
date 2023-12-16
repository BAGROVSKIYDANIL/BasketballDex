import { FC } from "react";
import { CardsPlayersItemProps } from '../../interfaces/interface';
import { useAppSelector } from "../../../../common/hooks/redux.hook";
import { useAppDispatch } from "../../../../common/hooks/redux.hook";
import { useEffect } from "react";
import { getTeamCard } from "../../../teams/asyncAction";

import './PlayersCards.scss'

const PlayersCard: FC<CardsPlayersItemProps> = ({avatarUrl, name, number, team}) => 
{
    const dispatch = useAppDispatch();
    const {arrTeams, selectedTeam} = useAppSelector((state) => state.players) 
    const arrName:any = arrTeams.find((item) => item.id === team)
    const teamName = arrName ? arrName.value : null
    const image = `http://dev.trainee.dex-it.ru${avatarUrl}`
    const renderCard = selectedTeam.length === 0 ? true : selectedTeam.some((item) => item === teamName) ? true : false
    
    
    useEffect(() =>
    {
        dispatch(getTeamCard())
    }, [dispatch])


    return (

        renderCard ?
                <li className="cards__item">
            <div className="cards__wrapper">
                <img src={image} alt="player" />
            </div>
            <div className="cards__text">
                <div className="cards__name">
                    {name} <span>#{number}</span>
                </div>
                <div className="cards__team">
                    {teamName}
                </div>
            </div>
        </li>
        : null
    );
};

export default PlayersCard;