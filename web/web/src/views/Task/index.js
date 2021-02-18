// useState recurso que armazena estados
//useEffect é disparado toda vez que a pag carrega
import React, {useState, useEffect} from 'react';
import * as S from './styles';

//conexão com bd
import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//icones
import TypeIcons from '../../utils/typelcons';

function Task() {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
 
//exibindo tarefas atrasadas
async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response =>{
      setLateCount(response.data.length)
      
    })
   }
 
 //useEffect
 useEffect(() =>{
   lateVerify();
 }, [])

  return (
  <S.Container>
    <Header lateCount ={lateCount} />

    <S.Form>
        <S.TypeIcons>
        {
         TypeIcons.map((icon, index) =>(
             index > 0 &&
             <button type = "button" onClick={() => setType(index)}>
                <img src={icon} alt= "Tipo da Tarefa" className={type && type !== index && 'inative'} />
             </button>
         ))   
        }
        </S.TypeIcons>
        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Título da Tarefa..."></input>
        </S.Input>

        <S.TextArea>
          <span>Título</span>
          <textarea rows={5} placeholder="Detalhes da Tarefa..."/>
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date" placeholder="Título da Tarefa..."></input>
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input type="time" placeholder="Título da Tarefa..."></input>
        </S.Input>

        <S.Options>
          <div>
            <input type="checkbox"/>
            <span>CONCLUÍDO</span>
          </div>
        </S.Options>

    </S.Form>
    
    <Footer/>
    
  </S.Container>
  )
}

export default Task;