import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
    </div>
  )
}
