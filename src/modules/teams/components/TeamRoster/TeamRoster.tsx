import Bol from '../../../../assets/teamIcons/bol-bol.png'
import Hampton from '../../../../assets/teamIcons/Hampton.png'
import Vlatko from '../../../../assets/teamIcons/Vlatko.png'
import Greg from '../../../../assets/teamIcons/Greg.png'
import Gary from '../../../../assets/teamIcons/Gary.png'
import Jamal from '../../../../assets/teamIcons/Jamal.png'
import Zeke from '../../../../assets/teamIcons/Zeke.png'

import './TeamRoster.scss'

const TeamRoster = () =>
{
    return(
        <div className="roster">
            <div className="roster__header">
                <span>Roster</span>
            </div>
            <table >
                <thead className='head' >
                    <tr className='head__row' >
                        <td className='head__column1'>
                            <th className='head__numbering' >#</th>
                            <th className='head__player' >Player</th>                            
                        </td>
                        <td className='head__column2'>
                            <th className='head__height'>Height</th>
                            <th className='head__weight'>Weight</th>
                            <th className='head__age'>Age</th>
                        </td>
                    </tr>
                </thead>
                <tbody className='body'> 
                    <tr className='body__row'>
                        <td className="body__column1">
                            <th className='body__number'>10</th>
                            <th className='body__img' ><img src={Bol} alt="" /></th>
                            <th className='body__player'>
                                <tr className='body__title'>Bol Bol</tr>
                                <tr className='body__subtitle' >Centerforward</tr>
                            </th>
                        </td>
                        <td className="body__column2">
                            <th className='body__height'>218 см</th>
                            <th className='body__weight'>100 kg</th>
                            <th className='body__age' >21</th>
                        </td>
                    </tr>
                     <tr className='body__row'> 
                     <td className="body__column1">
                        <th className='body__number'>-</th>
                            <th className='body__img' ><img src={Hampton} alt="" /></th>
                            <th className='body__player'>
                                <tr className='body__title'>R. J. Hampton</tr>
                                <tr className='body__subtitle' >Defender</tr>
                            </th>
                     </td>
                        <td className="body__column2">
                            <th className='body__height'>193 см</th>
                            <th className='body__weight'>79 kg</th>
                            <th className='body__age' >19</th>
                        </td>
                    </tr>
                    <tr className='body__row'>
                        <td className="body__column1">
                            <th className='body__number'>31</th>
                            <th className='body__img' ><img src={Vlatko} alt="" /></th>
                            <th className='body__player'>
                                <tr className='body__title'>Vlatko Cancar</tr>
                                <tr className='body__subtitle' >Forward</tr>
                            </th>
                        </td>
                        <td className="body__column2">
                            <th className='body__height'>203 см</th>
                            <th className='body__weight'>107 kg</th>
                            <th className='body__age' >26</th>
                        </td>
                    </tr>
                    <tr className='body__row'>
                        <td className="body__column1">
                            <th className='body__number'>22</th>
                            <th className='body__img' ><img src={Greg} alt="" /></th>
                            <th className='body__player'>
                                <tr className='body__title'>Greg Whittington</tr>
                                <tr className='body__subtitle' >Forward</tr>
                            </th>
                        </td>
                        <td className="body__column2">
                            <th className='body__height'>206 см</th>
                            <th className='body__weight'>95 kg</th>
                            <th className='body__age' >27</th>
                        </td>
                    </tr>
                    <tr className='body__row'>
                        <td className="body__column1">
                            <th className='body__number'>14</th>
                            <th className='body__img' ><img src={Gary} alt="" /></th>
                            <th className='body__player'>
                                <tr className='body__title'>Gary Harris</tr>
                                <tr className='body__subtitle' >Defender</tr>
                            </th>
                        </td>
                        <td className="body__column2">
                            <th className='body__height'>193 см</th>
                            <th className='body__weight'>98 kg</th>
                            <th className='body__age' >26</th>
                        </td>
                    </tr>
                    <tr className='body__row'>
                        <td className="body__column1">
                            <th className='body__number'>27</th>
                            <th className='body__img' ><img src={Jamal} alt="" /></th>
                            <th className='body__player'>
                                <tr className='body__title'>Jamal Murray</tr>
                                <tr className='body__subtitle' >Forward</tr>
                            </th>
                        </td>
                        <td className="body__column2">
                            <th className='body__height'>193 см</th>
                            <th className='body__weight'>98 kg</th>
                            <th className='body__age' >23</th>
                        </td>
                    </tr>
                    <tr className='body__row-bottom'>
                        <td className="body__column1">
                            <th className='body__number'>-</th>
                            <th className='body__img' ><img src={Zeke} alt="" /></th>
                            <th className='body__player'>
                                <tr className='body__title'>Zeke Nnaji</tr>
                                <tr className='body__subtitle' >Forward-center</tr>
                            </th>
                        </td>
                        <td className="body__column2">
                            <th className='body__height'>211 см</th>
                            <th className='body__weight'>109 kg</th>
                            <th className='body__age' >19</th>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TeamRoster;