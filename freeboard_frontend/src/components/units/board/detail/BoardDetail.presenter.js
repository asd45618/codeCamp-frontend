import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.HeaderInfo>
          <S.Image2></S.Image2>
          <S.WriterTime>
            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
            <S.Time>{props.data?.fetchBoard.createdAt}</S.Time>
          </S.WriterTime>
        </S.HeaderInfo>
      </S.WrapperHeader>
      <S.Body>
        <S.BodyTitle>{props.data?.fetchBoard.title}</S.BodyTitle>
        <S.BodyContents>{props.data?.fetchBoard.contents}</S.BodyContents>
      </S.Body>
    </S.Wrapper>
  );
}
