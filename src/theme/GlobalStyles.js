import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme })=> theme.colors.text};
    font-family: ${({ theme }) => theme.font.family.primary};
 }
 a{
    color: ${({ theme }) => theme.colors.navText};
    cursor: pointer;
 }

 button{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 32px;
    position: absolute;
    width: 292px;
    height: 52px;
    left: 929px;
    top: 560px;
    cursor: pointer;
    background: #5ECE7B;
    font-family: ${({ theme }) => theme.font.family.primary};
 }
`
