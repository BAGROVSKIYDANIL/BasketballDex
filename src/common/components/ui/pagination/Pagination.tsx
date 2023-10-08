import React, {useState} from 'react';
import './Pagination.scss'

const Pagination = () =>
{

    const [isVisible, setIsVisible] = useState(false);

    const togleList = () =>
    {
        setIsVisible(!isVisible);
    }

    return(
        <div className="pagination">
                <div className="pagination__wrapper">
                        <div className="pagination__button">
                            <a href="#/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M12.4 5.76846C12.712 6.08046 12.712 6.58446 12.4 6.89646L9.296 10.0005L12.4 13.1045C12.712 13.4165 12.712 13.9205 12.4 14.2325C12.088 14.5445 11.584 14.5445 11.272 14.2325L7.6 10.5605C7.288 10.2485 7.288 9.74446 7.6 9.43246L11.272 5.76046C11.576 5.45646 12.088 5.45646 12.4 5.76846Z" fill="#707070" />
                                </svg>
                            </a>
                            <a className='button' href="#/">1</a>
                            <a href="#/">2</a>
                            <a href="#/">3</a>
                            <a id='display' href="#/">4</a>
                            <a href="#/">27</a>
                            <span>...</span>
                            <a href="#/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.6 5.76846C7.288 6.08046 7.288 6.58446 7.6 6.89646L10.704 10.0005L7.6 13.1045C7.288 13.4165 7.288 13.9205 7.6 14.2325C7.912 14.5445 8.41601 14.5445 8.72801 14.2325L12.4 10.5605C12.712 10.2485 12.712 9.74446 12.4 9.43246L8.72801 5.76046C8.42401 5.45646 7.912 5.45646 7.6 5.76846Z" fill="#707070" />
                                </svg>
                            </a>
                        </div>
                        <div className="pagination__select">
                            <div className="pagination__number">6</div>
                            <div className="pagination__line"></div>
                            <a
                            onClick={togleList}
                            href="#/" 
                            className="pagination__open">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.8749 9.00001L11.9949 12.88L8.11491 9.00001C7.92808 8.81275 7.67443 8.70752 7.40991 8.70752C7.1454 8.70752 6.89175 8.81275 6.70491 9.00001C6.31491 9.39001 6.31491 10.02 6.70491 10.41L11.2949 15C11.6849 15.39 12.3149 15.39 12.7049 15L17.2949 10.41C17.6849 10.02 17.6849 9.39001 17.2949 9.00001C16.9049 8.62001 16.2649 8.61001 15.8749 9.00001Z" fill="#9C9C9C" />
                                </svg>
                            </a>
                            {isVisible ?                             
                            <ul className="pagination__list">
                                <li><a href="#/">6</a></li>
                                <li><a href="#/">12</a></li>
                                <li className='border-bottom'><a href="#/">24</a></li>
                            </ul> : null}

                        </div>
                </div>
        </div>
    )
}

export default Pagination;