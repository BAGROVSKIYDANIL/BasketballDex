import { Layout } from "../common/components/ui/layout/layout"
import Lists from "../modules/teams/components/Lists"
import Pagination from "../common/components/ui/pagination/Pagination"
import Search from "../common/components/ui/search/Search"
const Teams = () =>
{
    return(
        <Layout>
            {/* <Button variant="secondary">Igor</Button> */}
            <Search/>
            <Lists/>
            <Pagination/>
        </Layout>
    )
}

export default Teams; 