import React from 'react';
import styled from 'styled-components';

interface IButton {
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Button = styled.div<IButton>`
    cursor: pointer;
`

export default Button;