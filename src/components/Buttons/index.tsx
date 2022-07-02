import styled from "styled-components";

interface IPropsButtons {
  name: string;
  type: "button" | "submit" | "reset";
  handleClick?: any;
  visibility?: string;
  color?: string;
  isInput?: boolean;
  operator?: boolean;
}

export function Buttons({
  name,
  type,
  handleClick,
  visibility,
  operator,
}: IPropsButtons) {
  function isEqual() {
    return name === "=" || name === "C" ? true : false;
  }

  return (
    <Container>
      <Button
        operator={operator}
        name={name}
        type={type}
        isEqual={isEqual}
        onClick={handleClick}
        visibility={visibility}
      >
        {name}
      </Button>
    </Container>
  );
}

type ButtonsProps = {
  readonly visibility?: string;
  readonly fontWeight?: string;
  readonly operator?: boolean;
  readonly isEqual: () => boolean;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 6rem;
  max-height: 6rem;
  margin: 0.1rem;
`;

const Button = styled.button<ButtonsProps>`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 2rem;
  visibility: ${(props) => props.visibility};
  font-weight: ${(props) => props.fontWeight};

  background-color: ${({ operator, theme }) =>
    operator ? theme.palette.button.secondary : theme.palette.button.primary};

  color: ${({ theme, isEqual }) =>
    isEqual() ? theme.palette.text.highlight : theme.palette.text.secondary};
`;
