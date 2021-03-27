import React from 'react';
import styled from 'styled-components';
import { IBoard } from '../../../types';
import { Flex } from '../../atoms';
import { BoardItem } from '../../molecules';

interface IBoardList {
    list: Array<IBoard>;
}

const BoardList:React.FC<IBoardList> = ({list}) => {
    return (
        <View>
            {list.map(item => 
                <BoardItem item={item} key={item.id}/>
            )}
        </View>
    )
}

export default BoardList;

const View = styled(Flex)`
    padding: 20px;
    flex-direction: column;

    background-color: white;
    border-radius:16px;
    border: solid 1px #d4d4d4;

    > div {
        margin-bottom : 20px;
    }
`