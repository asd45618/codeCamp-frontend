import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <S.Wrapper>
      <h1>게시물 등록</h1>
      <S.WrapperTop>
        <S.Top>
          <S.Contents>작성자</S.Contents>
          <S.HalfInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.OnchangeWriter}
          ></S.HalfInput>
          <S.ErrorMessage>{props.errorWriter}</S.ErrorMessage>
        </S.Top>
        <S.Top>
          <S.Contents>비밀번호</S.Contents>
          <S.HalfInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.OnchangePassword}
          ></S.HalfInput>
          <S.ErrorMessage>{props.errorPassword}</S.ErrorMessage>
        </S.Top>
      </S.WrapperTop>
      <S.WrapperContents>
        <S.Contents>제목</S.Contents>
        <S.FullInput
          type="text"
          placeholder="제목을 입력해 주세요."
          onChange={props.OnChangeTitle}
        ></S.FullInput>
        <S.ErrorMessage>{props.errorTitle}</S.ErrorMessage>
      </S.WrapperContents>
      <S.WrapperContents>
        <S.Contents>내용</S.Contents>
        <S.FullInputContent
          type="text"
          placeholder="내용을 작성해 주세요."
          onChange={props.OnchangeContent}
        ></S.FullInputContent>
        <S.ErrorMessage>{props.errorContent}</S.ErrorMessage>
      </S.WrapperContents>
      <S.WrapperContents>
        <S.Contents>주소</S.Contents>
        <S.PostCode>
          <S.PostCodeInput type="number"></S.PostCodeInput>
          <S.PostCodeButton>우편번호 검색</S.PostCodeButton>
        </S.PostCode>
        <S.FullInput type="text"></S.FullInput>
        <S.FullInput type="text"></S.FullInput>
      </S.WrapperContents>
      <S.WrapperContents>
        <S.Contents>유튜브</S.Contents>
        <S.FullInput
          type="text"
          placeholder="링크를 복사해 주세요."
        ></S.FullInput>
      </S.WrapperContents>
      <S.WrapperContents>
        <S.Contents>사진 첨부</S.Contents>
        <S.PictureDiv>
          <S.Picture></S.Picture>
          <S.Picture></S.Picture>
          <S.Picture></S.Picture>
        </S.PictureDiv>
      </S.WrapperContents>
      <S.WrapperContents>
        <S.Contents>메인 설정</S.Contents>
        <S.Radio type="radio" name="main" value="유튜브" />
        유튜브
        <S.Radio type="radio" name="main" value="사진" />
        사진
      </S.WrapperContents>
      <S.RegisterButton
        isActive={props.isActive}
        onClick={props.OnclickRegister}
      >
        등록하기
      </S.RegisterButton>
    </S.Wrapper>
  );
}
