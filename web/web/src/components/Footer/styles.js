import styled from 'styled-components';
// ficar um dentro do outro display flex(caixa)
export const Container = styled.div`
width:100%;
height: 50px;
background: #23869F;
border-top: 5px solid #000000;

position: fixed;
bottom: 0;

display: flex;
align-items: center;
justify-content: center;

span{
    color: #FFF;
}
`