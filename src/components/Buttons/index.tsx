import { MouseEvent } from "react";
import { CButtons } from "./styles";

interface IPropsButtons {
  name: string;
  type: "button" | "submit" | "reset";
  value: string | number;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  visibility?: string;
  color?: string;
}

export function Buttons({
  name,
  type,
  value,
  handleClick,
  visibility,
}: IPropsButtons) {
  return (
    <CButtons
      name={name}
      type={type}
      onClick={handleClick}
      visibility={visibility}
      value={value}
    >
      {name}
    </CButtons>
  );
}
