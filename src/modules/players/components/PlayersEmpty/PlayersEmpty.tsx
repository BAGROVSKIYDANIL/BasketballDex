import Character from '../../../../assets/images/Character.svg'
import './PlayersEmpty.scss'
const PlayersEmpty = () => {


    return (
        <div className="cards">
            <div className="cards__wrapper">
                <div className="cards__img">
                    <img src={Character} alt="" />
                </div>
                <div className="cards__title">Empty here</div>
                <div className="cards__subtitle">Add new teams to continue</div>
            </div>
        </div>
    );
};

export default PlayersEmpty;