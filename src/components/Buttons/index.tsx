import styled from "styled-components";

interface IPropsButtons {
  name: string;
  type: "button" | "submit" | "reset";
  handleClick?: any;
  visibility?: string;
  color?: string;
  isInput?: boolean;
}

export function Buttons({
  name,
  type,
  handleClick,
  visibility,
}: IPropsButtons) {
  return (
    <Container>
      <Button
        name={name}
        type={type}
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
};

const Container = styled.div`
  width: 6.5rem;
  height: 6.5rem;
`;

const Button = styled.button<ButtonsProps>`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border-radius: 10rem;
  border: none;
  font-size: 2rem;
  visibility: ${(props) => props.visibility};
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
`;
