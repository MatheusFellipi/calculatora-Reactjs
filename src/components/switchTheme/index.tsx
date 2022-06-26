import styled from "styled-components";

import { useTheme } from "../../Context/themes";
import dark from "../../assets/img/dark.png";
import light from "../../assets/img/light.png";

export function SwitchTheme() {
  const { setTheme } = useTheme();

  return (
    <GroupButtonTheme>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        <img src={dark} alt="dark" />
      </button>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        <img src={light} alt="light" />
      </button>
    </GroupButtonTheme>
  );
}

export const GroupButtonTheme = styled.div`
  display: flex;

  img {
    width: 20px;
    height: 20px;
  }

  button {
    margin: 0;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 25px;
  }
`;
