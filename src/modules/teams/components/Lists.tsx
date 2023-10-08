import Portland from '../../../assets/icon/Portland.svg'
import CardsTeamsItem from './Card';

interface CardsTeamsItemProps {
    imageUrl: string,
    title: string
}
const Lists = () =>
{


    const teams: CardsTeamsItemProps[] = [{
        imageUrl: Portland,
        title: 'Portland trail blazers'
    },
        {
            imageUrl: Portland,
            title: 'Portland trail blazers'
        },
        {
            imageUrl: Portland,
            title: 'Portland trail blazers'
        },
        {
            imageUrl: Portland,
            title: 'Portland trail blazers'
        },
        {
            imageUrl: Portland,
            title: 'Portland trail blazers'
        },
        {
            imageUrl: Portland,
            title: 'Portland trail blazers'
        },
]
    return (

            <div className="cards">
                <ul className="cards__grid">
                        {
                            teams.map((item, index) => {
                                return (
                                    <CardsTeamsItem imageUrl={item.imageUrl} title={item.title} key={index} />
                                )
                            })
                        }
                    </ul>
            </div>
    )
}

export default Lists;