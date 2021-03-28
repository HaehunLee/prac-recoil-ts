import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../../atoms';

interface IHeader {}

const Header:React.FC<IHeader> = () => {
    return (
        <Flex 
            justify="space-between" 
            style={{
                width:'100%', 
                height:50, 
                padding:'0 20px', 
                backgroundColor:'#d4d4d4',
                position: 'fixed',
                top:0
            }}
        >
            <Flex>
                <CustomNavLink exact to="/" activeStyle={{color:'blue'}}>홈</CustomNavLink>
                <CustomNavLink exact to="/board/list" activeStyle={{color:'blue'}}>게시판</CustomNavLink>
            </Flex>
            <span>헤더2</span>
        </Flex>
    )
}

interface ILayout {}

const Layout:React.FC<ILayout> = ({children}) => {
    return (
        <Flex direction="column" style={{width:'100vw'}}>
            <Header />
            <Content>
                {children}
            </Content>
        </Flex>
    )
}

export default Layout

const Content = styled(Flex)`
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
    padding: 24px;

    height: calc(100vh - 50px);
    justify-content: flex-start;
    overflow-y: scroll;
`

const CustomNavLink = styled(NavLink)`
    margin: 0 6px;
    color : #242424;
`