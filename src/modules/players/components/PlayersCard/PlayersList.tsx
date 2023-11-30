import Player from '../../../../assets/images/Jaylen.png'
import PlayersCard from './PlayersCard';

interface CardsPlayersItemProps
{
    imageUrl: string,
    title: string
}


const PlayersList = () => {
    const teamCard = []
    const players: CardsPlayersItemProps[] = [
        {
        imageUrl: Player,
        title: 'Jaylen Adams #10'
        },
        {
        imageUrl: Player,
        title: 'Jaylen Adams #10'
        },
        {
        imageUrl: Player,
        title: 'Jaylen Adams #10'
        },
        {
        imageUrl: Player,
        title: 'Jaylen Adams #10'
        },
        {
        imageUrl: Player,
        title: 'Jaylen Adams #10'
        },
        {
        imageUrl: Player,
        title: 'Jaylen Adams #10'
        },
    ]

    return (
        <div className="cards">
            <ul className="cards__grid">
                {
                    players.map((item, index) =>
                    {
                        return(
                            <PlayersCard imageUrl={item.imageUrl} title={item.title} key={index} />
                        )
                    })

                }
            </ul>
        </div>
    );
};

export default PlayersList;