import * as S from './styles'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <S.HeadWrapper>
        <Link href="/">
          <S.HeaderLogo
            src={'/logo.png'}
          />
        </Link>
        <Link href="/introduce">
          <a>test introduce</a>
        </Link>
        <S.HeadButton>
          <Link href="/login">
            <S.HeadLoginButton>
              Login
            </S.HeadLoginButton>
          </Link>
          <Link href="/signup">
            <S.HeadSignupButton>
              Sign up
            </S.HeadSignupButton>
          </Link>
        </S.HeadButton>
      </S.HeadWrapper>
      <S.HeadLine/> 
    </>
  )
}

export default Header