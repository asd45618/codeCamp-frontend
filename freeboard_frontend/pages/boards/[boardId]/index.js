import { gql, useQuery } from "@apollo/client";
import {
  Wrapper,
  Image2,
  WrapperHeader,
  HeaderInfo,
  Writer,
  Time,
  WriterTime,
  Body,
  BodyTitle,
  BodyContents,
} from "../../../styles/emotion";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();
  console.log(router.query.boardId);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  console.log(data);

  return (
    <Wrapper>
      <WrapperHeader>
        <HeaderInfo>
          <Image2></Image2>
          <WriterTime>
            <Writer>{data?.fetchBoard.writer}</Writer>
            <Time>{data?.fetchBoard.createdAt}</Time>
          </WriterTime>
        </HeaderInfo>
      </WrapperHeader>
      <Body>
        <BodyTitle>{data?.fetchBoard.title}</BodyTitle>
        <BodyContents>{data?.fetchBoard.contents}</BodyContents>
      </Body>
    </Wrapper>
  );
}
