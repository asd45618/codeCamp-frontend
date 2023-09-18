import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const router = useRouter();

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
      try {
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
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };
  return (
    <BoardWriteUI
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContent={errorContent}
      OnchangeWriter={OnchangeWriter}
      OnchangePassword={OnchangePassword}
      OnChangeTitle={OnChangeTitle}
      OnchangeContent={OnchangeContent}
      OnclickRegister={OnclickRegister}
    />
  );
}
