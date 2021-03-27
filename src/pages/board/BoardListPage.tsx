import React from 'react';
import { Flex } from '../../components/atoms';
import { BoardListTemplate } from '../../components/templates';

interface IBoardListPage {
    
}

const BoardListPage:React.FC<IBoardListPage> = () => {
  return (
    <Flex>
        <BoardListTemplate />
    </Flex>
  );
}

export default BoardListPage;