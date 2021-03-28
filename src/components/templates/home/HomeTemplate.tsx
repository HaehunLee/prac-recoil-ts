import React from 'react';
import { Layout } from '../../organisms';

interface IHomeTemplate {
}

const HomeTemplate:React.FC<IHomeTemplate> = () => {
    return (
        <Layout>
            <span style={{marginBottom: 20}}>홈 페이지</span>
        </Layout>
    )
}

export default HomeTemplate;