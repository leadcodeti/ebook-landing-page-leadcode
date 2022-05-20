import styles from './styles.module.scss'
import boxImg from '../../assets/background-testemunhos.png'
import imgTeste from '../../assets/pessoa-teste.png'
import imgHenrique from '../../assets/henrique.png'
import imgLeonardo from '../../assets/leonardo.png'
import imgJhonny from '../../assets/jhonny.png'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, A11y } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/grid'
import './slide.scss'

export function Testemunhos() {
    return (
        <>
            <h1 className={styles.testemunhosTitle}>Veja os resultados que produzimos</h1>
            
            <div className={styles.container}>         
                <Swiper
                    modules={[Pagination, A11y]}
                    pagination={{ clickable: true }}
                    spaceBetween={100}
                    loop
                    className={styles.swiper}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 2,
                          },

                          900: {
                            slidesPerView: 3,
                          },
                      }}
                    
                >

                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.apresentation}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>     

                            <div className={styles.apresentationImg}>
                                <img className={styles.boxImg} src={boxImg} alt="background de testemunho" />
                                <img className={styles.imgTestimony} src={imgHenrique} alt="imagem de testemunho" />
                            <div className={styles.personInfos}>
                                <h3>Henrique Pereira</h3>
                                <p>Desenvolvedor Front-end</p>
                            </div>                    
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.apresentation}>
                            A Leadcode mostrou que vai além da técnica em desenvolvimento, ela tem uma preocupação real de que o seu trabalho ajude o cliente a alcançar oss seus objetivos, ou seja, chamar a pessoa que acessa a Landing Page para a ação.  Li o seu ebook e tudo que eles mostram lá, eles aplicam e os resutados que tenho tido são a prova de que dá certo! 🙂 
                            </p>     

                            <div className={styles.apresentationImg}>
                                <img className={styles.boxImg} src={boxImg} alt="background de testemunho" />
                                <img className={styles.imgTestimony} src={imgLeonardo} alt="imagem de testemunho" />
                            <div className={styles.personInfos}>
                                <h3>Leonardo Costa</h3>
                                <p>Desenvolvedor Full-Stack</p>
                            </div>                    
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.apresentation}>
                            Realmente o e-book da LeadCode me ajudou bastante a melhorar as habilidades  e técnicas de desenvolvimento de uma landing page. Um e-book simples que  mostra o passo a passo de como criar uma landing page de sucesso e com altas chances de conversão.  Recomendo muito!                            </p>     

                            <div className={styles.apresentationImg}>
                                <img className={styles.boxImg} src={boxImg} alt="background de testemunho" />
                                <img className={styles.imgTestimony} src={imgJhonny} alt="imagem de testemunho" />
                            <div className={styles.personInfos}>
                                <h3>Melissa Pillar</h3>
                                <p>Desenvolvedora Front-end</p>
                            </div>                    
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                
               
            </div>
            
        </>
    )
}