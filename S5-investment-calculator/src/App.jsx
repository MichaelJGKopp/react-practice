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
    <div className="App">
      <Header />
      <InputGroup input={input} setInput={setInput} />
      <ResultTable input={input} />
    </div>
  );
}

export default App;

