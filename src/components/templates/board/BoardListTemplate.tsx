import React from 'react';
import { IBoard } from '../../../types';
import { BoardList, Layout } from '../../organisms';

interface IBoardListTemplate {
    list: Array<IBoard>;
}

const BoardListTemplate:React.FC<IBoardListTemplate> = ({list}) => {
    return (
        <Layout>
            <span style={{marginBottom: 20}}>게시판 목록 페이지</span>
            <BoardList list={list}/>
        </Layout>
    )
}

export default BoardListTemplate;