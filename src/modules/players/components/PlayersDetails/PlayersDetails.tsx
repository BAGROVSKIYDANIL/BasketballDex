import Greg from '../../../../assets/images/POR 1.png'
import './PlayersDetails.scss'


const PlayersDetails = () =>
{
    return(
        <div className="players">
            <div className="players__menu">
                <div className="players__path">
                    <a href="#/">Teams</a>
                    <span>/</span>
                    <a href="#/">Denver Nuggets</a>
                </div>
                <div className="players__change">
                    <div className="players__create">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7089 5.63151C21.0989 6.02151 21.0989 6.65151 20.7089 7.04151L18.8789 8.87151L15.1289 5.12151L16.9589 3.29151C17.1458 3.10426 17.3994 2.99902 17.6639 2.99902C17.9285 2.99902 18.1821 3.10426 18.3689 3.29151L20.7089 5.63151ZM2.99878 20.5015V17.4615C2.99878 17.3216 3.04878 17.2015 3.14878 17.1015L14.0588 6.19155L17.8088 9.94155L6.88878 20.8515C6.79878 20.9515 6.66878 21.0015 6.53878 21.0015H3.49878C3.21878 21.0015 2.99878 20.7815 2.99878 20.5015Z" fill="#9C9C9C"/>
                        </svg>
                    </div>
                    <div className="players__delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5001 4H18.0001C18.5501 4 19.0001 4.45 19.0001 5C19.0001 5.55 18.5501 6 18.0001 6H6.00006C5.45006 6 5.00006 5.55 5.00006 5C5.00006 4.45 5.45006 4 6.00006 4H8.50006L9.21006 3.29C9.39006 3.11 9.65006 3 9.91006 3H14.0901C14.3501 3 14.6101 3.11 14.7901 3.29L15.5001 4ZM7.99998 21C6.89998 21 5.99998 20.1 5.99998 19V9.00004C5.99998 7.90004 6.89998 7.00004 7.99998 7.00004H16C17.1 7.00004 18 7.90004 18 9.00004V19C18 20.1 17.1 21 16 21H7.99998Z" fill="#E4163A"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="players__wrapper">
                <div className="players__img">
                    <img src={Greg} alt="" />
                </div>
                <div className="players__information">
                    <div className="players__main-title">
                        Greg Whittington
                        <span> #22</span>
                    </div>   
                    <div className="players__row1">
                        <div className="players__position">
                            <div className="players__title">Position</div>
                            <div className="players__subtitle">Forward</div>
                        </div>
                        <div className="players__team">
                            <div className="players__title">Team</div>
                            <div className="players__subtitle"> Denver Nuggets</div>
                        </div>
                    </div>
                    <div className="players__row2">
                        <div className="players__height">
                            <div className="players__title">Height</div>
                            <div className="players__subtitle">206cm</div>
                        </div>
                        <div className="players__weight">
                            <div className="players__title">Weight</div>
                            <div className="players__subtitle">95 kg</div>
                        </div>
                    </div>
                    <div className="players__age">
                        <div className="players__title">Age</div>
                        <div className="players__subtitle">27</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayersDetails;