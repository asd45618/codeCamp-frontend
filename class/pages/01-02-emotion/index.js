import { Label, Input, Wrapper } from "../../styles/emotion";

export default function EmotionPage() {
  return (
    <Wrapper>
      <h1>로그인</h1>
      <Label>이메일</Label>
      <Input type="text"></Input>
      <Label>비밀번호</Label>
      <Input type="text"></Input>
    </Wrapper>
  );
}
