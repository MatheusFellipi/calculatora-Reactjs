import { useState } from "react";
import { MouseEvent } from "react";
import { Buttons } from "../../components/Buttons";
import { Box } from "./styles";

export default function Index() {
  const [display, setDisplay] = useState<string>("0");
  const [result, setResult] = useState<number>(-1);
  const [operator, setOperator] = useState<string>("");

  const number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  const handleNumber = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleOperator = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;

    if (operator === "") {
      setOperator(value);
      setDisplay(display + " " + value + " ");
    } else {
      const displayNew = display.replace(operator, value);
      setOperator(value);
      setDisplay(displayNew);
    }
  };

  const handleCalculator = () => {
    const str = display.split(operator);

    if (operator === "%") {
      setResult(parseFloat(str[0].trim()) % parseFloat(str[1].trim()));
    }
    if (operator === "/") {
      setResult(parseFloat(str[0].trim()) / parseFloat(str[1].trim()));
    }
    if (operator === "*") {
      setResult(parseFloat(str[0].trim()) * parseFloat(str[1].trim()));
    }
    if (operator === "-") {
      setResult(parseFloat(str[0].trim()) - parseFloat(str[1].trim()));
    }
    if (operator === "+") {
      setResult(parseFloat(str[0].trim()) + parseFloat(str[1].trim()));
    }
  };

  const handleLimpar = () => {
    setOperator("");
    setDisplay("0");
    setResult(0);
  };

  return (
    <Box>
      <div className="calculator">
        <div className="display">
          <p>{display}</p>
          {result >= 0 && <p>{result}</p>}
        </div>

        <div className="buttons-container">
          <section className="buttons">
            <div className="btn-operator">
              <Buttons
                name="AC"
                type="button"
                handleClick={handleLimpar}
                value={"AC"}
              />
              <Buttons
                type="button"
                handleClick={handleOperator}
                name="+/-"
                value={"+/-"}
              />
              <Buttons
                type="button"
                name="%"
                handleClick={handleOperator}
                value={"%"}
              />

              <Buttons
                type="button"
                name="/"
                handleClick={handleOperator}
                value={"/"}
              />
            </div>
          </section>

          <section className="buttons">
            <div className="btn-number">
              {number.map((num) => (
                <Buttons
                  key={num}
                  type="button"
                  name={num.toString()}
                  handleClick={handleNumber}
                  value={num}
                />
              ))}
              <Buttons
                name="hide"
                visibility={"hidden"}
                type="button"
                handleClick={handleOperator}
                value={"hide"}
              />
            </div>

            <div className="operator-number">
              <Buttons
                name="*"
                type="button"
                handleClick={handleOperator}
                value={"*"}
              />

              <Buttons
                name="-"
                type="button"
                handleClick={handleOperator}
                value={"-"}
              />
              <Buttons
                name="+"
                type="button"
                handleClick={handleOperator}
                value={"+"}
              />

              <Buttons
                name="="
                value={"="}
                type="button"
                handleClick={handleCalculator}
              />
            </div>
          </section>
        </div>
      </div>
    </Box>
  );
}
