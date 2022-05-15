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
        title: "Descubra estratégias que funcionam.",
        content:
          "Aprenda estratégias eficazes que aumentarão o potencial de conversão de sua landing page.",
      },
      {
        icon: { path: "../../images/file-1.png", altText: "file" },
        title: "As 3 seções indispensáveis.",
        content:
          "Não deixe essas seções de fora de sua landing page ou você pode perder conversões.",
      },
      {
        icon: { path: "../../images/cross-1.png", altText: "error" },
        title: "Erros que você precisa evitar.",
        content:
          "Descubra o que evitar para não correr o risco de perder, além de conversões, a credibilidade.",
      },
      {
        icon: { path: "../../images/view-1.png", altText: "eye" },
        title: "Exemplos de landing pages que convertem",
        content:
          "Agora que você já sabe o que deve e o que não deve fazer, veja exemplos para lhe inspirar a criar a sua landing page de alta conversão.",
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <h2>{pageData.title}</h2>
      <div className={styles.gridContainer}>
        {pageData.categories.map((e) => (
          <div id="categoryContainer">
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
