import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";

let punto = false;
let initOperator = true;

function App() {
  const [num1, setNum1] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(false);

  const valueInput = (value) => {
    console.log(initOperator);
    if (
      value !== "." &&
      value !== "=" &&
      value !== "+" &&
      value !== "-" &&
      value !== "*" &&
      value !== "/" &&
      value !== "0"
    ) {
      initOperator = false;
    }
    if (
      value == "." ||
      value == "=" ||
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      if (
        initOperator &&
        !input.includes("/0") &&
        !input.includes("*0") &&
        !input.includes("-0") &&
        !input.includes("+0")
      ) {
        return;
      }
    }
    if (input == "Infinito") {
      return setInput(value);
    }
    if (input === "0") {
      return setInput(value);
    }
    if (value == "=") {
      if (!num1) {
        return;
      }
    }
    if (value === "=") {
      let operacion = input.slice(num1.length, num1.length + 1);
      let num2 = input.slice(num1.length + 1);
      console.log(num1);
      console.log(operacion);
      console.log(num2);
      if (num2 == "0") {
        initOperator = false;
      }
      if (operacion === "+") {
        console.log(Number(num1) + Number(num2));
        setOperator(false);
        setNum1(null);
        return setInput(Number(num1) + Number(num2) + "");
      } else if (operacion === "-") {
        console.log(Number(num1) - Number(num2));
        setOperator(false);
        setNum1(null);
        return setInput(Number(num1) - Number(num2) + "");
      } else if (operacion === "*") {
        console.log(Number(num1) * Number(num2));
        setOperator(false);
        setNum1(null);
        return setInput(Number(num1) * Number(num2) + "");
      } else if (operacion === "/") {
        if (num2 == 0) {
          setNum1(null);
          setOperator(false);
          return setInput("Infinito");
        }
        setOperator(false);
        return setInput(Number(num1) / Number(num2) + "");
      }
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (input[input.length - 1] == ".") {
        return;
      }
      if (operator) {
        return setInput(input + "");
      }
      setNum1(input);
      setOperator(true);
      punto = false;
      initOperator = true;
    }
    if (value == ".") {
      if (punto) {
        return;
      }
      punto = true;
    }
    setInput(input + value);
  };

  const clearInput = () => {
    console.log("se reinicio");
    initOperator = true;
    punto = false;

    setOperator(false);
    setInput("0");
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
          <ButtonClear clearInput={clearInput}>limpiar</ButtonClear>
        </div>
      </div>
    </div>
  );
}
export default App;
