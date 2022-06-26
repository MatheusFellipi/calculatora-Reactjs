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
  width: 25rem;
  background: ${(props) => props.theme.palette.common.background};
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
  height: 120px;
  margin: 2rem 0rem 2rem 0.8rem;
  p {
    max-width: 96%;
    overflow: auto;
    font-size: ${({ results }) => (results !== "" ? "15px" : "30px")};
    text-align: end;
    padding: 0rem 1rem 0 0;
    border-radius: 10px;
    :last-child {
      font-size: 3rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
  .operator-number {
    display: flex;
    flex-direction: column;
  }
  .btn-number {
    display: flex;
    flex-wrap: wrap;
    div:nth-last-child(2) {
      width: 11rem;
    }
  }
`;
