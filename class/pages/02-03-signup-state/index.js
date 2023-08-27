import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    console.log(email, password);

    if (email.includes("@") === false && password.length < 8) {
      setEmailError("이메일이 올바르지 않습니다!! @가 없음!!");
      setPasswordError("비밀번호는 8자리 이상이어야 됩니다!!");
    } else if (email.includes("@") === false && password.length >= 8) {
      setEmailError("이메일이 올바르지 않습니다!! @가 없음!!");
    } else if (email.includes("@") === true && password.length < 8) {
      setPasswordError("비밀번호는 8자리 이상이어야 됩니다!!");
    } else {
      alert("회원가입을 축하합니다!!");
    }
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <div>{passwordError}</div>
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
