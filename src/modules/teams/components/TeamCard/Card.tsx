import {FC}  from "react"
import { CardsTeamsItemProps } from "../../interfaces/interface"


import './Cards.scss'

const CardsTeamsItem: FC<CardsTeamsItemProps>= ({imageUrl, name, year, id}) =>
{  

    const image = `http://dev.trainee.dex-it.ru${imageUrl}`


    return(
            <li className="team-cards__item">
                <div className="team-cards__wrapper">
                    <img src={image} alt="Porland" />
                </div>
                <div className="team-cards__text">
                    <div className="team-cards__name">
                        {name}
                    </div>
                    <div className="team-cards__year">
                        Year of foundation: {year}
                    </div>
                </div>
            </li>
    )
}

export default CardsTeamsItem