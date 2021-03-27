import React from 'react';
import styled from 'styled-components';
import { IBoard } from '../../../types';
import { Flex } from '../../atoms';

interface IBoardItem {
    item: IBoard;
}

const BoardItem:React.FC<IBoardItem> = ({item}) => {

    return (
        <View direction="column" justify="flex-start" align="flex-start">
            <span>{item.title}</span>
            <span>{item.description}</span>
        </View>
    )
}

export default BoardItem

const View = styled(Flex)`
    padding: 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

    max-width: 500px;
    min-width: 300px;
    width: 100%;
    height: 90px;

    background-color: white;
`