import Button from '../../../common/components/ui/button/Button';

import Basketball from '../../../assets/images/Basketball.png' ;
import './signIn.scss';

const SignIn = () =>
{
    return(
        <div className='form'>
            <div className="container">
            <div className="form__block">
                <form className="form__wrapper">
                    <h1 className='form__title'>Sign In</h1>
                    <div className="form__group">
                        <label className='form__label' htmlFor="">Login</label>
                        <input className='form__input-margin' type="text" />
                    </div>
                    <div className="form__group">
                        <label className='form__label' htmlFor="">Password</label>
                        <input className='form__input' type="text" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="close_eye">
                                <path id="close_eye_2" fill-rule="evenodd" clip-rule="evenodd" d="M1.80666 3.0266C1.54666 2.7666 1.54666 2.3466 1.80666 2.0866C2.06666 1.8266 2.49333 1.8266 2.75333 2.0866L13.6267 12.9733C13.8867 13.2333 13.8867 13.6533 13.6267 13.9133C13.3667 14.1733 12.9467 14.1733 12.6867 13.9133L10.8733 12.0999C9.98 12.4466 9.01333 12.6466 8 12.6466C4.66666 12.6466 1.82 10.5733 0.666664 7.6466C1.18 6.33327 2.04 5.19993 3.12 4.33993L1.80666 3.0266ZM11.3333 7.64662C11.3333 5.80662 9.84 4.31329 8 4.31329C7.66 4.31329 7.33333 4.37995 7.02 4.47329L5.57333 3.02662C6.34 2.77995 7.15333 2.64662 8 2.64662C11.3333 2.64662 14.18 4.71995 15.3333 7.63995C14.8733 8.81329 14.14 9.83995 13.2133 10.66L11.1733 8.61995C11.2667 8.31329 11.3333 7.98662 11.3333 7.64662ZM8 10.9799C6.16 10.9799 4.66666 9.48658 4.66666 7.64658C4.66666 7.13325 4.78666 6.64658 4.99333 6.21992L6.04 7.26658C6.02 7.38658 6 7.51325 6 7.64658C6 8.75325 6.89333 9.64658 8 9.64658C8.13333 9.64658 8.25333 9.62658 8.38 9.59992L9.42666 10.6466C8.99333 10.8599 8.51333 10.9799 8 10.9799ZM9.98 7.42661C9.88 6.49328 9.14666 5.76661 8.22 5.66661L9.98 7.42661Z" fill="#9C9C9C" />
                            </g>
                        </svg>
                    </div>
                    {/* <button className='form__button'>Sign In</button> */}
                    <Button>sign In</Button>
                    <div className="form__link">
                        <span>Not a member yet?
                            <a href="#/"> Sign up</a>
                        </span>
                    </div>
                </form>
            </div>
                <div className="form__imagewrapper">
                    <div className="form__image">
                        <img src={Basketball} alt="Basketball logo" />
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default SignIn;