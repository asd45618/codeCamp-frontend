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
  console.log(router.query.qqq);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.qqq),
    },
  });

  console.log(data);

  return (
    <div>
      <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data?.fetchBoard?.writer ?? "작성자가 없습니다."}</div>
      <div>제목: {data?.fetchBoard?.title ?? "제목이 없습니다."}</div>
      <div>내용: {data?.fetchBoard?.contents ?? "내용이 없습니다."}</div>
    </div>
  );
}
