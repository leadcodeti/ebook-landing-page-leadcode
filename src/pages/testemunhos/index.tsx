import styles from './styles.module.scss'
import boxImg from '../../assets/background-testemunhos.png'
import imgTeste from '../../assets/pessoa-teste.png'
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
                        // when window width is >= 640px
                        0: {
                            slidesPerView: 1,
                          },
                          // when window width is >= 768px
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
                                <img className={styles.boxImg} src={boxImg} alt="tarja de descrição" />
                                <img className={styles.imgTestimony} src={imgTeste} alt="" />
                            <div className={styles.personInfos}>
                                <h3>Melissa Pillar</h3>
                                <p>Desenvolvedora Front-end</p>
                            </div>                    
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.apresentation}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>     

                            <div className={styles.apresentationImg}>
                                <img className={styles.boxImg} src={boxImg} alt="tarja de descrição" />
                                <img className={styles.imgTestimony} src={imgTeste} alt="" />
                            <div className={styles.personInfos}>
                                <h3>Melissa Pillar</h3>
                                <p>Desenvolvedora Front-end</p>
                            </div>                    
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.apresentation}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>     

                            <div className={styles.apresentationImg}>
                                <img className={styles.boxImg} src={boxImg} alt="tarja de descrição" />
                                <img className={styles.imgTestimony} src={imgTeste} alt="" />
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