import { calculateInvestmentResults ,formatter} from "../util/investment.js";
import "../index.css";
function Results({ Input }) {
  const ResultData = calculateInvestmentResults(Input);
  const initialInvestment = ResultData[0].valueEndOfYear - ResultData[0].interest - ResultData[0].annualInvestment;
  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {ResultData.map((yearData) => {
          const totalIntrest = yearData.valueEndOfYear - yearData.interest - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear  - totalIntrest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
