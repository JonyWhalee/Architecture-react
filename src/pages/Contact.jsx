import Nav from '../components/layout/Nav' 
import '../style/Contact.css'

const Contact = () =>{
 return(
  <>
   <Nav></Nav>
    <div className="container-contact">
      <div className="contact-box">
          <div className="left"></div>
            <div className="right">
              <h2 className="title-contact">Contact Us</h2>
              <input type="text" className="field" placeholder="Name"/>
              <input type="text" className="field" placeholder="Email"/>
              <input type="text" class="field" placeholder="Phone"/>
              <textarea className="field area" placeholder="Message"></textarea>
              <input className="btn" type="submit"/>
            </div>
      </div>
    </div>
  </>
 );
}

export default Contact