import Bol from '../../../../assets/teamIcons/bol-bol.png'
// import Hampton from '../../../../assets/teamIcons/Hampton.png'
// import Vlatko from '../../../../assets/teamIcons/Vlatko.png'
// import Greg from '../../../../assets/teamIcons/Greg.png'
// import Gary from '../../../../assets/teamIcons/Gary.png'
// import Jamal from '../../../../assets/teamIcons/Jamal.png'
// import Zeke from '../../../../assets/teamIcons/Zeke.png'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/redux.hook'
import { getPlayerCard } from '../../../players/asyncAction'
import { useParams } from 'react-router-dom'

import './TeamRoster.scss'

const TeamRoster = () =>
{
    const dispatch = useAppDispatch();
    const {arrPlayersCard} = useAppSelector((state) => state.players) 
    const {id} = useParams();
    const currentRoster: any = arrPlayersCard.filter(item => item.team === Number(id))
    const birthday = new Date(currentRoster)

    useEffect(() =>
    {
        dispatch(getPlayerCard())
    }, [dispatch])

    return(
        <div className="roster">
            <div className="roster__header">
                <span>Roster</span>
            </div>
            <div className="roster__body">
                <div className="roster__row">
                    <div className='roster__column1'>
                        <div className="roster__number">#</div>
                        <div className="roster__player">Player</div>                        
                    </div>
                    <div className='roster__column2'>
                        <div className="roster__height">Height</div>
                        <div className="roster__weight">Weight</div>
                        <div className="roster__age">Age</div>                        
                    </div>
                </div>
                {/* <div className="roster__row">
                    <div className='roster__column1'>
                        <div className="roster__number">10</div>
                        <div className="roster__player">
                            <div className="roster__img">
                                <img src={Bol} alt="" />
                            </div>
                            <div className="roster__info">
                                <span>Bol Bol</span>
                                <span>Centerforward</span>
                            </div>
                        </div>                        
                    </div>
                    <div className='roster__column2'>
                        <div className="roster__height">218 cm</div>
                        <div className="roster__weight">100 kg</div>
                        <div className="roster__age">21</div>                        
                    </div>                     
                </div> */}
                {
                    currentRoster.map((item:any, index:number) =>
                    {
                        const birthday = new Date(item.birthday)
                        const currentDate = new Date();
                        const age = currentDate.getFullYear() - birthday.getFullYear();
                        console.log(age)
                        return (
                         <div className="roster__row">
                            <div className='roster__column1'>
                                <div className="roster__number">{item.number}</div>
                                <div className="roster__player">
                                    <div className="roster__img">
                                        <img src={`http://dev.trainee.dex-it.ru${item.avatarUrl}`} alt="" />
                                    </div>
                                    <div className="roster__info">
                                        <span>{item.name}</span>
                                        <span>{item.position}</span>
                                    </div>
                                </div>                        
                            </div>
                            <div className='roster__column2'>
                                <div className="roster__height">{item.height}cm</div>
                                <div className="roster__weight">{item.weight}kg</div>
                                <div className="roster__age">{age}</div>                        
                            </div>                     
                        </div> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TeamRoster;