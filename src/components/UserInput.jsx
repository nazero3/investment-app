import "../index.css";
//import { useState } from "react";
function UserInput({onChange ,userToHeader}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userToHeader.initialInvestment}
            onChange={(event) =>
              onChange("InitialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Invesment</label>
          <input type="number" required 
          value={userToHeader.annualInvestment}
          onChange={(event) =>  onChange('AnnualInvestment',event.target.value)}
          />
          
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required 
          value={userToHeader.expectedReturn}
          onChange={(event) =>  onChange('ExpectedeReturn',event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required 
          value={userToHeader.duration}
          onChange={(event) =>  onChange('Duration',event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
