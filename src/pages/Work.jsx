import NavBar from '../components/layout/Nav' 
import '../style/Work.css'

const Work = () =>{
 return(
   <>
   <NavBar></NavBar>
   <main className="body-work" >
   <div className="container-a">
     <div className="container">
       <img src="https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-modernas-1.jpg" alt=""/>
       <img src="https://i.pinimg.com/originals/40/78/68/4078683ab7e9f99894e6d04ad082599d.jpg" alt=""/>
       <img src="https://www.fachadascasas.com/wp-content/uploads/2018/10/Arquitectura-moderna-6-e1539649689582-1.jpg" alt=""/>
       <img src="https://images.adsttc.com/media/images/5555/5d04/e58e/ce16/aa00/0181/large_jpg/Casa_Paracaima-Taff_Arquitectos-21.jpg?1431657708" alt=""/>
     </div>
   </div>
  </main>
  </>
 );
}

export default Work