import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { IBoard } from '../../../types';
import { Flex } from '../../atoms';
import { BoardListItem } from '../../molecules';

interface IBoardList {
    list: Array<IBoard>;
}

const BoardList:React.FC<IBoardList> = ({list}) => {
    const history = useHistory()

    return (
        <View>
            {list.map(item => 
                <BoardListItem item={item} key={item.id} onClick={() => history.push(`/board/detail/${item.id}`)}/>
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
        cursor: pointer;
    }
`