import React, { useState } from "react";

function ErrorCounter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <h5>Error Count: {count}</h5>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default ErrorCounter;