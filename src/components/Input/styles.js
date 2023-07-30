import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #6969FF;

    border: 2px black solid;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 0px 2px; 
    margin: 5px 0px 15px 0px;

    input{
        appearance: none;

        width: 100%;
        height: 100%;
        background-color: #8888FF;
        border: 2px solid black;
        border-radius: 3px;

        margin: 2px;

        text-align: right; 

        font-size: 2rem;
        font-family: 'Roboto';
        color: white;

        box-sizing: border-box;
    }
`