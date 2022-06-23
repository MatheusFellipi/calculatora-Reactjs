import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme.background};
`;

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

export const Calculador = styled.main`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.palette.common.black};
  width: 25rem;
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 100%;
  height: 120px;
  margin: 2rem 0rem 2rem 0.8rem;
  p {
    max-width: 96%;
    overflow: auto;
    font-size: 30px;
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
