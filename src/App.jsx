import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
function App() {
  const [num1, setNum1] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(false);
  const valueInput = (value) => {
    if (input=='Infinito'){
      return setInput(value)
    }
    if (input==='0'){
      return setInput(value)
    }
    if (value === "=") {
      let operacion = input.slice(num1.length, num1.length + 1);
      let num2 = input.slice(num1.length + 1);
      console.log("el valor entero es " + input);
      console.log("el primer valor es :" + num1);
      console.log(operacion);
      console.log(num2);
      if (operacion === "+") {
        console.log(Number(num1) + Number(num2));
        setOperator(false);
        return setInput(Number(num1) + Number(num2) + "");
      } else if (operacion === "-") {
        console.log(Number(num1) - Number(num2));
        setOperator(false);
        return setInput(Number(num1) - Number(num2) + "");
      } else if (operacion === "*") {
        console.log(Number(num1) * Number(num2));
        setOperator(false);
        return setInput(Number(num1) * Number(num2) + "");
      } else if (operacion === "/") {
        if (num2 == 0) {
          setOperator(false);
          return setInput("Infinito");
        }
        console.log(Number(num1) / Number(num2));
        setOperator(false);
        return setInput(Number(num1) / Number(num2) + "");
      }
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (operator) {
        return setInput(input + "");
      }
      setNum1(input);
      setOperator(true);
    }
    setInput(input + value);
  };

  const clearInput = () => {
    console.log("se reinicio");
    setInput("");
  };
  return (
    <div className="App">
      <h1>CALCULADORA EN REACT</h1>
      <div className="contenedor-calculadora">
        <Screen input={input} />
        <div className="fila">
          <Button valueInput={valueInput}>1</Button>
          <Button valueInput={valueInput}>2</Button>
          <Button valueInput={valueInput}>3</Button>
          <Button valueInput={valueInput}>+</Button>
        </div>
        <div className="fila">
          <Button valueInput={valueInput}>4</Button>
          <Button valueInput={valueInput}>5</Button>
          <Button valueInput={valueInput}>6</Button>
          <Button valueInput={valueInput}>-</Button>
        </div>
        <div className="fila">
          <Button valueInput={valueInput}>7</Button>
          <Button valueInput={valueInput}>8</Button>
          <Button valueInput={valueInput}>9</Button>
          <Button valueInput={valueInput}>*</Button>
        </div>
        <div className="fila">
          <Button valueInput={valueInput}>=</Button>
          <Button valueInput={valueInput}>0</Button>
          <Button valueInput={valueInput}>.</Button>
          <Button valueInput={valueInput}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear clearInput={clearInput}>clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}
export default App;
