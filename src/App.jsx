import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";



function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = userInput.duration >=1;

  function handleOnchange(name, newVal) {
    setUserInput((oldVals) => {
      return {
        ...oldVals,
        [name]: +newVal,
      };
    });
  }
  
  return (
    <>
      <Header />
      <UserInput userToHeader={userInput} onChange={handleOnchange}/>
      {!isValid && <p className="center">please enter a valid duration</p>}
      {isValid && <Results Input={userInput}/>}
      
    </>
  );
}

export default App;
