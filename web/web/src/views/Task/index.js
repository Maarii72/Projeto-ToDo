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

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task() {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const[id, setId] = useState();
    //por padrão sempre sera uma tarefa false
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');
 
//exibindo tarefas atrasadas
async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response =>{
      setLateCount(response.data.length)
      
    })
   }

   //botão salvar e mandar para o BD
   async function Save(){
     await api.post('/task', {
       macaddress,
       type,
       title,
       description,
       when:`${date}T${hour}.000`
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
          <input type="text" placeholder="Título da Tarefa..."
          onChange={e => setTitle(e.target.value)} value={title}></input>
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Detalhes da Tarefa..."
          onChange={e => setDescription(e.target.value)} value={description}/>
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date" placeholder="Título da Tarefa..."></input>
          <img src={iconCalendar} alt="calendário"
          onChange={e => setDate(e.target.value)} value={date}/>
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input type="time" placeholder="Título da Tarefa..."></input>
          <img src={iconClock} alt="Relógio"
          onChange={e => setHour(e.target.value)} value={hour}/>
        </S.Input>

        <S.Options>
          <div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
            <span>CONCLUÍDO</span>
          </div>
          <button type="button">EXCLUIR</button>
        </S.Options>

        <S.Save>
          <button type="button">SALVAR</button>
        </S.Save>

    </S.Form>
    
    <Footer/>
    
  </S.Container>
  )
}

export default Task;