import { calculateInvestmentResults } from "../util/investment.js";
import "../index.css";
function Results({ Input }) {
  const ResultData = calculateInvestmentResults(Input);
  console.log(ResultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Initial Investment</th>
          <th>Annual Investment</th>
          <th>Expected Return</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {ResultData.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{yearData.valueEndOfYear}</td>
              <td>{yearData}</td>
              <td>{yearData}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
