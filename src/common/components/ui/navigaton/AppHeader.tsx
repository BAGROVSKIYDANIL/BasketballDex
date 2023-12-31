import MenuBurger from '../burger/MenuBurger'
import logo from '../../../../assets/images/logo.svg'


import './appHeader.scss';



const AppHeader = () =>
{
    const name = localStorage.getItem('name');
    return(
        <header className="header">
            <div className="header__img">
                <img src={logo} alt="" />
            </div>
            <div className="header__menu">
                <p>{name}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.0002 2.99988C9.72018 2.99988 3.00018 9.71988 3.00018 17.9999C3.00018 26.2799 9.72018 32.9999 18.0002 32.9999C26.2802 32.9999 33.0002 26.2799 33.0002 17.9999C33.0002 9.71988 26.2802 2.99988 18.0002 2.99988ZM18 7.49988C20.49 7.49988 22.5 9.50988 22.5 11.9999C22.5 14.4899 20.49 16.4999 18 16.4999C15.51 16.4999 13.5 14.4899 13.5 11.9999C13.5 9.50988 15.51 7.49988 18 7.49988ZM8.99998 23.9698C10.935 26.8798 14.25 28.7998 18 28.7998C21.75 28.7998 25.065 26.8798 27 23.9698C26.955 20.9848 20.985 19.3498 18 19.3498C15 19.3498 9.04498 20.9848 8.99998 23.9698Z" fill="#9C9C9C"/>
            </svg>
            </div>
            <MenuBurger/>
        </header>
    )
}

export default AppHeader;