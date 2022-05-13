import { IoIosRocket } from 'react-icons/io';
import { BsBookmarkCheck } from "react-icons/bs";
import { AiOutlineEye } from 'react-icons/ai';
import { VscError } from "react-icons/vsc";

export function Descricao() {
  return (
    <>
      <div>
        Por que escolher esse e-book para a produção de uma landing page?
      </div>
      <div className="beneficios"><IoIosRocket/>
        <b>Técnicas de alta conversão</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt sint dolorum repudiandae? Odit inventore error nihil consequuntur, maxime quas numquam aperiam consequatur maiores dolorum in? Quos reprehenderit provident iste.</p>
      </div>
      <div className="beneficios"><BsBookmarkCheck/>
        <b>As 4 seções indispensáveis</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt sint dolorum repudiandae? Odit inventore error nihil consequuntur, maxime quas numquam aperiam consequatur maiores dolorum in? Quos reprehenderit provident iste.</p>
      </div>
      <div className="beneficios"><VscError/>
        <b>Erros que você deve evitar</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt sint dolorum repudiandae? Odit inventore error nihil consequuntur, maxime quas numquam aperiam consequatur maiores dolorum in? Quos reprehenderit provident iste.</p>
      </div>
      <div className="beneficios"><AiOutlineEye/>
        <b>Exemplos de landing pages de alta conversão</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt sint dolorum repudiandae? Odit inventore error nihil consequuntur, maxime quas numquam aperiam consequatur maiores dolorum in? Quos reprehenderit provident iste.</p>
      </div>
    </>
  )
}

