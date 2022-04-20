import { useState } from "react";
import { MouseEvent } from "react";
import { Buttons } from "../../components/Buttons";
import { Box } from "./styles";

export default function Index() {
  const [display, setDisplay] = useState<number>(0);
  const [operator, setOperator] = useState<string>("");

  const number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  const handleNumber = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setDisplay(parseFloat(display + value));
    console.log(value);
  };

  const handleOperator = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setOperator(value);
    console.log(value);
  };

  const handleCalculator = () => {};

  return (
    <Box>
      <div className="calculator">
        <div className="display">
          <p>{display}</p>
        </div>
        <div className="buttons-container">
          <section className="buttons">
            <div className="btn-operator">
              <Buttons
                name="AC"
                type="button"
                handleClick={handleOperator}
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
                value={"percentage"}
              />

              <Buttons
                type="button"
                name="/"
                handleClick={handleOperator}
                value={"division"}
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
                value={"multiple"}
              />
            </div>

            <div className="operator-number">
              <Buttons
                name="*"
                type="button"
                handleClick={handleOperator}
                value={"multiple"}
              />

              <Buttons
                name="-"
                type="button"
                handleClick={handleOperator}
                value={"subtraction"}
              />
              <Buttons
                name="+"
                type="button"
                handleClick={handleOperator}
                value={"soma"}
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
