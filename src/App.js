import React,{useState} from 'react';
import "./App.css";

function App() {

  let [num1,setNum1] = useState("");
  let [num2,setNum2] = useState("");
  let [success,setSuccess] = useState("");
  let [error,setError] = useState("");
  let [result,setResult] = useState("");

  function validation(){
    setError("");
    setSuccess("");
    setResult("");

    if(num1 === "" || num2 === ""){
      setError("Error : num1 or num2 can not be empty");
      return false;
    }

    if(isNaN(num1) || isNaN(num2)){
      setError("Error : Enter valid number");
      return false;
    }
    return true;
  }

  let addition = () => {
    if(validation()){
      setResult(Number(num1) + Number(num2));
      setSuccess("Success : Your result is shown above!")
    }
  }

  let substraction = () => {
    if(validation()){
      setResult(Number(num1) - Number(num2));
      setSuccess("Success : Your result is shown above!")
    }
  }
  let multiply = () => {
    if(validation()){
      setResult(Number(num1) * Number(num2));
      setSuccess("Success : Your result is shown above!")
    }
  }

  let divide = () => {
    if(validation()){
      setResult(Number(num1) / Number(num2));
      setSuccess("Success : Your result is shown above!")
    }
  }





  return (
    <div className="App">
      <div className="inputs">
        <h1>React Calculator</h1>
        <input type="text" placeholder="Num 1" onChange={(e) => setNum1(e.target.value)}/>

        <input type="text" placeholder="Num 2"  onChange={(e) => setNum2(e.target.value)}/>
      </div>

      <div className="buttons">
        <button onClick={addition}>+</button>
        <button onClick={substraction}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
      { error && <div className="error"> {error}</div>}
      { result && <div className="result">Result = {result}</div>}
      { success && <div className="success"> {success}</div>}

    </div>
  );
}

export default App;
