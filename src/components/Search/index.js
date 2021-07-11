import * as S from "./styles"
import React, { useState } from 'react'

const Search = () => {

  const [smColor, setSmColor] = useState('white')
  const [smBgColor, setSmBgColor] = useState('#8C41DD')

  function changeSmColor() {
    setSmColor('#8C41dd');
    setSmBgColor('white');
  }

  return (
    <>
      <S.BodyWrapper>
        <S.Text>E-mail</S.Text>
        <S.Input placeholder='Enter your E-mail'></S.Input>
        <S.BodySubmit onClick={changeSmColor} style={{color : smColor, background : smBgColor}}>Submit</S.BodySubmit>
      </S.BodyWrapper> 
    </>
  );  
}

export default Search