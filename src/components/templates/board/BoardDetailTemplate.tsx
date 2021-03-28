import React from 'react';
import { IBoard } from '../../../types';
import { Flex } from '../../atoms';
import { BackBtn, BoardDetailItem } from '../../molecules';
import { Layout } from '../../organisms';

interface IBoardDetailTemplate {
  detail: IBoard;
}

const BoardDetailTemplate:React.FC<IBoardDetailTemplate> = ({detail}) => {
    return (
      <Layout>
        <Flex justify="flex-start" style={{width:'100%', marginBottom: 20}}>
          <BackBtn />
        </Flex>
        <BoardDetailItem item={detail} />
      </Layout>
    )
}

export default BoardDetailTemplate;