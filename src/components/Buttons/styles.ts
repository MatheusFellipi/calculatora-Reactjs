import styled from "styled-components";

interface ICButtons {
  readonly visibility?: string;
  readonly fontWeight?: string;
}

export const CButtons = styled.button<ICButtons>`
  border-radius: 10px;
  width: 6.5rem;
  height: 6.5rem;
  margin: 0.5rem;
  border-radius: 10rem;
  border: none;
  visibility: ${(props) => props.visibility};
  font-size: 32px;
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
`;
