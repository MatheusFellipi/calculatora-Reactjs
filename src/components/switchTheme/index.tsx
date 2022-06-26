import styled from "styled-components";

import { useTheme } from "../../Context/themes";
import dark from "../../assets/img/dark.svg";
import light from "../../assets/img/light.svg";

export function SwitchTheme() {
  const { setTheme } = useTheme();

  return (
    <GroupButtonTheme>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        <img src={light} alt="light" />
      </button>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        <img src={dark} alt="dark" />
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
    width: 35px;
    height: 35px;
    background: ${({ theme }) => theme.palette.button.primary};

    :first-child {
      border-radius: 5px 0 0 5px;
    }
    :last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`;
