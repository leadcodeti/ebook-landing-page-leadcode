import styles from './styles.module.scss'
import boxImg from '../../assets/pessoa.png'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';



export function Testemunhos() {

    return (
        <>
            <h1 className={styles.testemunhosTitle}>Veja os resultados que produzimos</h1>

            <div className={styles.container}>         
                <Swiper
                     spaceBetween={100}
                     slidesPerView={2}
                     loop
                >
                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.apresentation}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem numquam porro ipsum ipsa hic autem maiores, minima ullam repellat? Est qui facilis eligendi eaque autem nostrum enim beatae quisquam veniam.</p>
                            <div className={styles.apresentationImg}><img src={boxImg} alt="tarja de descrição" />
                            <div className={styles.personInfos}>
                                <h3>Melissa Pillar</h3>
                                <p>Desenvolvedora Front-end</p>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.content}>
                            <p className={styles.apresentation}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem numquam porro ipsum ipsa hic autem maiores, minima ullam repellat? Est qui facilis eligendi eaque autem nostrum enim beatae quisquam veniam.</p>
                            <div className={styles.apresentationImg}><img src={boxImg} alt="tarja de descrição" />
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