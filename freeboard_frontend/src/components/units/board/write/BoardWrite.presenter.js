import {
  Wrapper,
  WrapperTop,
  Top,
  HalfInput,
  Contents,
  WrapperContents,
  FullInput,
  FullInputContent,
  PostCode,
  PostCodeInput,
  PostCodeButton,
  PictureDiv,
  Picture,
  Radio,
  RegisterButton,
  ErrorMessage,
} from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <h1>게시물 등록</h1>
      <WrapperTop>
        <Top>
          <Contents>작성자</Contents>
          <HalfInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.OnchangeWriter}
          ></HalfInput>
          <ErrorMessage>{props.errorWriter}</ErrorMessage>
        </Top>
        <Top>
          <Contents>비밀번호</Contents>
          <HalfInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.OnchangePassword}
          ></HalfInput>
          <ErrorMessage>{props.errorPassword}</ErrorMessage>
        </Top>
      </WrapperTop>
      <WrapperContents>
        <Contents>제목</Contents>
        <FullInput
          type="text"
          placeholder="제목을 입력해 주세요."
          onChange={props.OnChangeTitle}
        ></FullInput>
        <ErrorMessage>{props.errorTitle}</ErrorMessage>
      </WrapperContents>
      <WrapperContents>
        <Contents>내용</Contents>
        <FullInputContent
          type="text"
          placeholder="내용을 작성해 주세요."
          onChange={props.OnchangeContent}
        ></FullInputContent>
        <ErrorMessage>{props.errorContent}</ErrorMessage>
      </WrapperContents>
      <WrapperContents>
        <Contents>주소</Contents>
        <PostCode>
          <PostCodeInput type="number"></PostCodeInput>
          <PostCodeButton>우편번호 검색</PostCodeButton>
        </PostCode>
        <FullInput type="text"></FullInput>
        <FullInput type="text"></FullInput>
      </WrapperContents>
      <WrapperContents>
        <Contents>유튜브</Contents>
        <FullInput type="text" placeholder="링크를 복사해 주세요."></FullInput>
      </WrapperContents>
      <WrapperContents>
        <Contents>사진 첨부</Contents>
        <PictureDiv>
          <Picture></Picture>
          <Picture></Picture>
          <Picture></Picture>
        </PictureDiv>
      </WrapperContents>
      <WrapperContents>
        <Contents>메인 설정</Contents>
        <Radio type="radio" name="main" value="유튜브" />
        유튜브
        <Radio type="radio" name="main" value="사진" />
        사진
      </WrapperContents>
      <RegisterButton onClick={props.OnclickRegister}>등록하기</RegisterButton>
    </Wrapper>
  );
}
