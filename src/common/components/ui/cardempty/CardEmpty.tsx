import CardLogo from '../../../../assets/images/illustration.svg'
import './CardEmpty.scss'
const CardEmpty = () => {


    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__img">
                    <img src={CardLogo} alt="" />
                </div>
                <div className="card__title">Empty here</div>
                <div className="card__subtitle">Add new teams to continue</div>
            </div>
        </div>
    );
};

export default CardEmpty;