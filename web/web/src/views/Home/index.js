// useState recurso que armazena estados
//useEffect é disparado toda vez que a pag carrega
import React, {useState, useEffect} from 'react';
import * as S from './styles';

//conexão com bd
import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  //função carregar do bd as tarefas
 async function loadTasks(){
  await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
  .then(response =>{
    setTasks(response.data)
    
  })

 }
//exibindo tarefas atrasadas
 async function lateVerify(){
  await api.get(`/task/filter/late/11:11:11:11:11:11`)
  .then(response =>{
    setLateCount(response.data.length)
    
  })
 }

 function Notification(){
   setFilterActived('late');
 }

 //useEffect
 useEffect(() =>{
  loadTasks();
  lateVerify();
 }, [filterActived])

  return (
  <S.Container>
    <Header lateCount ={lateCount} clickNotification={Notification}/>

    <S.FilterArea>
      <button type="button" onClick ={() => setFilterActived("all")}>
       <FilterCard title="Todos" actived={filterActived  == 'all'} />
      </button>
      
      <button type="button" onClick ={() => setFilterActived("today")}>
      <FilterCard title="Hoje"
      actived={filterActived == 'today'} />
      </button>

      <button type="button" onClick ={() => setFilterActived("week")}>
      <FilterCard title="Semana"
      actived={filterActived == 'week'} />
      </button>

      <button type="button" onClick ={() => setFilterActived("month")}>
      <FilterCard title="Mês" actived={filterActived == 'month'} />
      </button>

      <button type="button" onClick ={() => setFilterActived("year")}>
      <FilterCard title="Ano" actived={filterActived == 'year'} />
      </button>

    </S.FilterArea>

    <S.Title>
      <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
    </S.Title>

    <S.Content>
      {
        tasks.map( t => (
      <TaskCard type={t.type} title={t.title} when={t.when}/>
        ))
      }
    </S.Content>
    
    <Footer/>
    
  </S.Container>
  )
}

export default Home;