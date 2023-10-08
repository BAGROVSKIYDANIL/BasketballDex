import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux'
import { setDomNodeRef, SetOverlay } from '../../../../core/redux/actions';

import './leftBlovkMenu.scss';


const LeftBlockMenu: React.FC = () =>
{
    const [menuOpen, setMenuOpen] = useState<boolean>(true);
    const dispatch = useDispatch();
    const domNodeRef = useRef<HTMLDivElement | null>(null)
    const overlay = useRef<HTMLDivElement | null> (null);

    useEffect(() =>
    {
        dispatch(setDomNodeRef(domNodeRef));
        dispatch(SetOverlay(overlay))
    })


    const closeMenu = () =>
    {
        if(overlay.current && domNodeRef.current)
        {
            overlay.current.classList.remove('visible')
            domNodeRef.current.classList.remove('active');
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

    return(
        <div 
        onClick={handleOutsideClick}
        ref={overlay}
        className="overlay">
        { menuOpen ?  <div ref={domNodeRef} className="menu">
                <div className="menu__wrapper">
                    <div className="menu__teams">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9899 8C10.9899 9.66 9.65989 11 7.99989 11C6.33989 11 4.99989 9.66 4.99989 8C4.99989 6.34 6.33989 5 7.99989 5C9.65989 5 10.9899 6.34 10.9899 8ZM18.99 8C18.99 9.66 17.66 11 16 11C14.34 11 13 9.66 13 8C13 6.34 14.34 5 16 5C17.66 5 18.99 6.34 18.99 8ZM7.99997 13C5.66997 13 0.999969 14.17 0.999969 16.5V18C0.999969 18.55 1.44997 19 1.99997 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 7.99997 13ZM15.0301 13.05C15.3801 13.02 15.7101 13 16.0001 13C18.33 13 23 14.17 23 16.5V18C23 18.55 22.55 19 22 19H16.8201C16.93 18.69 17 18.35 17 18V16.5C17 15.03 16.2101 13.92 15.0701 13.09C15.067 13.0869 15.064 13.083 15.0607 13.0787C15.0531 13.0688 15.044 13.0569 15.0301 13.05Z" fill="#E4163A"/>
                        </svg>
                        <span className='menu__title'>Teams</span>
                    </div>
                    <div className="menu__playears">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 8C15.9999 10.21 14.2099 12 11.9999 12C9.78989 12 7.99989 10.21 7.99989 8C7.99989 5.79 9.78989 4 11.9999 4C14.2099 4 15.9999 5.79 15.9999 8ZM3.99997 18C3.99997 15.34 9.32997 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H4.99997C4.44997 20 3.99997 19.55 3.99997 19V18Z" fill="#9C9C9C"/>
                        </svg>
                        <span className='menu__title'>Players</span>
                    </div>
                </div>
                <div className="menu__signOut">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.99991 3.01001H20.9999C22.0999 3.01001 22.9999 3.91001 22.9999 5.01001V18.99C22.9999 20.09 22.0999 20.99 20.9999 20.99H2.97991C1.88991 20.99 0.999908 20.1 0.999908 19.01V16C0.999908 15.45 1.44991 15 1.99991 15C2.54991 15 2.99991 15.45 2.99991 16V18.02C2.99991 18.57 3.44991 19.02 3.99991 19.02H19.9999C20.5499 19.02 20.9999 18.57 20.9999 18.02V5.99001C20.9999 5.44001 20.5499 4.99001 19.9999 4.99001H3.99991C3.44991 4.99001 2.99991 5.44001 2.99991 5.99001V8.00001C2.99991 8.55001 2.54991 9.00001 1.99991 9.00001C1.44991 9.00001 0.999908 8.55001 0.999908 8.00001V5.01001C0.999908 3.91001 1.89991 3.01001 2.99991 3.01001ZM14.6399 12.3601L11.8499 15.1501C11.5399 15.4601 10.9999 15.2401 10.9999 14.7901V13.0001H1.99991C1.44991 13.0001 0.999908 12.5501 0.999908 12.0001C0.999908 11.4501 1.44991 11.0001 1.99991 11.0001H10.9999V9.21005C10.9999 8.76005 11.5399 8.54005 11.8499 8.86005L14.6399 11.6501C14.8399 11.8501 14.8399 12.1601 14.6399 12.3601Z" fill="#FF768E"/>
                    </svg>
                    <span className='menu__title-red'>Sign out</span>
                </div>
            </div>: false}
        </div> 
    )
}

export default LeftBlockMenu;