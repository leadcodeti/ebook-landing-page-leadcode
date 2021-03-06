import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import ebookImg from "../../assets/e-book.png";
import logoLeadCode from "../../assets/logo1.png";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import { DownloadButton } from "../../components/Button/Button";
import { Inputs } from "../../components/Inputs";

const initialState = {
  user_name: "",
  from_name: "leadcoteti@gmail.com",
  to_name: "",
  message: `
        Obrigado por baixar o nosso e-book 'Como criar uma Landing Page que converte.
        
       Se esse é o seu primeiro contato com a Leadcode, prazer em conhecê-lo(a)! Se você gostou de nosso exemplo de Landing Page e gostar de nosso conteúdo que acabou de receber, conheça melhor a gente através de nosso site <<siteleadcode.com.br>> e nossos outros projetos.
        
        Espero que tenhamos experiências incríveis juntos!
        `,
};

export function FormContact() {
  const [toSend, setToSend] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "ebook_delivery_service",
        "ebook_delivery_form",
        toSend,
        "uvmZIkRgQPgsOaQKM"
      )
      .then(() => {
        toast.success(
          "O seu e-book foi enviado com sucesso. Confira o seu e-email."
        );
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Por favor, preencha todos os campos.");
      });
    setToSend(initialState);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.hr}></div>

      <div className={styles.contentContainer}>
        <div className={styles.ebookImg}>
          <img src={ebookImg} alt="ebook digital imagem" />
        </div>
        <div className={styles.ebookForm}>
          <form onSubmit={onSubmit}>
            <div className={styles.formContent}>
              <div className={styles.logo}>
                <img src={logoLeadCode} alt="logo LeadCode" />
              </div>
              <Inputs
                type="text"
                name="user_name"
                value={toSend.user_name}
                placeholder="Digite o seu nome"
                onChange={handleChange}
              />
              <Inputs
                type="email"
                name="to_name"
                value={toSend.to_name}
                placeholder="Digite o seu melhor e-mail"
                onChange={handleChange}
              />
              <DownloadButton onClick={onSubmit} text="Baixar e-book grátis" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
