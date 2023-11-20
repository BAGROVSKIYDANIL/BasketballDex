import PlayersList from "../modules/players/components/PlayersCard/PlayersList";
import { Layout } from "../common/components/ui/layout/layout";
import Search from "../common/components/ui/search/Search";
import Pagination from "../common/components/ui/pagination/Pagination";

const PlayersCard = () => {
    return (
        <Layout>
            <Search showMultiSelect={true}/>
            <PlayersList/>
            <Pagination/>
        </Layout>
    )
};

export default PlayersCard;