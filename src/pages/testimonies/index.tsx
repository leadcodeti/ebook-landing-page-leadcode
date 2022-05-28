import styles from './styles.module.scss'
import backgroundTestimony from '../../assets/background-testimonies.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper';
import { testimoniesData } from '../../data/globalData'

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

                    {testimoniesData.testimonies.map((e) => (
                        <SwiperSlide>
                            <div className={styles.content}>
                                <p className={styles.testimonyText}>
                                    {e.testimonie}
                                </p>

                                <div className={styles.testimonySlide}>
                                    <img className={styles.frameBackground} src={backgroundTestimony} alt="background de testemunho" />
                                    <img className={styles.testimonyImage} src={e.image} alt="imagem de testemunho" />
                                    <div className={styles.testimonyInfos}>
                                        <h3>{e.name}</h3>
                                        <p>{e.occupation}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}