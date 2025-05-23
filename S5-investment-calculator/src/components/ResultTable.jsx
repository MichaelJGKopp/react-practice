import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function ResultTable({ input }) {
  console.log(input);
  const results = calculateInvestmentResults(input);
  console.log(results);
  let totalInterest = 0;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody id="results-body">
        {results.map((values, index) => {
          totalInterest += values.interest;
          const investedCapital =
            input.initialInvestment + values.year * values.annualInvestment;
            
          return (
            <tr key={index}>
              <td>{values.year}</td>
              <td>{formatter.format(values.valueEndOfYear)}</td>
              <td>{formatter.format(values.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
