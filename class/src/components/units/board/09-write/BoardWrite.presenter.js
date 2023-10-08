import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>############## 여기는 프레젠터입니다. ##############</div>
      <div>
        작성자: <S.RedInput type="text" onChange={props.onChangeWriter} />
        제목: <S.GreenInput type="text" onChange={props.onChangeTitle} />
        내용: <input type="text" onChange={props.onChangeContents} />
        <S.BlueButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.BlueButton>
      </div>
      <div>############## 여기는 프레젠터입니다. ##############</div>
    </div>
  );
}
