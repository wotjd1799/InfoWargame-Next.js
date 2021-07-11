import * as S from './styles'
import Link from 'next/link'

const Login = () => {

  return (
    <>
      <S.BodyWrapper>
        <S.Text>E-mail</S.Text>
        <S.Input></S.Input>
        <S.Text>Password</S.Text>
        <S.Input></S.Input>
        <Link href='/search'>
          <S.BodySearch>forgot your password</S.BodySearch>
        </Link>
        <S.BodyLogin>Login</S.BodyLogin>
      </S.BodyWrapper> 
    </>
  )

}

export default Login