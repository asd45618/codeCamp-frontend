import { useState } from "react";
import { ErrMessage } from "../../styles/emotion";

export default function StateQuiz4() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPw, setErrPw] = useState("");
  const [errCheckPw, setErrCheckPw] = useState("");

  function ChangeEmail(event) {
    setEmail(event.target.value);
  }

  function ChangePassword(event) {
    setPw(event.target.value);
  }

  function ChangeCheckPassword(event) {
    setCheckPw(event.target.value);
  }

  function RegisterButton() {
    if (!email.includes("@") && pw != checkPw) {
      setErrEmail("@가 없습니다.");
    } else if (!email.includes("@") && pw === checkPw) {
      setErrEmail("@가 없습니다.");
    } else if (email.includes("@") && pw != checkPw) {
      setErrCheckPw("비밀번호가 일치하지 않습니다.");
      setErrEmail("");
      setErrPw("");
    } else if (!pw) {
      setErrPw("비밀번호를 입력해주세요.");
      setErrEmail("");
    } else {
      setErrEmail("");
      setErrCheckPw("");
      setErrPw("");
      alert("회원가입이 완료되었습니다.");
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="이메일을 입력해 주세요."
        onChange={ChangeEmail}
      />
      <ErrMessage>{errEmail}</ErrMessage>
      <input
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        onChange={ChangePassword}
      />
      <ErrMessage>{errPw}</ErrMessage>
      <input
        type="password"
        placeholder="비밀번호를 다시 입력해 주세요."
        onChange={ChangeCheckPassword}
      />
      <ErrMessage>{errCheckPw}</ErrMessage>
      <button onClick={RegisterButton}>가입하기</button>
    </>
  );
}
