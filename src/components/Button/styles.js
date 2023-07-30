import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #222222;
    border-radius: 5px;
    font-size: 30px;
    font-family: 'Roboto';
    font-weight: 700;
    transition: 0s background-color;

    flex:1;

    &:hover{
        transition: 0.25s background-color linear;
        background-color: #AAAADC;
    }

    &:active{
        transform: translate(0px, 2px);
    }
`