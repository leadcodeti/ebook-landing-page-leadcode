import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Inputs } from "../Inputs";
import emailjs from "emailjs-com";
import styles from "./styles.module.scss";
import { DownloadButton } from "../Button/Button";
import { toast } from "react-toastify";

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

export function DownloadModalButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <>
      <button className={styles.openModalButton} onClick={onOpen}>
        Baixar e-book
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className={styles.ModalOverlay} />
        <ModalContent className={styles.ModalContent}>
          <ModalCloseButton className={styles.ModalCloseButton} />
          <div className={styles.ModalContext}>
            <ModalBody className={styles.ModalBody}>
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
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
