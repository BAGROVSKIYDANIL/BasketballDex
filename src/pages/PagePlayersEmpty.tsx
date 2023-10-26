import { Layout } from "../common/components/ui/layout/layout";
import Search from "../common/components/ui/search/Search";
import Pagination from "../common/components/ui/pagination/Pagination";
import PlayersEmpty from "../modules/players/components/PlayersEmpty/PlayersEmpty";

const PagePlayersEmpty = () => {
    return (
        <Layout>
            <Search/>
            <PlayersEmpty/>
            <Pagination/>
        </Layout>
    );
};

export default PagePlayersEmpty;