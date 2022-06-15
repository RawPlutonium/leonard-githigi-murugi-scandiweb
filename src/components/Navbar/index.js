import React, {Component} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from '../../theme/GlobalStyles';
import { useTheme } from '../../theme/useTheme';
import logoImg from '../../../src';

const NavbarCont = styled.nav`
    position: absolute;
    display: flex;
    alignItems: center;
    list-style: none;
    margin-left: 117px;
    margin-top: 28px;
    margin-bottom: 32px;
`;
const NavLogo = styled.li`
    margin-left: 200px;
`;
const NavItem = styled.li`
    margin-right: 32px;
    text-transform: uppercase;
`;
const CartIcon = styled.li`
    padding-top: 5px;
    margin-left: 20px;
`;
const DollarIcon = styled.li`
    padding-top: 5px;
    margin-left: 450px;
`;
const ArrowDown = styled.i`
    margin-left: 5px; 
`;
const NavLink = styled.a`
    text-decoration: none;
    color: #1D1F22;
    padding: 14px 16px;
    &:hover{
        border-bottom: 2px solid #5ECE7B;
        color: #5ECE7B;
        padding-bottom: 50px;
        align-self: stretch;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
    &:active{
        border-bottom: 2px solid #5ECE7B;
        color: #5ECE7B;
        padding-bottom: 50px;
        width: 200%;
        align-self: stretch;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
`;

export default class Navbar extends Component{
render(){
    return(
        <NavbarCont>
            <NavItem><NavLink href="#">women</NavLink></NavItem>
            <NavItem><NavLink href="#">men</NavLink></NavItem>
            <NavItem><NavLink href="#">kids</NavLink></NavItem>
            <NavLogo><img src="logoImg.svg"/></NavLogo>
            <DollarIcon><img src="dollar.svg"/></DollarIcon>
            <ArrowDown><img src="arrow.svg"/></ArrowDown>
            <CartIcon><img src="cart.svg"/></CartIcon>
        </NavbarCont>
        
    )
}
}