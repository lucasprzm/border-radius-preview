import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
`;

export const Titulo = styled.h1`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 35px;
`;

export const Inputs = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

export const Bloco = styled.div`
  display: flex;
  width: 50%;
  height: 300px;
  margin: 0 25%;
  align-items: center;
  justify-content: center;
  border: 5px solid red;
  border-bottom-left-radius: ${(props) => `${props.bordaBaixoEsquerda}px`};
  border-bottom-right-radius: ${(props) => `${props.bordaBaixoDireita}px`};
  border-top-left-radius: ${(props) => `${props.bordaCimaEsquerda}px`};
  border-top-right-radius: ${(props) => `${props.bordaCimaDireita}px`};
`;
