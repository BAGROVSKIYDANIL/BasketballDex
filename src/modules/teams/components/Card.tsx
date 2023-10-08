import {FC}  from "react"
import './Cards.scss'
export interface CardsTeamsItemProps {
    imageUrl: string,
    title: string
}
const CardsTeamsItem: FC<CardsTeamsItemProps> = ({imageUrl, title}) =>
{
    return(
        <li className="cards__item">
            <div className="cards__wrapper">
                <img src={imageUrl} alt="Porland" />
            </div>
            <div className="cards__text">
                <div className="cards__name">
                    {title}
                </div>
                <div className="cards__name">
                    {title}
                </div>
            </div>
        </li>
    )
}

export default CardsTeamsItem