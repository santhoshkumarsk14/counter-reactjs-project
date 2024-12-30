import { useState } from "react";
import "./styles.css";

export default function App() {
  const [increment, setIncrement] = useState(1);
  const [countNum, setCountNum] = useState(0);
  const [date, setDate] = useState(new Date().toString());
  const content = "";
  return (
    <div className="App">
      <Counter />
      <Count />
      <CalenderValue />
    </div>
  );

  function Counter() {
    return (
      <div className="counter">
        <button
          onClick={() =>
            setIncrement(increment > 1 ? increment - 1 : increment)
          }
        >
          -
        </button>
        <p>Step : {increment} </p>
        <button onClick={() => setIncrement(increment + 1)}>+</button>
      </div>
    );
  }

  function Count() {
    return (
      <div>
        <div className="count">
          <button onClick={() => setCountNum(countNum - increment)}>-</button>
          <p>Count : {countNum}</p>
          <button onClick={() => setCountNum(countNum + increment)}>+</button>
        </div>
        <div></div>
      </div>
    );
  }

  function CalenderValue() {
    return (
      <div>
        <p>{setContent()}</p>
      </div>
    );
  }

  function setContent() {
    try {
      if (countNum === 0) {
        return `Today's date is ${new Date().toDateString()}`;
      } else if (countNum < 0) {
        return `Date is ${getAdjustedDate().toDateString()} days)`;
      } else {
        return `Date is ${getAdjustedDate().toDateString()} `;
      }
    } catch (e) {}
  }

  function getAdjustedDate() {
    const currentDate = new Date(); // Work with a new Date object
    currentDate.setDate(currentDate.getDate() + countNum); // Adjust the date
    return currentDate; // Return the adjusted Date object
  }
}
