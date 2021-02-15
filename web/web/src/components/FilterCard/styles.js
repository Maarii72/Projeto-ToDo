import styled from 'styled-components';
// ficar um dentro do outro display flex(caixa)
export const Container = styled.div`
width:230px;
height: 50px;
background: ${props => props.actived ? '#000000': '#23869F'};
padding: 10px;
//mouse mãozinha
cursor: pointer;


border-radius: 5px;

display: flex;//por padrão um do lado do outro
flex-direction: column;
justify-content: space-around;


img{
    width: 25px;
    height: 25px;
}

span{
    color: #FFF;
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
}

&:hover{
    background: #000000;
}

`