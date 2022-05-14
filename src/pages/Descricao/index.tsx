import { IoIosRocket } from "react-icons/io";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import "./styles.css";

export function Descricao() {
  return (
    <div className="container">
      <div className="titulo">
        Por que escolher esse e-book para a produção de uma landing page?
      </div>
      <div className="gridLayout">
        <div className="categoryContainer">
          <div className="categoryHeader">
            <IoIosRocket className="icon" />
            <span>Técnicas de alta conversão</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deserunt sint dolorum repudiandae? Odit inventore error nihil
          </p>
        </div>
        <div className="categoryContainer">
          <div className="categoryHeader">
            <BsBookmarkCheck className="icon" />
            <span className="categoryTitle">As 4 seções indispensáveis</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deserunt sint dolorum repudiandae? Odit inventore error nihil
          </p>
        </div>
        <div className="categoryContainer">
          <div className="categoryHeader">
            <VscError className="icon" />
            <span className="categoryTitle">Erros que deve evitar</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deserunt sint dolorum repudiandae? Odit inventore error nihil
          </p>
        </div>
        <div className="categoryContainer">
          <div className="categoryHeader">
            <FaEye className="icon" />
            <span className="categoryTitle">
              Exemplos de landing pages de alta conversão
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deserunt sint dolorum repudiandae? Odit inventore error nihil
          </p>
        </div>
      </div>
    </div>
  );
}
