import { Layout } from "../common/components/ui/layout/layout"
import Lists from "../modules/teams/components/TeamCard/Lists"
import Pagination from "../common/components/ui/pagination/Pagination"
import Search from "../common/components/ui/search/Search"


const Teams = () =>
{
    return(
        <Layout>
            <Search showMultiSelect={false}/>
            <Lists/>
            <Pagination/>
        </Layout>
    )
}

export default Teams; 