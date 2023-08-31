import { useState } from "react";

export default function StateQuiz3() {
  const [number, setNumber] = useState("000000");

  function ChangeNumber() {
    setNumber(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
  }

  return (
    <>
      <div>{number}</div>
      <button onClick={ChangeNumber}>인증번호 전송</button>
    </>
  );
}
