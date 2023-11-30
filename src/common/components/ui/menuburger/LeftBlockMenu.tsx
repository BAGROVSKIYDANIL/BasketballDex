import React, {useState, useRef, useEffect} from 'react';
import { useAppSelector, useAppDispatch} from '../../../hooks/redux.hook';
import { isOpen, activeTeam, activePlayer } from '../../../../core/redux/actions';
import {useNavigate } from 'react-router-dom';

import './leftBlovkMenu.scss';


const LeftBlockMenu: React.FC = () =>
{
    const {open, activeTeams, activePlayers} = useAppSelector((state) => state.app);
    const [menuOpen, setMenuOpen] = useState<boolean>(true);
    const menu = useRef<HTMLDivElement>(null);
    const overlay = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const openMenus = () =>
    {
        menu.current?.classList.toggle('active')
        overlay.current?.classList.toggle('visible')
    }

    useEffect(() =>
    {
        if(open)  
        {
            openMenus()
        }
        else
        {
            closeMenu()
        }

    },[open])

    const closeMenu = () =>
    {

        if(menu.current && overlay.current)
        {
            menu.current.classList.remove('active')
            overlay.current.classList.remove('visible')
            dispatch(isOpen(false))
        }
    }

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) =>
    {
        const menuElement: HTMLDivElement | null = document.querySelector('.menu');
        if(menuElement && !menuElement.contains(event.target as Node))
        {
            closeMenu();
        }
    }
    
    const  activeModulesTeam =  async () =>
    {  
        navigate('/PageEmptyTeam')
        dispatch(activeTeam(!activeTeams))
        dispatch(activePlayer(false))
  

    }
    const activeModulesPlayer = () =>
    {
        navigate('/PageEmptyPlayer')
        dispatch(activePlayer(!activePlayers))    
        dispatch(activeTeam(false))     
    }

    const name = localStorage.getItem('name')

    return(
        <div 
        ref={overlay}
        onClick={handleOutsideClick}
        className="overlay">
        { menuOpen ?  <div  ref={menu} className='menu'>
                <div className="menu__wrapper">
                    <div className="menu__profile">
                        <div className="menu__user">
                            <p>{name}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.0002 2.99988C9.72018 2.99988 3.00018 9.71988 3.00018 17.9999C3.00018 26.2799 9.72018 32.9999 18.0002 32.9999C26.2802 32.9999 33.0002 26.2799 33.0002 17.9999C33.0002 9.71988 26.2802 2.99988 18.0002 2.99988ZM18 7.49988C20.49 7.49988 22.5 9.50988 22.5 11.9999C22.5 14.4899 20.49 16.4999 18 16.4999C15.51 16.4999 13.5 14.4899 13.5 11.9999C13.5 9.50988 15.51 7.49988 18 7.49988ZM8.99998 23.9698C10.935 26.8798 14.25 28.7998 18 28.7998C21.75 28.7998 25.065 26.8798 27 23.9698C26.955 20.9848 20.985 19.3498 18 19.3498C15 19.3498 9.04498 20.9848 8.99998 23.9698Z" fill="#9C9C9C"/>
                            </svg>
                        </div>
                    <hr />
                    </div>
                    <div onClick={activeModulesTeam} className={`menu__teams ${activeTeams ? 'gumer': null}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.9898 8C10.9898 9.66 9.6598 11 7.9998 11C6.3398 11 4.9998 9.66 4.9998 8C4.9998 6.34 6.3398 5 7.9998 5C9.6598 5 10.9898 6.34 10.9898 8ZM18.9899 8C18.9899 9.66 17.6599 11 15.9999 11C14.3399 11 12.9999 9.66 12.9999 8C12.9999 6.34 14.3399 5 15.9999 5C17.6599 5 18.9899 6.34 18.9899 8ZM7.99988 13C5.66988 13 0.999878 14.17 0.999878 16.5V18C0.999878 18.55 1.44988 19 1.99988 19H13.9999C14.5499 19 14.9999 18.55 14.9999 18V16.5C14.9999 14.17 10.3299 13 7.99988 13ZM15.03 13.05C15.38 13.02 15.71 13 16 13C18.33 13 23 14.17 23 16.5V18C23 18.55 22.55 19 22 19H16.82C16.93 18.69 17 18.35 17 18V16.5C17 15.03 16.21 13.92 15.07 13.09C15.0669 13.0869 15.0639 13.083 15.0606 13.0787C15.053 13.0688 15.0439 13.0569 15.03 13.05Z" fill="#9C9C9C"/>
                            </svg>
                            <span className='menu__title'>Teams</span>
                    </div>
                    <div onClick={activeModulesPlayer}  className={`menu__playears ${activePlayers ? 'gumer' : ''}`}>    
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.9999 8C15.9999 10.21 14.2099 12 11.9999 12C9.78989 12 7.99989 10.21 7.99989 8C7.99989 5.79 9.78989 4 11.9999 4C14.2099 4 15.9999 5.79 15.9999 8ZM3.99997 18C3.99997 15.34 9.32997 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H4.99997C4.44997 20 3.99997 19.55 3.99997 19V18Z" fill="#9C9C9C"/>
                            </svg>
                            <span className='menu__title'>Players</span>
                    </div>
                </div>
                <div className="menu__signout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.99991 3.01001H20.9999C22.0999 3.01001 22.9999 3.91001 22.9999 5.01001V18.99C22.9999 20.09 22.0999 20.99 20.9999 20.99H2.97991C1.88991 20.99 0.999908 20.1 0.999908 19.01V16C0.999908 15.45 1.44991 15 1.99991 15C2.54991 15 2.99991 15.45 2.99991 16V18.02C2.99991 18.57 3.44991 19.02 3.99991 19.02H19.9999C20.5499 19.02 20.9999 18.57 20.9999 18.02V5.99001C20.9999 5.44001 20.5499 4.99001 19.9999 4.99001H3.99991C3.44991 4.99001 2.99991 5.44001 2.99991 5.99001V8.00001C2.99991 8.55001 2.54991 9.00001 1.99991 9.00001C1.44991 9.00001 0.999908 8.55001 0.999908 8.00001V5.01001C0.999908 3.91001 1.89991 3.01001 2.99991 3.01001ZM14.6399 12.3601L11.8499 15.1501C11.5399 15.4601 10.9999 15.2401 10.9999 14.7901V13.0001H1.99991C1.44991 13.0001 0.999908 12.5501 0.999908 12.0001C0.999908 11.4501 1.44991 11.0001 1.99991 11.0001H10.9999V9.21005C10.9999 8.76005 11.5399 8.54005 11.8499 8.86005L14.6399 11.6501C14.8399 11.8501 14.8399 12.1601 14.6399 12.3601Z" fill="#FF768E"/>
                    </svg>
                    <span className='menu__title-red'>Sign out</span>
                </div>
            </div>: false}
        </div> 
    )
}

export default LeftBlockMenu;