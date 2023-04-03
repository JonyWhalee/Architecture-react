import Nav from '../components/layout/Nav' 
import Contador from'../js/Index'
import '../style/About.css'
import '../js/Index.js'

const About = () =>{
 return(
  <>
    <Nav></Nav>
    <Contador></Contador>
      <main>
        <section className="container-about">
          <section>
            <h1>WE ARE CREATIVE ARCHITECTURE DESIGN AGENCY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nihil aliquid temporibus facere nostrum excepturi non assumenda sunt consequatur, hic iusto, repellendus libero corrupti inventore provident. Culpa cum dolorum voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quia nemo a assumenda veritatis quae suscipit saepe vero quod iure nihil praesentium asperiores molestiae velit quisquam dolorem, quas deleniti totam?</p>
          </section>
          <section>
            <img src="../media/img/about-img1.jpg" alt=""/>
          </section>
        </section>
        <section className="contador-container">
            <div className="contador ocultar contador-item-container">
                <div className="contador-number-container">
                    <span className="contador-span"><i className="fa-solid fa-arrow-up"></i></span>
                    <div className="contador-cantidad" data-cantidad-total="786" id="contador_cantidad"></div>
                </div>
                <h2>Finished projects</h2>
            </div>
            <div className="contador ocultar contador-item-container">
                <div className="contador-number-container">
                    <span className="contador-span"><i className="fa-solid fa-circle-check"></i></span>
                    <div className="contador-cantidad" data-cantidad-total="120" id="contador_cantidad"></div>
                </div>
                <h2>Happy Customers</h2>
            </div>
            <div className="contador ocultar contador-item-container">
                <div className="contador-number-container">
                    <span className="contador-span"><i className="fa-solid fa-plus"></i></span>
                    <div className="contador-cantidad" data-cantidad-total="1021" id="contador_cantidad"></div>
                </div>
                <h2>Working Hours</h2>
              </div>
        </section>
      </main>
  </>
  );
}

export default About