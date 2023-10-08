import { FC } from "react";
import './PlayersCards.scss'
export interface CardsPlayerItemProps {
    imageUrl: string,
    title: string
}
const PlayersCard: FC<CardsPlayerItemProps> = ({imageUrl, title}) => {
    return (
        <li className="cards__item">
            <div className="cards__wrapper">
                <img src={imageUrl} alt="player" />
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
    );
};

export default PlayersCard;