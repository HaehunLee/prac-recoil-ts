import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '../../atoms';

const BackBtn:React.FC = () => {
    const history = useHistory();

    return (
        <Button onClick={() => history.goBack()}>
            <span>{`< 뒤로가기`}</span>
        </Button>
    )
}

export default BackBtn