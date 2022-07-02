import { useState } from "react";
import { Buttons } from "../../components/Buttons";
import {
  ButtonsContainer,
  Calculador,
  Container,
  Display,
  ButtonsTheme,
} from "./styles";

import * as math from "mathjs";
import { SwitchTheme } from "../../components/switchTheme";

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
        <ButtonsTheme>
          <SwitchTheme />
        </ButtonsTheme>

        <Display results={result}>
          <p>{input}</p>
          {result !== "" ? <p className="result">{result}</p> : ""}
        </Display>

        <ButtonsContainer>
          <div className="column">
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
          </div>

          <div className="column">
            <Buttons
              type="button"
              name={"7"}
              handleClick={() => handleInsertNum("7")}
            />
            <Buttons
              type="button"
              name={"8"}
              handleClick={() => handleInsertNum("8")}
            />
            <Buttons
              type="button"
              name={"9"}
              handleClick={() => handleInsertNum("9")}
            />
            <Buttons
              operator={true}
              color="#fff"
              name="*"
              type="button"
              handleClick={() => handleOperator("*")}
            />
          </div>
          <div className="column">
            <Buttons
              type="button"
              name={"4"}
              handleClick={() => handleInsertNum("4")}
            />
            <Buttons
              type="button"
              name={"5"}
              handleClick={() => handleInsertNum("5")}
            />
            <Buttons
              type="button"
              name={"6"}
              handleClick={() => handleInsertNum("6")}
            />
            <Buttons
              operator={true}
              color="#fff"
              name="-"
              type="button"
              handleClick={() => handleOperator("-")}
            />
          </div>
          <div className="column">
            <Buttons
              type="button"
              name={"1"}
              handleClick={() => handleInsertNum("1")}
            />
            <Buttons
              type="button"
              name={"2"}
              handleClick={() => handleInsertNum("2")}
            />
            <Buttons
              type="button"
              name={"3"}
              handleClick={() => handleInsertNum("3")}
            />
            <Buttons
              operator={true}
              color="#fff"
              name="+"
              type="button"
              handleClick={() => handleOperator("+")}
            />
          </div>
          <div className="column">
            <Buttons
              type="button"
              name={"0"}
              handleClick={() => handleInsertNum("0")}
            />

            <Buttons name="." type="button" />
            <Buttons visibility="hidden" name="." type="button" />
            <Buttons
              operator={true}
              name="="
              type="button"
              handleClick={handleCalculator}
            />
          </div>
        </ButtonsContainer>
      </Calculador>
    </Container>
  );
}
