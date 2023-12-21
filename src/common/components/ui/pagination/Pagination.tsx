import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import { useAppSelector,useAppDispatch } from '../../../hooks/redux.hook';
import { uploadPageIndex } from '../../../../modules/players/action';
import { uploadTeamPageIndex } from '../../../../modules/teams/action';

import './Pagination.scss'

const Pagination: React.FC = () =>
{

    // const [isVisible, setIsVisible] = useState(false);
    const {paginate} = useAppSelector((state) => state.players)
    const {paginateTeam} = useAppSelector((state) => state.team)
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState<number>(0)
    const countPage = 6;


    const handlePageChange = ({selected}:{selected: number}) =>
    {
        setCurrentPage(selected)
    }
    
    const countItem = paginate.count  ? paginate.count: paginateTeam.count ? paginateTeam.count : 0;
    const startIndex = currentPage * countPage;
    const endIndex = startIndex + countPage;


    useEffect(() =>
    {
        dispatch(uploadPageIndex({startIndex, endIndex}))
        dispatch(uploadTeamPageIndex({startIndex, endIndex}))
    },[dispatch, startIndex, endIndex])


    return(
        <ReactPaginate  
                        breakLabel="..."
                        initialPage={0}
                        // marginPagesDisplayed={6}
                        pageCount={Math.ceil(countItem / 6)}
                        // pageRangeDisplayed={3}
                        onPageChange={handlePageChange}
                        containerClassName='pagin'
                        activeClassName='pagin__active'
                        pageLinkClassName='pagin__page-link'
                        breakLinkClassName='pagin__break-link'
                        nextLinkClassName='pagin__next-link'
                        previousLinkClassName='pagin__previous-link'
                        pageClassName='pagin__page-item'
                        breakClassName='pagin__break-item'
                        nextClassName='pagin__next-item'
                        previousClassName='pagin__previous-item'
                        
                        previousLabel={
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M12.4 5.76846C12.712 6.08046 12.712 6.58446 12.4 6.89646L9.296 10.0005L12.4 13.1045C12.712 13.4165 12.712 13.9205 12.4 14.2325C12.088 14.5445 11.584 14.5445 11.272 14.2325L7.6 10.5605C7.288 10.2485 7.288 9.74446 7.6 9.43246L11.272 5.76046C11.576 5.45646 12.088 5.45646 12.4 5.76846Z" fill="#707070" />
                                 </svg>
                            </>
                        }
                        nextLabel={
                            <>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                     <path d="M7.6 5.76846C7.288 6.08046 7.288 6.58446 7.6 6.89646L10.704 10.0005L7.6 13.1045C7.288 13.4165 7.288 13.9205 7.6 14.2325C7.912 14.5445 8.41601 14.5445 8.72801 14.2325L12.4 10.5605C12.712 10.2485 12.712 9.74446 12.4 9.43246L8.72801 5.76046C8.42401 5.45646 7.912 5.45646 7.6 5.76846Z" fill="#707070" />
                                 </svg>
                            </>
                        }/>
                        

    );
}

export default Pagination;