import { useState } from "react";
import UserInput from "./components/UserInputs";
import Result from "./components/Result";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputsChanged(event, inputIdenticator) {
    setInputValues((prevValue) => {
      return {
        ...prevValue,
        [inputIdenticator]: +event.target.value,
      };
    });
  }

  const isInputValid = inputValues.duration >= 1;

  return (
    <>
      <UserInput
        inputs={inputValues}
        handleInputsChanged={handleInputsChanged}
      />
      {isInputValid && <Result inputs={inputValues} />}
      {!isInputValid && <p className="center">Input values are INVALID !!!</p>}
    </>
  );
}

export default App;
