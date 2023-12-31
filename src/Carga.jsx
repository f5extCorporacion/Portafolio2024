import {CounterStore} from'./store/CounterStore';
//import shallow from 'zustand/shallow';
import './App.css'
import Home from './Home';
import Profile from './Profile';
import Porfolio from'./Porfolio';
import Contacto from './Contacto';
import React ,{ useState,Suspense,lazy } from 'react';
const video = lazy( ()=>import('https://cadenaser.com/resizer/av8uSQm4LrD27LxLZ3kFIsrIP60=/1200x537/filters:quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/2BXBIY6XXNNJDMIDYTKUN47QZA.gif'))
import Modal from './Modal';


const Carga = () => {
    const [modal , setModal] = useState(false)

    /* PRIMERA FORMA DE EXPORTAR VALORES */
  /*const Result= CounterStore( (state) => state.count)*/
   /*Forma rapida de ejecutar  funciones de un objeto para ejecutarlas */
   const { increment , decrementar } = CounterStore();
  
  

    return (
      <div className='Global'>
        <div className="responsive">
        {
            modal?  <Modal  setModal={setModal} moda={modal} />:''
          }
        </div>
        <header >
          <a href="#" className='logo animate-bounce w-6 h-6'><ion-icon name="code-slash-outline"></ion-icon> </a>
          <nav>
             <a href="#Home"    >
              <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
             <span className='text icon'>HOME</span> </a>
  
             <a href="#Profile"  >
              <span className='icon'><ion-icon name="planet-outline"></ion-icon></span>
             <span className='text icon'>PROFILE</span></a>
  
             <a href="#Message"  >
              <span className='icon'><ion-icon name="chatbubble-outline"></ion-icon></span>
             <span className='text icon'> PORFOLIO</span> </a>
  
             <a href="#Contact" >
              <span className='icon'><ion-icon name="battery-charging-outline"></ion-icon></span> 
             <span className='text icon'>CONTACTO</span>
             </a>
            <button  onClick={()=> setModal(true)}>
              <ion-icon name="apps-outline"></ion-icon> </button>
          </nav>
         
        </header>
         <section id='Home'> <div className="marge"> <Home/> </div>  </section>  
         <section id='Profile'><div className="marge">  <Profile/></div> </section>  
         <section id='Message'><div className="marge"> <Porfolio/></div> </section>  
         <section id='Contact'><div className="marge"> <Contacto/></div> </section>  
      </div>
    )
}
export default Carga