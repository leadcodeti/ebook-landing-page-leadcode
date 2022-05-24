import styles from './styles.module.scss'
import backgroundTestimony from '../../assets/background-testimonies.png'
import imgHenrique from '../../assets/henrique.png'
import imgLeonardo from '../../assets/leonardo.png'
import imgJhonny from '../../assets/jhonny.png'
import imgInes from '../../assets/ines.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/grid'
import './slide.scss'

export function Testimonies() {
    return (
        <>
            <div className={styles.hr} />
            <h1 className={styles.Title}>Veja os resultados que produzimos</h1>

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
                            <p className={styles.testimonyText}>
                                Realmente o e-book da LeadCode me ajudou bastante a melhorar as habilidades  e técnicas de desenvolvimento de uma landing page. Um e-book simples que  mostra o passo a passo de como criar uma landing page de sucesso e com altas chances de conversão.  Recomendo muito!
                            </p>

                            <div className={styles.testimonySlide}>
                                <img className={styles.frameBackground} src={backgroundTestimony} alt="background de testemunho" />
                                <img className={styles.testimonyImage} src={imgHenrique} alt="imagem de testemunho" />
                                <div className={styles.testimonyInfos}>
                                    <h3>Henrique Pereira</h3>
                                    <p>Desenvolvedor Front-end</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.testimonyText}>
                                A Leadcode mostrou que vai além da técnica em desenvolvimento, ela tem uma preocupação real de que o seu trabalho ajude o cliente a alcançar oss seus objetivos, ou seja, chamar a pessoa que acessa a Landing Page para a ação.  Li o seu ebook e tudo que eles mostram lá, eles aplicam e os resutados que tenho tido são a prova de que dá certo! 🙂
                            </p>

                            <div className={styles.testimonySlide}>
                                <img className={styles.frameBackground} src={backgroundTestimony} alt="background de testemunho" />
                                <img className={styles.testimonyImage} src={imgLeonardo} alt="imagem de testemunho" />
                                <div className={styles.testimonyInfos}>
                                    <h3>Leonardo Costa</h3>
                                    <p>Desenvolvedor Full-Stack</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.testimonyText}>
                                Realmente o e-book da LeadCode me ajudou bastante a melhorar as habilidades  e técnicas de desenvolvimento de uma landing page. Um e-book simples que  mostra o passo a passo de como criar uma landing page de sucesso e com altas chances de conversão.  Recomendo muito!
                            </p>

                            <div className={styles.testimonySlide}>
                                <img className={styles.frameBackground} src={backgroundTestimony} alt="background de testemunho" />
                                <img className={styles.testimonyImage} src={imgJhonny} alt="imagem de testemunho" />
                                <div className={styles.testimonyInfos}>
                                    <h3>Jhonny Monteiro</h3>
                                    <p>Desenvolvedor Front-end</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.testimonyText}>
                                Realmente o e-book da LeadCode me ajudou bastante a melhorar as habilidades  e técnicas de desenvolvimento de uma landing page. Um e-book simples que  mostra o passo a passo de como criar uma landing page de sucesso e com altas chances de conversão.  Recomendo muito!
                            </p>

                            <div className={styles.testimonySlide}>
                                <img className={styles.frameBackground} src={backgroundTestimony} alt="background de testemunho" />
                                <img className={styles.testimonyImage} src={imgInes} alt="imagem de testemunho" />
                                <div className={styles.testimonyInfos}>
                                    <h3>Inês Catarina</h3>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>


            </div>

        </>
    )
}