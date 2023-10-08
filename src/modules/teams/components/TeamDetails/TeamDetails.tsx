import Portland from '../../../../assets/icon/Portland.png'
import './TeamDetails.scss'


const TeamDetails = () =>
{
    return(
        <div className="cardTeam">
            <div className="cardTeam__menu">
                <div className="cardTeam__path">
                    <a href="#/">Teams</a>
                    <span>/</span>
                    <a href="#/">Denver Nuggets</a>
                </div>
                <div className="cardTeam__change">
                    <div className="cardTeam__create">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7089 5.63151C21.0989 6.02151 21.0989 6.65151 20.7089 7.04151L18.8789 8.87151L15.1289 5.12151L16.9589 3.29151C17.1458 3.10426 17.3994 2.99902 17.6639 2.99902C17.9285 2.99902 18.1821 3.10426 18.3689 3.29151L20.7089 5.63151ZM2.99878 20.5015V17.4615C2.99878 17.3216 3.04878 17.2015 3.14878 17.1015L14.0588 6.19155L17.8088 9.94155L6.88878 20.8515C6.79878 20.9515 6.66878 21.0015 6.53878 21.0015H3.49878C3.21878 21.0015 2.99878 20.7815 2.99878 20.5015Z" fill="#9C9C9C"/>
                        </svg>
                    </div>
                    <div className="cardTeam__delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5001 4H18.0001C18.5501 4 19.0001 4.45 19.0001 5C19.0001 5.55 18.5501 6 18.0001 6H6.00006C5.45006 6 5.00006 5.55 5.00006 5C5.00006 4.45 5.45006 4 6.00006 4H8.50006L9.21006 3.29C9.39006 3.11 9.65006 3 9.91006 3H14.0901C14.3501 3 14.6101 3.11 14.7901 3.29L15.5001 4ZM7.99998 21C6.89998 21 5.99998 20.1 5.99998 19V9.00004C5.99998 7.90004 6.89998 7.00004 7.99998 7.00004H16C17.1 7.00004 18 7.90004 18 9.00004V19C18 20.1 17.1 21 16 21H7.99998Z" fill="#E4163A"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="cardTeam__wrapper">
                <div className="cardTeam__img">
                    <img src={Portland} alt="" />
                </div>
                <div className="cardTeam__information">
                    <div className="cardTeam__mainTitle">
                        Denver Nuggets
                    </div>   
                    <div className="cardTeam__row">
                        <div className="cardTeam__yearFoundation">
                            <div className="cardTeam__title">Year of foundation </div>
                            <div className="cardTeam__subtitle">1976</div>
                        </div>
                        <div id='element1' className="cardTeam__division">
                            <div className="cardTeam__title">Division</div>
                            <div className="cardTeam__subtitle">Northwesstern</div>
                        </div>
                        <div id='ekement2' className="cardTeam__conference">
                            <div className="cardTeam__title">
                                Conference
                            </div>
                            <div className="cardTeam__subtitle">
                                Western
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TeamDetails;