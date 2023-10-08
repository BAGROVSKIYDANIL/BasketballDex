import React from 'react';
import { Layout } from '../common/components/ui/layout/layout';
import CardEmpty from '../common/components/ui/cardempty/CardEmpty';
import Pagination from '../common/components/ui/pagination/Pagination';
import Search from '../common/components/ui/search/Search';

const TeamEmpty = () => {
    return (
        <Layout>
            <Search/>
            <CardEmpty/>
            <Pagination/>
        </Layout>
    );
};

export default TeamEmpty;