import * as S from './styles'
import React, { useState } from 'react'

const SignUp = () => {

  const [ckColor,setCkColor] = useState('white');
  const [ckBgColor, setCkBgColor] = useState('#8C41DD')
  const [smColor,setSmColor] = useState('white');
  const [smBgColor, setSmBgColor] = useState('#8C41DD')

  function changeCkColor() {
    setCkColor('#8C41dd');
    setCkBgColor('white');
  }
  function changeSmColor() {
    setSmColor('#8C41dd');
    setSmBgColor('white');
  }

  

  return (
    <>
      <S.BodyWrapper>
        <S.Text>Nickname</S.Text>
        <S.Input></S.Input>
        <S.Text>E-mail</S.Text>
        <S.Input></S.Input>
        <S.BodyCheck onClick={changeCkColor} style={{color : ckColor, background : ckBgColor}}>Check</S.BodyCheck>
        <S.Text>Check number</S.Text>
        <S.Input></S.Input>
        <S.Text>Password</S.Text>
        <S.Input type='password'></S.Input>
        <S.Text>Password Confirm</S.Text>
        <S.Input type='password'></S.Input>
        <S.BodySubmit onClick={changeSmColor} style={{color : smColor, background : smBgColor}}>Submit</S.BodySubmit>
      </S.BodyWrapper> 
    </>
  );  

}

export default SignUp