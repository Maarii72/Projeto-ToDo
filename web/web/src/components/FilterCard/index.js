import React from 'react';
import * as S from './styles';

//importação de imagens
import filter from '../../assets/filter.png'
//com chave se torna variável e não texto
function FilterCard({title, actived}) {
  return (
    <S.Container actived ={actived}>
     <img src={filter} alt="filtro"/>
     <span>{title}</span>
    </S.Container>
  )
}

export default FilterCard;