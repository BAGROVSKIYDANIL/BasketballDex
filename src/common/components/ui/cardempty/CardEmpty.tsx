import CardLogo from '../../../../assets/images/illustration.svg'
import React from 'react';

import './CardEmpty.scss'

const CardEmpty = () => {
    return (
        <div className="cards">
            <div className="cards__wrapper">
                <div className="cards__img">
                    <img src={CardLogo} alt="" />
                </div>
                <div className="cards__title">Empty here</div>
                <div className="cards__subtitle">Add new teams to continue</div>
            </div>
        </div>
    );
};

export default CardEmpty;