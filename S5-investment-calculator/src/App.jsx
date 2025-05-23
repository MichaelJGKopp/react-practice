import InputGroup from "./components/InputGroup";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.56,
    duration: 10,
  });

  return (
    <>
      <Header />
      <InputGroup input={input} setInput={setInput} />
      {input.duration > 0 ? (
        <ResultTable input={input} />
      ) : (
        <p className="center" style={{ color: "#ff9800" }}>Please enter valid inputs.</p>
      )}
    </>
  );
}

export default App;
