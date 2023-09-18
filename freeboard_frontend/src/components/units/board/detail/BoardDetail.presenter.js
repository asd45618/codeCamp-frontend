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
} from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <Wrapper>
      <WrapperHeader>
        <HeaderInfo>
          <Image2></Image2>
          <WriterTime>
            <Writer>{props.data?.fetchBoard.writer}</Writer>
            <Time>{props.data?.fetchBoard.createdAt}</Time>
          </WriterTime>
        </HeaderInfo>
      </WrapperHeader>
      <Body>
        <BodyTitle>{props.data?.fetchBoard.title}</BodyTitle>
        <BodyContents>{props.data?.fetchBoard.contents}</BodyContents>
      </Body>
    </Wrapper>
  );
}
