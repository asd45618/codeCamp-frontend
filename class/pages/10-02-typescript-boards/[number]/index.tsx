import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  console.log(router.query.number);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  console.log(data);

  const onClickMove = () => {
    router.push(`/10-02-typescript-boards/${router.query.number}/edit`);
  };

  return (
    <div>
      <div>{router.query.number}번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data?.fetchBoard?.writer ?? "작성자가 없습니다."}</div>
      <div>제목: {data?.fetchBoard?.title ?? "제목이 없습니다."}</div>
      <div>내용: {data?.fetchBoard?.contents ?? "내용이 없습니다."}</div>
      <button onClick={onClickMove}>수정페이지 바로가기</button>
    </div>
  );
}
