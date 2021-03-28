import React from 'react';
import styled from 'styled-components';
import { IBoard } from '../../../types';
import { Flex } from '../../atoms';

interface IBoardDetailItem {
    item: IBoard;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const BoardDetailItem:React.FC<IBoardDetailItem> = ({item, onClick}) => {

    return (
        <View direction="column" justify="flex-start" align="flex-start" onClick={onClick}>
            <span>제목 : {item.title}</span>
            <span>설명 : {item.description}</span>
            <span>내용</span>
            <Content>{item.content ? item.content : '제곧내'}</Content>
        </View>
    )
}

export default BoardDetailItem

const View = styled(Flex)`
    padding: 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

    max-width: 900px;
    min-width: 300px;
    width: 100%;
    height: auto;

    background-color: white;
`

const Content = styled.p`
    width: 100%;
    border: solid 1px #d4d4d4;
    min-height: 200px;
`