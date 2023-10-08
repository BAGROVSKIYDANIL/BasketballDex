import { Layout } from "../common/components/ui/layout/layout";
import TeamDetails from "../modules/teams/components/TeamDetails/TeamDetails";
import TeamRoster from "../modules/teams/components/TeamRoster/TeamRoster"

const TeamDetail = () => {
    return (
        <Layout>
            <TeamDetails/>
            <TeamRoster/>
        </Layout>
        );
};

export default TeamDetail;