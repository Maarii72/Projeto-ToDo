import styled from 'styled-components';
// ficar um dentro do outro display flex(caixa)
export const Container = styled.div`
width:100%;
height: 70px;
background: #23869F;
border-bottom: 5px solid #000000;
display: flex;
`
export const LeftSide = styled.div`
width:50%;
height: 70px;
display: flex;
align-items: center;
padding-left: 10px;

img{
    width: 100px;
    height: 40px;
}


`
export const RightSide = styled.div`
width:50%;
height: 70px;
display: flex;
align-items: center;
justify-content: flex-end;

//botão de notificação
button{
        background: none;
        border: none;
        cursor: pointer;
        outline:none;
    }


a, button{
    color:#FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    
    /* mouse passa por cima e muda cor*/
    &:hover{
        color:#000000; 
    }
}

#notification{
    img{
        width: 25px;
        height: 30px;
    }

    span{
        background: #FFF;
        color:#000000;
        padding: 3px 7px;
        border-radius: 50%;
        /*position relative:  Outro conteúdo não será ajustado para caber em qualquer lacuna deixada pelo elemento.*/
        position: relative;
        top: -20px;
        right: 10px;
    }

    &:hover{
       opacity: 0.5; 
    }

}
.dividir::after{
    content: "|";
    margin: 0 10px;
    color: #FFF;
}

`