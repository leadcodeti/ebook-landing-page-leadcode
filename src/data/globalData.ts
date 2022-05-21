import RocketLauching from "../assets/cute-rocket-launching.png";
import File from "../assets/file.png";
import CrossError from "../assets/cross-error.png";
import Eye from "../assets/eye.png";

export const descriptionData = {
  title: "Um guia para a sua landing page de alta conversão",
  categories: [
    {
      icon: {
        path: RocketLauching,
        altText: "rocket",
      },
      title: "Descubra estratégias que funcionam",
      content:
        "Aprenda estratégias eficazes que aumentarão o potencial de conversão de sua landing page.",
    },
    {
      icon: { path: File, altText: "file with ticked simbol" },
      title: "As 3 seções indispensáveis",
      content:
        "Não deixe essas seções de fora de sua landing page ou você perderá conversões.",
    },
    {
      icon: { path: CrossError, altText: "x inside a filled circle" },
      title: "Erros que você precisa evitar",
      content:
        "Descubra o que evitar para não correr o risco de perder cliques e credibilidade.",
    },
    {
      icon: { path: Eye, altText: "eye" },
      title: "Landing pages que convertem",
      content:
        "Veja exemplos para lhe inspirar a criar a sua landing page de alta conversão.",
    },
  ],
};
