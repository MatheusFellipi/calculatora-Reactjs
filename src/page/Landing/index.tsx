import { useState } from "react";
import { MouseEvent } from "react";
import { Buttons } from "../../components/Buttons";
import { Box } from "./styles";

import * as math from "mathjs";

const number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operator = ["*", "/", "+", ".", "-"];

export default function Index() {
  const [input, setInput] = useState("");

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

  const handleCalculator = () => {
    if (input === "" || operator.includes(input[input.length - 1])) {
      return input;
    } else {
      setInput(math.evaluate(input));
    }
  };

  const handleLimpar = () => {
    setInput("");
  };

  return (
    <Box>
      <div className="calculator">
        <div className="display">
          <p>{input}</p>
        </div>

        <div className="buttons-container">
          <section className="buttons">
            <div className="btn-operator">
              <Buttons name="AC" type="button" handleClick={handleLimpar} />

              <Buttons
                type="button"
                name="/"
                handleClick={() => handleOperator("/")}
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
                  handleClick={() => handleInsertNum(num.toString())}
                />
              ))}
              <Buttons name="hide" visibility={"hidden"} type="button" />
            </div>

            <div className="operator-number">
              <Buttons
                name="*"
                type="button"
                handleClick={() => handleOperator("*")}
              />

              <Buttons
                name="-"
                type="button"
                handleClick={() => handleOperator("-")}
              />
              <Buttons
                name="+"
                type="button"
                handleClick={() => handleOperator("+")}
              />

              <Buttons name="=" type="button" handleClick={handleCalculator} />
            </div>
          </section>
        </div>
      </div>
    </Box>
  );
}
