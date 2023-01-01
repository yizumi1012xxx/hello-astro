import React from "react";

export function Counter() {
  const [counter, setCounter] = React.useState(1);
  return (
    <div>
      <p className="counter-display">{counter}</p>
      <button
        className="counter-button"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
}
