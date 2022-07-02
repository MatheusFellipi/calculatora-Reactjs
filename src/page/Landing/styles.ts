import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme.background};
`;

export const Calculador = styled.main`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.palette.common.background};
  width: 95%;
  max-width: 550px;
  height: 95%;
  max-height: 770px;
  border-radius: 2rem;
`;

export const ButtonsTheme = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
  padding: 0 1rem;
  width: 90%;
`;

type DisplayProps = {
  readonly results?: any;
};

export const Display = styled.div<DisplayProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.palette.text.primary};
  width: 100%;
  height: 95%;
  max-height: 200px;

  p {
    max-width: 90%;
    overflow: auto;
    font-size: ${({ results }) => (results !== "" ? "1rem" : "2rem")};
    text-align: end;
    :last-child {
      font-size: 2rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div:nth-last-child(3) {
    width: 13rem;
  }
`;
