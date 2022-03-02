import styled from 'styled-components'




export const Container = styled.div`
    background: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    height: 100%;
    min-height: 100vh;

    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export const Image = styled.img`
    margin-top: 11px;
`
export const ContainerItens = styled.div`
    padding: 0 36px;
    display: flex;
    flex-direction: column;
`
export const InputLabel = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #EEEEEE;
    margin-left: 15px;

`
export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    padding-left: 15px;
    margin-bottom: 45px;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    

`
export const Order = styled.li`
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    
    width: 342px;
    height: 101px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    
    margin-bottom: 18px;


    div{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .first-paragraph{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }

    .seccond-paragraph{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 1px;
        color: #FFFFFF;
    }
    
    button{
        background: none;
        outline: none;
        border: none;
        cursor: pointer;


        &:active{
            opacity: 0.5;
        }
    }
`
