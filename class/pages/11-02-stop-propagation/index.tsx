import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import CheckBox from "./checkbox";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  // const onClickBoard = (event: MouseEvent<HTMLDivElement>) => {
  //   alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  // };

  // console.log(data?.fetchBoards);

  const qqq1 = () => {
    alert("1번 클릭");
  };

  const qqq4 = (event: any) => {
    event.stopPropagation();
    alert("4번 클릭");
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={qqq1}>
          <CheckBox />
          <span style={{ margin: "10px" }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {/* <div>1번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div> */}
    </div>
  );
}
