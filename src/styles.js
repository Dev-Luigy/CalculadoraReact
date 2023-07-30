import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-Color: #AAAACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color : #CCC;
    width: 50%;
    border-radius: 2%;
    padding: 1%;
    border: 2px solid black;

    max-width: 400px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`