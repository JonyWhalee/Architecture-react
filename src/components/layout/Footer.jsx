
const Footer = () =>{
 return(
  <footer className="container-footer">
      <section className="footer-top">
        <section>
          <h2 className="one">LET’S TALK</h2>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
        </section>
        <section>
          <h2 className="two">FIND US</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </section>
      <section>
          <h2 className="three">FOLLOW US</h2>
          <ul>
              <li><a href="https://www.linkedin.com/in/jonathanromerojs/" target="_blank"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="https://www.linkedin.com/in/jonathanromerojs/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
              <li><a href="https://www.linkedin.com/in/jonathanromerojs/" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
          </ul>
        </section>
      </section>
      <section className="footer-bot">
        <section>
          <p>Copyright © 2023. All right reserved.</p> 
        </section>
        <section>
          <p>Design by: <a href="https://www.linkedin.com/in/jonathanromerojs/" target="_blank">Jonathan Romero</a> </p>
        </section>
      </section>
  </footer>
 );
}

export default Footer; 