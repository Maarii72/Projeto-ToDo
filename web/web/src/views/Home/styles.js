import styled from 'styled-components';

export const Container = styled.div`
width: 100%;

`
export const FilterArea = styled.div`
    width:100%;
    display: flex;
    //propriedade que nao modifica os cartões e deixa um em baixo do outro
    //flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button{
        background: none;
        border: none;
        outline:none;
    }

`
export const Content = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #23869F;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    h3{
        color: #23869F;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0 20px;

    }
`