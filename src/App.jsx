import { useState } from "react";

import "./App.css";

import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = useState([0]);

  const handleAddCounter = () => {
    const newTab = [...counters];
    newTab.push(0);
    setCounters(newTab);
  };

  const handleClickPlus = (index) => {
    const newTab = [...counters];
    newTab[index]++;
    setCounters(newTab);
  };

  const handleClickMinus = (index) => {
    const newTab = [...counters];
    newTab[index]--;
    setCounters(newTab);
  };

  const handleReset = (index) => {
    const newTab = [...counters];
    newTab[index] = 0;
    setCounters(newTab);
  };

  return (
    <div>
      {counters.length >= 3 ? null : (
        <button onClick={handleAddCounter}>Add counter</button>
      )}
      {counters.map((counter, index) => {
        return (
          <Counter
            key={index}
            counter={counter}
            index={index}
            handleClickPlus={handleClickPlus}
            handleClickMinus={handleClickMinus}
            handleReset={handleReset}
          />
        );
      })}
    </div>
  );
}

export default App;
