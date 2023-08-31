import { useState } from "react";

export default function StateQuiz2() {
  const [count, setCount] = useState(0);

  function CountUp() {
    setCount(count + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={CountUp}>카운트 증가</button>
    </>
  );
}
