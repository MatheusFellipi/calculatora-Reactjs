import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .calculator {
    background: ${(props) => props.theme.palette.common.black};
    border-radius: 15px;
    width: 540px;

    .display {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      height: 100px;
      margin: 1.5rem 0rem 0.5rem 0.8rem;
      p {
        width: 96%;
        padding: 1rem;
        height: 100%;
        font-size: 30px;
        text-align: end;
        padding: 1.5rem 1rem 0 0;
        border-radius: 10px;
      }
    }

    .buttons-container {
      display: flex;
      flex-direction: column;
      .buttons {
        display: flex;
      }
    }

    .buttons {
      display: flex;
      .btn-operator {
        display: flex;
        justify-content: end;
        align-items: flex-end;
        padding-right: 1rem;
        width: 100%;
      }

      .btn-number {
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        margin-bottom: 0.5rem;
        button {
          :nth-last-child(-n + 2) {
            width: 14rem;
            height: 6.5rem;
          }
          :last-child {
            width: 6.5rem;
            height: 6.5rem;
          }
        }
      }
    }
  }
`;
