import Input from "./Input";

export default function InputGroup({ input, setInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          id="initial-investment"
          label="Initial Investment"
          value={input.initialInvestment}
          onChange={(value) => setInput({ ...input, initialInvestment: value })}
        />
        <Input
          id="annual-investment"
          label="Annual Investment"
          value={input.annualInvestment}
          onChange={(value) => setInput({ ...input, annualInvestment: value })}
        />
      </div>
      <div className="input-group">
        <Input
          id="expected-return"
          label="Expected Return"
          value={input.expectedReturn}
          onChange={(value) => setInput({ ...input, expectedReturn: value })}
        />
        <Input
          id="duration"
          label="Duration"
          value={input.duration}
          onChange={(value) => setInput({ ...input, duration: value })}
        />
      </div>
    </div>
  );
}
