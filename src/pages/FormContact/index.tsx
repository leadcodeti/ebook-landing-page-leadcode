import { useState } from 'react';
import emailjs from 'emailjs-com';
import ebookImg from '../../assets/e-book.svg'
import logoLeadCode from '../../assets/logo1.svg'
import styles from './styles.module.scss'

const initialState = {
    user_name: '',
    from_name: 'leadcoteti@gmail.com',
    to_name: '',
    message: `
        <p>Obrigado por baixar o nosso e-book 'Como criar uma Landing Page que converte.</p>'
        
       <p>Se esse é o seu primeiro contato com a Leadcode, prazer em conhecê-lo(a)! Se você gostou de nosso exemplo de Landing Page e gostar de nosso conteúdo que acabou de receber, conheça melhor a gente através de nosso site <<siteleadcode.com.br>> e nossos outros projetos.</p>
        
        <p>Espero que tenhamos experiências incríveis juntos!</p>
        `,
} 

export function FormContact() {
    const [toSend, setToSend] = useState(initialState);

    const handleChange = (e:any) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value});
    }

    const onSubmit = (e:any) => {
        e.preventDefault();
        emailjs.send(
            'ebook_delivery_service',
            'ebook_delivery_form',
            toSend,
            'uvmZIkRgQPgsOaQKM'
        )
        .then((response) => {
            console.log('SUCCESS', response.status, response.text);
            alert('O seu e-book foi enviado com sucesso. Confirao o seu e-email.');
        })
        .catch((err) => {
            console.log('FAILED...', err);
            alert('ERROR')
        });
        setToSend(initialState);
    }

    return (
        <div className={styles.wrapper}>
            <img src="images/textura-leadcode.svg" />
            <div className={styles.hr}></div>
            <h1>Baixe o e-book agora e arrase nas landing pages</h1>

            <div className={styles.contentContainer}>
                <div className={styles.ebookImg}>
                    <img src={ebookImg} alt="ebook digital imagem" />
                </div>
                <div className={styles.ebookForm}>
                    <form onSubmit={onSubmit}>
                        <div className={styles.logo}>
                            <img src={logoLeadCode} alt="logo LeadCode" />
                            &lt;LeadCode /&gt;
                        </div>
                        <input
                            type="text" 
                            name="user_name"
                            value={toSend.user_name} 
                            placeholder='Digite o seu nome'
                            onChange={handleChange}
                             />
                        <input 
                            type="email"
                            name="to_name" 
                            value={toSend.to_name} 
                            placeholder='Digite seu melhor e-mail'
                            onChange={handleChange} 
                            />
                        <button type='submit'>Receber e-book grátis</button>
                    </form>   
                </div>
            
            </div>
        </div>
    )
}