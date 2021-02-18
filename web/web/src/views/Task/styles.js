import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`
export const Form = styled.div`
width: 50%;
margin-bottom: 70px;

`
export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    button{
        border: none;
        background: none;
        outline:none;
    }

    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
`
export const Input = styled.div`
width:100%;
display: flex;
flex-direction: column;
margin: 20px 0;

span{
    color: #707070;
    margin: 5px 0;
}

input{
    font-size:16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #23869F;
}
//calendario
input[type="time"]::-webkit-calendar-picker-indicator {
  background: none;
    
}

input[type="date"]::-webkit-calendar-picker-indicator {
    background: none;
    
}

//imagem relogio e calendario
img{
width: 20px;
height:20px;
position: relative;
left: 95%;
bottom: 30px;
}

`
export const TextArea = styled.div`
width:100%;
display: flex;
flex-direction: column;
margin: 20px 0;

span{
    color: #707070;
    margin: 5px 0;
}

textarea{
    font-size: 16px;
    border: 1px solid #23869F;
}


`

export const Options = styled.div`
    display: flex;
    //cada um vai para seu lado
    justify-content: space-between;

    button{
        font-weight: bold;
        color: black;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        color: #23869F;
        font-weight: bold;
        font-size: 18px;
    }

`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #23869F;
        border: none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
`

