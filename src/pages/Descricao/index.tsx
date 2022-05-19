import styles from "./styles.module.scss";

export function Descricao() {
  const pageData = {
    title: "Um guia para a sua landing page de alta conversão",
    categories: [
      {
        icon: {
          path: "../../images/cute-rocket-launching-1.png",
          altText: "rocket",
        },
        title: "Descubra estratégias que funcionam",
        content:
          "Aprenda estratégias eficazes que aumentarão o potencial de conversão de sua landing page.",
      },
      {
        icon: { path: "../../images/file-1.png", altText: "file with ticked simbol" },
        title: "As 3 seções indispensáveis",
        content:
          "Não deixe essas seções de fora de sua landing page ou você perderá conversões.",
      },
      {
        icon: { path: "../../images/cross-1.png", altText: "x inside a filled circle" },
        title: "Erros que você precisa evitar",
        content:
          "Descubra o que evitar para não correr o risco de perder cliques e credibilidade.",
      },
      {
        icon: { path: "../../images/view-1.png", altText: "eye" },
        title: "Landing pages que convertem",
        content:
          "Veja exemplos para lhe inspirar a criar a sua landing page de alta conversão.",
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <h2>{pageData.title}</h2>
      <div className={styles.gridContainer}>
        {pageData.categories.map((e) => (
          <div className={styles.categoryContainer}>
            <div className={styles.categoryHeader}>
              <img
                className={e.icon.altText !== "eye" ? styles.icon : styles.eye}
                src={e.icon.path}
                alt={e.icon.altText}
              />
              <span>{e.title}</span>
            </div>
            <p>{e.content}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
