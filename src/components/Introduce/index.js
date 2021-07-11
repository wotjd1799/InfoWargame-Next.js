import * as S from "./styles"

const DeveloperName = ['정명진', '이재성', '양진혁', '김예승', '윤민섭', '장원호', '고경태', '박준형', '황주영']
const QuestionMarkName = ['T3T0', '이주석', '김민제', '손영웅', '심호준', '신희원']

const Introduce = () => {
  return (
    <>
      <S.TopWrapper>
        <S.Photo
        src ={'/developer.png'}
        />  
        <S.DeveloperWrapper>
          {DeveloperName.map((name, index) => <S.Name key={index}>{name}</S.Name>)}
        </S.DeveloperWrapper>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Photo
          src={'./questionMark.png'}
        />  
        <S.QuestionMarkWrapper>
          {QuestionMarkName.map((name, index) => <S.Name key={index}>{name}</S.Name>)}
        </S.QuestionMarkWrapper>
      </S.BottomWrapper>
    </>
  );  
}

export default Introduce;