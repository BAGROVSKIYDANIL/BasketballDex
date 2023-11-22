import Character from '../../../../assets/images/Character.svg'
import { Link } from 'react-router-dom';
import './PlayersEmpty.scss'

const PlayersEmpty = () => {


    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__img">
                    <img src={Character} alt="" />
                </div>
                <div className="card__title">Empty here</div>
                <div className="card__subtitle">Add new teams to continue</div>
            </div>
        </div>
    );
};

export default PlayersEmpty;