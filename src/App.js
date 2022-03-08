import { useState } from "react";
import { Container, Titulo, Inputs, Bloco } from "./styles";
function App() {
  const [topLeft, setTopLeft] = useState(1);
  const [topRight, setTopRight] = useState(1);
  const [bottomLeft, setBottomLeft] = useState(1);
  const [bottomRight, setBottomRight] = useState(1);

  function copiar() {
    navigator.clipboard.writeText(`
    Border radius top-left: ${topLeft} px;
    Border radius top-right: ${topRight} px;
    Border radius bottom-left: ${bottomLeft} px;
    Border radius bottom-right: ${bottomRight} px;
    `);
    alert("CSS copiado!");
  }

  return (
    <Container>
      <Titulo>Border Radius Previewer</Titulo>
      <Inputs>
        <p>
          Border radius top-left:{" "}
          <input
            type="text"
            value={topLeft}
            onChange={(e) => setTopLeft(e.target.value)}
          />{" "}
          px
        </p>
        <p>
          Border radius top-right:{" "}
          <input
            type="text"
            value={topRight}
            onChange={(e) => setTopRight(e.target.value)}
          />{" "}
          px
        </p>
        <p>
          Border radius bottom-left:{" "}
          <input
            type="text"
            value={bottomLeft}
            onChange={(e) => setBottomLeft(e.target.value)}
          />{" "}
          px
        </p>
        <p>
          Border radius bottom-right:{" "}
          <input
            type="text"
            value={bottomRight}
            onChange={(e) => setBottomRight(e.target.value)}
          />{" "}
          px
        </p>
        <button onClick={copiar}>Copiar CSS</button>
      </Inputs>
      <Bloco
        bordaBaixoEsquerda={bottomLeft}
        bordaCimaEsquerda={topLeft}
        bordaCimaDireita={topRight}
        bordaBaixoDireita={bottomRight}
      >
        Teste
      </Bloco>
    </Container>
  );
}

export default App;
