import Input from "./Input";

export default function InputGroup({ input, setInput }) {
  const handleChange = (id, newValue) => {
    setInput(prevInput => ({
      ...prevInput,
      [id]: newValue
    }));
  };

  return (
    <div id="user-input">
      <div className="input-group">
        <Input 
          id="initialInvestment" 
          label="Initial Investment" 
          value={input.initialInvestment}
          onChange={handleChange}
        />
        <Input 
          id="annualInvestment" 
          label="Annual Investment" 
          value={input.annualInvestment}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <Input
          id="expectedReturn"
          label="Expected Return"
          value={input.expectedReturn}
          onChange={handleChange}
        />
        <Input
          id="duration"
          label="Duration"
          value={input.duration}
          onChange={handleChange}
          invalid={input.duration < 1}
          errorMessage="Duration must be at least 1 year."
        />
      </div>
    </div>
  );
}
