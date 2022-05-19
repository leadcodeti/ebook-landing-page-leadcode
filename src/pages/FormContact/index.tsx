import ebookImg from '../../assets/ebook-footer.png'
import logoLeadCode from '../../assets/logo1.svg'
import styles from './styles.module.scss'

export function FormContact() {
    return (
        <>
            <div className={styles.hr}></div>
            <h1>Inscreva-se para receber nossos e-books</h1>

            <div className={styles.container}>
                <div className={styles.ebookImg}>
                    <img src={ebookImg} alt="ebook digital imagem" />
                </div>
                <div className={styles.ebookForm}>
                    <form>
                        <div className={styles.logo}>
                            <img src={logoLeadCode} alt="logo LeadCode" />
                            &lt;LeadCode /&gt;
                        </div>
                        <input type="text" placeholder='Digite seu melhor e-mail' />
                        <button type='button'>Receber e-book</button>
                    </form>   
                </div>
            
            </div>
        </>
    )
}