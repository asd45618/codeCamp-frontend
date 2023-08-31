const { useState } = require("react");

export default function StateQuiz() {
  const [hello, setHello] = useState("안녕하세요");

  function ChangeHello() {
    setHello("반갑습니다.");
  }

  return (
    <>
      <button onClick={ChangeHello}>{hello}</button>
    </>
  );
}
