import "./styles.css";

export function Descricao() {
  return (
    <div className="container">
      <div className="titulo">
        Um guia para a sua landing page de alta conversão
      </div>
      <div className="gridLayout">
        <div className="categoryContainer">
          <div className="categoryHeader">
            <img
              className="icon"
              src="../../images/cute-rocket-launching-1.png"
              alt="rocket"
            />
            <span>Descubra estratégias que funcionam</span>
          </div>
          <p>
            Aprenda estratégias eficazes que aumentarão o potencial de conversão de sua landing page.
          </p>
        </div>
        <div className="categoryContainer">
          <div className="categoryHeader">
            <img className="icon" src="../../images/file-1.png" alt="file" />
            <span className="categoryTitle">As 3 seções indispensáveis</span>
          </div>
          <p>
            Não deixe essas seções de fora de sua landing page ou você pode perder conversões.
          </p>
        </div>
        <div className="categoryContainer">
          <div className="categoryHeader">
            <img className="icon" src="../../images/cross-1.png" alt="error" />
            <span className="categoryTitle">Erros que você precisa evitar</span>
          </div>
          <p>
            Descubra o que evitar para não correr o risco de perder, além de conversões, credibilidade. 
          </p>
        </div>
        <div className="categoryContainer">
          <div className="categoryHeader">
            <img className="icon eye" src="../../images/view-1.png" alt="eye" />
            <span className="categoryTitle">
              Exemplos de landing pages que convertem
            </span>
          </div>
          <p>
            Agora que você já sabe o que fazer e o que não fazer, veja exemplos para lhe inspirar a criar a sua landing page de alta conversão.
          </p>
        </div>
      </div>
      <hr className="divisor" />
    </div>
  );
}
