import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./Components/Start";
import Q1 from "./Components/Q1";
import Q2 from "./Components/Q2";
import Q3 from "./Components/Q3";
import Q4 from "./Components/Q4";
import Q5 from "./Components/Q5";
import End from "./Components/End";

function App() {
  const [choices, setChoices] = useState({});

  const handleChoiceSelect = (questionId, choice) => {
    setChoices((prevChoices) => ({
      ...prevChoices,
      [questionId]: choice,
    }));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route
            path="q1"
            element={<Q1 onChoiceSelect={handleChoiceSelect} />}
          />
          <Route
            path="q2"
            element={<Q2 onChoiceSelect={handleChoiceSelect} />}
          />
          <Route
            path="q3"
            element={<Q3 onChoiceSelect={handleChoiceSelect} />}
          />
          <Route
            path="q4"
            element={<Q4 onChoiceSelect={handleChoiceSelect} />}
          />
          <Route
            path="q5"
            element={<Q5 onChoiceSelect={handleChoiceSelect} />}
          />
          <Route path="result" element={<End choices={choices} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
