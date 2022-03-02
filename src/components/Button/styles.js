import styled from "styled-components";

export const Button = styled.button`
    background: #D93856;
    width: 342px;
    height: 68px;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        opacity: 0.8;
    }
    
    &:active{
        opacity: 0.5;
    }


    ${props => props.isGrey && `
        background: rgba(255, 255, 255, 0.14);
    `}
`