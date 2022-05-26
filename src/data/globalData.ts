import RocketLauching from "../assets/cute-rocket-launching.png";
import File from "../assets/file.png";
import CrossError from "../assets/cross-error.png";
import Eye from "../assets/eye.png";
import imgHenrique from '../assets/henrique.png'
import imgLeonardo from '../assets/leonardo.png'
import imgInes from '../assets/ines.png'
import imgJhony from '../assets/jhonny.png'

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

export const testimoniesData = {
  testimonies: [
    {
      testimonie: " Realmente o e-book da LeadCode me ajudou bastante a melhorar as habilidades  e técnicas de desenvolvimento de uma landing page. Um e-book simples que  mostra o passo a passo de como criar uma landing page de sucesso e com altas chances de conversão.  Recomendo muito!",
      image: imgHenrique,
      name: "Henrique Pereira",
      occupation: 'Desenvolvedor Front-end'
    },

    {
      testimonie: " A Leadcode mostrou que vai além da técnica em desenvolvimento, ela tem uma preocupação real de que o seu trabalho ajude o cliente a alcançar oss seus objetivos, ou seja, chamar a pessoa que acessa a Landing Page para a ação.  Li o seu ebook e tudo que eles mostram lá, eles aplicam e os resutados que tenho tido são a prova de que dá certo! 🙂",
      image: imgLeonardo,
      name: "Leonardo Costa",
      occupation: 'Desenvolvedor Full-stack'
    },

    {
      testimonie: " Realmente o e-book da LeadCode me ajudou bastante a melhorar as habilidades  e técnicas de desenvolvimento de uma landing page. Um e-book simples que  mostra o passo a passo de como criar uma landing page de sucesso e com altas chances de conversão.  Recomendo muito!",
      image: imgJhony,
      name: "Jhony Monteiro",
      occupation: 'Desenvolvedor Front-end'
    },

    {
      testimonie: " Realmente o e-book da LeadCode me ajudou bastante a melhorar as habilidades  e técnicas de desenvolvimento de uma landing page. Um e-book simples que  mostra o passo a passo de como criar uma landing page de sucesso e com altas chances de conversão.  Recomendo muito!",
      image: imgInes,
      name: "Inês Catarina",
      occupation: 'Designer'
    },
  ]
}