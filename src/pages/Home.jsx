import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Nav from '../components/layout/Nav' 
import '../style/Home.css'

const Home = () =>{
 return(
    <>

        <Swiper spaceBetween={50} slidesPerView={1} className="swiper-container">
        <div className="swiper-wrapper">
        <SwiperSlide>
        <div className="swiper-slide">
            <div className="seg1 sections">
                <div className="section_container">
                    <div className="image">
                    <img src="https://www.arquitecturaydiseno.es/medio/2020/11/16/arquitecto-jonas-bjerre-poulsen-libro-reinvention-of-forms-esfera-1_73bc45d3_1200x630.jpg" alt=""/>
                </div>
                <div className="text">
                    <p className="title">Lorem, ipsum.</p>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eligendi ex quos et quod placeat delectus cum obcaecati, blanditiis minima dolore molestiae id voluptatum.</p>
                </div></div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-slide">
                <div className="seg2 sections">
                    <div className="section_container"><div className="image">
                        <img src="https://www.arquitecturaydiseno.es/medio/2020/11/16/arquitecto-jonas-bjerre-poulsen-libro-reinvention-of-forms-esfera-1_73bc45d3_1200x630.jpg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">lorem</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia earum numquam deserunt temporibus debitis, a sunt quas porro quis culpa repellendus optio ducimus? Aliquam non magnam error dolor cupiditate necessitatibus.</p>
                    </div></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
            <div className="seg3 sections">
                <div className="section_container">
                    <div className="image">
                        <img src="https://www.arquitecturaydiseno.es/medio/2020/11/16/arquitecto-jonas-bjerre-poulsen-libro-reinvention-of-forms-esfera-1_73bc45d3_1200x630.jpg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">Lorem, ipsum 3 </p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error id tempore ab ut quia nisi qui nesciunt illum est. Assumenda, ab. Omnis fugiat molestiae in sed eveniet!</p>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
            <div className="seg4 sections">
                <div className="section_container">
                    <div className="image">
                        <img src="https://www.arquitecturaydiseno.es/medio/2020/11/16/arquitecto-jonas-bjerre-poulsen-libro-reinvention-of-forms-esfera-1_73bc45d3_1200x630.jpg" alt=""/>
                    </div>
                    <div className="text">
                        <p className="title">Lorem ipsum dolor sit.</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, dolor. Fugit, nemo sapiente? Quibusdam, saepe? Atque esse earum alias pariatur dolor excepturi et eligendi ratione repudiandae ipsam nesciunt, enim veniam?</p>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        </div>
        
        
        <div className="swiper-pagination"></div>

        <Nav></Nav>

        </Swiper>
        <main>
            <section className="container-icons">
                <div>
                    <i className="fa-solid fa-pen-ruler"></i>
                    <i className="fa-solid fa-pencil"></i>
                    <i className="fa-solid fa-person-digging"></i>
                </div>
                <div>
                    <article>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim ex nulla, laborum ducimus omnis, laudantium, ipsa architecto magni harum eum iste nostrum exercitationem itaque! Deserunt dolore praesentium sapiente voluptate delectus? Fuga voluptas officia fugiat maiores distinctio, ducimus rem sapiente, sequi quis a odit expedita repellat corrupti nostrum? Ad repellendus totam accusantium fugit, aliquam ut sapiente cumque necessitatibus eaque inventore!
                    </article>
                </div>
            </section>
            <section className="title-home">
                <h2>Intelligent</h2>
                <h1>Architecture</h1>
            </section>
        </main>
    </>
 );
}

export default Home