import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { myGraphqlSetting } from "./BoardWrite.queries";

export default function BoardWrite() {
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
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <div>############## 여기는 컨테이너입니다. ##############</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
      />
      <div>############## 여기는 컨테이너입니다. ##############</div>
    </div>
  );
}
