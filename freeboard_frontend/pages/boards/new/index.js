import { useState } from "react";
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
} from "../../../styles/emotion";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function New() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const OnchangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const OnchangePassword = (event) => {
    setPassword(event.target.value);
  };

  const OnChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const OnchangeContent = (event) => {
    setContent(event.target.value);
  };

  const OnclickRegister = async () => {
    if (!writer) {
      setErrorWriter("작성자를 입력해 주세요.");
    } else if (writer) {
      setErrorWriter("");
    }
    if (!password) {
      setErrorPassword("비밀번호를 입력해 주세요.");
    } else if (password) {
      setErrorPassword("");
    }
    if (!title) {
      setErrorTitle("제목을 입력해 주세요.");
    } else if (title) {
      setErrorTitle("");
    }
    if (!content) {
      setErrorContent("내용을 입력해 주세요.");
    } else if (content) {
      setErrorContent("");
    }
    if (writer && password && title && content) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents: content,
          },
        },
      });
      console.log(result);
    }
  };

  return (
    <Wrapper>
      <h1>게시물 등록</h1>
      <WrapperTop>
        <Top>
          <Contents>작성자</Contents>
          <HalfInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={OnchangeWriter}
          ></HalfInput>
          <ErrorMessage>{errorWriter}</ErrorMessage>
        </Top>
        <Top>
          <Contents>비밀번호</Contents>
          <HalfInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={OnchangePassword}
          ></HalfInput>
          <ErrorMessage>{errorPassword}</ErrorMessage>
        </Top>
      </WrapperTop>
      <WrapperContents>
        <Contents>제목</Contents>
        <FullInput
          type="text"
          placeholder="제목을 입력해 주세요."
          onChange={OnChangeTitle}
        ></FullInput>
        <ErrorMessage>{errorTitle}</ErrorMessage>
      </WrapperContents>
      <WrapperContents>
        <Contents>내용</Contents>
        <FullInputContent
          type="text"
          placeholder="내용을 작성해 주세요."
          onChange={OnchangeContent}
        ></FullInputContent>
        <ErrorMessage>{errorContent}</ErrorMessage>
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
      <RegisterButton onClick={OnclickRegister}>등록하기</RegisterButton>
    </Wrapper>
  );
}
