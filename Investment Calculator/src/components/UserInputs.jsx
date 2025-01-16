export default function UserInput({ inputs, handleInputsChanged }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={inputs.initialInvestment}
            onChange={(event) =>
              handleInputsChanged(event, "initialInvestment")
            }
            required
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            value={inputs.annualInvestment}
            onChange={(event) => handleInputsChanged(event, "annualInvestment")}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            value={inputs.expectedReturn}
            onChange={(event) => handleInputsChanged(event, "expectedReturn")}
            required
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={inputs.duration}
            onChange={(event) => handleInputsChanged(event, "duration")}
            required
          />
        </p>
      </div>
    </section>
  );
}
