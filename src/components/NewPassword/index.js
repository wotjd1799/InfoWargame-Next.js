import * as S from "./styles"

const NewPassword = () => {
  return (
    <>
      <S.BodyWrapper>
        <S.Text>New Password</S.Text>
        <S.Input type='password'></S.Input>
        <S.Text>Password Confirm</S.Text>
        <S.Input type='password'></S.Input>
        <S.BodySubmit>Submit</S.BodySubmit>
      </S.BodyWrapper> 
    </>
  );  
}

export default NewPassword