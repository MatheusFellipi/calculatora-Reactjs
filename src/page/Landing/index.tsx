import { useState } from "react";
import { Buttons } from "../../components/Buttons";
import { ButtonsContainer, Calculador, Container, Display } from "./styles";

import * as math from "mathjs";
import { SwitchTheme } from "../../components/switchTheme";

const number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operator = ["*", "/", "+", ".", "-"];

export default function Index() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleInsertNum(val: string) {
    setInput(input + val);
  }

  function handleOperator(val: string) {
    if (
      input === "" ||
      (operator.includes(input[input.length - 1]) && operator.includes(val))
    ) {
      return;
    } else {
      setInput(input + val);
    }
  }

  function handleCalculator() {
    if (input === "" || operator.includes(input[input.length - 1])) {
      return input;
    } else {
      setResult(math.evaluate(input));
    }
  }

  function handleLimpar() {
    setInput("");
    setResult("");
  }

  return (
    <Container>
      <Calculador>
        <SwitchTheme />
        <Display results={result}>
          <p>{input}</p>
          {result !== "" ? <p className="result">{result}</p> : ""}
        </Display>

        <ButtonsContainer>
          <section className="buttons">
            <Buttons name="C" type="button" handleClick={handleLimpar} />
            <Buttons name="+/-" type="button" />
            <Buttons name="%" type="button" />

            <Buttons
              operator={true}
              color="#fff"
              type="button"
              name="/"
              handleClick={() => handleOperator("/")}
            />
          </section>

          <section className="buttons">
            <div className="btn-number">
              {number.map((num) => (
                <Buttons
                  key={num}
                  type="button"
                  name={num.toString()}
                  handleClick={() => handleInsertNum(num.toString())}
                />
              ))}
              <Buttons name="." type="button" />
            </div>
            <div className="operator-number">
              <Buttons
                operator={true}
                color="#fff"
                name="*"
                type="button"
                handleClick={() => handleOperator("*")}
              />

              <Buttons
                operator={true}
                color="#fff"
                name="-"
                type="button"
                handleClick={() => handleOperator("-")}
              />
              <Buttons
                operator={true}
                color="#fff"
                name="+"
                type="button"
                handleClick={() => handleOperator("+")}
              />

              <Buttons
                operator={true}
                name="="
                type="button"
                handleClick={handleCalculator}
              />
            </div>
          </section>
        </ButtonsContainer>
      </Calculador>
    </Container>
  );
}
