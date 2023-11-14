import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { myGraphqlSetting, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardsWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [MyFunction] = useMutation(myGraphqlSetting);
  const [updateBoard] = useMutation(UPDATE_BOARD);

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
    router.push(`/10-02-typescript-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.number) };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });
    router.push(`/10-02-typescript-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <div>############## 여기는 컨테이너입니다. ##############</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data}
      />
      <div>############## 여기는 컨테이너입니다. ##############</div>
    </div>
  );
}
