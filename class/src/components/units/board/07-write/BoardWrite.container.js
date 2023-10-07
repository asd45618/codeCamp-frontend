import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { myGraphqlSetting } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [MyFunction] = useMutation(myGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        //variables -> $ 역활
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    event.target.value && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    writer && event.target.value && contents
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    writer && title && event.target.value
      ? setIsActive(true)
      : setIsActive(false);
  };

  return (
    <div>
      <div>############## 여기는 컨테이너입니다. ##############</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isActive={isActive}
      />
      <div>############## 여기는 컨테이너입니다. ##############</div>
    </div>
  );
}
