import React, { useState } from "react";
import Button from "../Button/Button";
import Stat from "../Stat/Stat";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = (e) => {
    if (e.target.className === "good") {
      setGood(good + 1);
    }
  };

  const neutralClick = (e) => {
    if (e.target.className === "neutral") {
      setNeutral(neutral + 1);
    }
  };

  const badClick = (e) => {
    if (e.target.className === "bad") {
      setBad(bad + 1);
    }
  };
 
  return (
    <div>
      <h1>Feedback</h1>
      <Button onClick={goodClick} value="good" />
      <Button onClick={neutralClick} value="neutral" />
      <Button onClick={badClick} value="bad" />
    
      <h1>Statistics</h1>
      <Stat good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
