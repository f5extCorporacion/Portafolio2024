import './App.css';
import react1 from'./assets/react1.png';
import {CounterStore} from'./store/CounterStore';
import shallow from 'zustand/shallow';
import nodejs from'./assets/nodejs.png';
import a33 from './assets/a33.png';
import m1 from'./assets/m1.png'
import m2 from'./assets/m2.png'
import m3 from'./assets/m3.png'
import m4 from'./assets/m4.png'
import m5 from'./assets/m5.png'
import m6 from'./assets/m6.png'
import m7 from'./assets/m7.png'
const Profile = () => {

  //Mostrar los Datos
    
  const {name , count} = CounterStore( (state)=>({
     name: state.name,
     count:state.count,
  }), shallow)

  //Actions de los datos functiones
  const {increment , decrementar} = CounterStore();
  return(
    <> 
            <article>
              <h1 className='text-slate-700'> 
              <ion-icon name="planet-outline"></ion-icon> PROFILE 
              </h1>
            
              {/**estudios y mas */}
              <div className="perfil">
                  <div className="detalles  text-slate-700">
                      <div className='descrip2'>
                        <h4>Sobre mi...</h4><br />
                        <p>
                        Desarrollador Apasionado por 
                        la tecnología y aprendizaje 
                        autodidacta, cada día 
                        enfocado en actualizar 
                        conocimientos y mejora 
                        continua.
                        Dispuesto a trabajar en equipo
                        Remoto y aprender de otros, 
                        responsable con manejo de 
                        tiempos fortalezas en 
                        habilidades blandas y 
                        comunicación
                        </p><br />
                          <h2> ESTUDIOS </h2>
                      </div>

                      <ul>
                        <li><ion-icon name="code-slash-outline"></ion-icon><h4>Academlo</h4>
                        <bdo>Fundamentos de programacion, React , Logica, estados , otros</bdo> </li>
                        <li><ion-icon name="code-slash-outline"></ion-icon> <h4>Unir </h4>
                        <bdo>Ingenieria informatica otros.</bdo></li>
                        <li><ion-icon name="code-slash-outline"></ion-icon> <h4>Sena </h4>
                        <bdo>Desarrollo de software.</bdo></li>
                        <li><ion-icon name="code-slash-outline"></ion-icon> <h4>Cursos</h4>
                        <bdo>otros.</bdo></li>
                      </ul>
                  </div>
              </div>
          </article>



        <div className='profileContainer'>
            <div className="card card1">
              <div className="box">
                  <div className="icon bg-[#249eff]">
                    <div className="iconBox">
                    <ion-icon name="logo-react"></ion-icon>
                    </div>
                  </div>
                  <div className="conent">
                    <h3>React</h3>
                    <p> Creación de sitios  dinamicos con react funcionalidades front-end.</p>
                  </div>
              </div>
            </div>

            <div className="card card2">
              <div className="box">
                  <div className="icon bg-[#ff1f6b]">
                    <div className="iconBox">
                    <ion-icon name="logo-github"></ion-icon>
                    </div>
                  </div>
                  <div className="conent">
                  <h3>Github</h3>
                    <p> Manejo de github para  almacenamiento de  proyectos colaboraciones .</p>
    
                  </div>
              </div>
            </div>

            <div className="card card3">
              <div className="box">
                  <div className="icon bg-[#98ff21]">
                    <div className="iconBox   ">
                    <ion-icon name="logo-nodejs"></ion-icon>
                    </div>
                  </div>
                  <div className="conent">
                  <h3>Nodejs</h3>
                    <p> Creacion de servicios , crud,  todo  relacionado con back-end.</p>
     
                  </div>
              </div>
            </div>           
        </div>

         <div className="contador flex gap-5 flex-col">
             <h4>Contador</h4>
              <div className="flex gap-5">
              <button className='w-10 h-10 border border-green-500 rounded-xl' onClick={()=>decrementar(1)} > - </button>
               
                <div className="num text-[50px] text-3xl">{count} </div>
                <button className='w-10 h-10 border border-green-500 rounded-xl' onClick={()=> increment(1)}> + </button>
                
               </div>
         </div>


    <div className='scroll  flex    ' >
      {/*Parte donde ponemos cards y fondo */}
      <div>
          <span className='border border-green-900'>Html</span>
          <span className='border border-green-900'>Css</span>
          <span className='border border-green-900'>Javascript</span>
          <span className='border border-green-900'>React</span>
          <span className='border border-green-900'>Figma</span>
          <span className='border border-green-900'>Photoshop</span>
          <span className='border border-green-900'>Angular</span>
          <span className='border border-white-900'>Html</span>
          <span className='border border-white-900'>Css</span>
          <span className='border border-white-900'>Javascript</span>
          <span className='border border-white-900'>React</span>
          <span className='border border-white-900'>Figma</span>
          <span className='border border-white-900'>Photoshop</span>
          <span className='border border-white-900'>Angular</span>
          <span className='border border-white-900'>Figma</span>
          <span className='border border-white-900'>Photoshop</span>
          <span className='border border-white-900'>Angular</span>
     
      </div>
               
    </div>
    <div className='scroll  flex    ' >
      {/*Parte donde ponemos cards y fondo */}
      <div className='flex gap-1'></div>
          <div className='flex gap-1 '>
            <img className='border border-slate-900 rounded-lg opacity-0'src={m1} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg' src={m2} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m3} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m4} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m5} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m6} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m7} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m1} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m2} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m3} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m4} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m5} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m6} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m7} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m1} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m2} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m3} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m4} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m5} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m6} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m7} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m1} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m2} alt=""  width={"100px"}/>
            <img className='border border-slate-900 rounded-lg' src={m3} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m4} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m5} alt=""  width={"100px"}/>
            <img className='border border-slate-900 rounded-lg' src={m6} alt=""  width={"100px"}/>
            <img  className='border border-slate-900 rounded-lg'src={m7} alt=""  width={"100px"}/>
          </div>
      </div>  <br /><br />   <br /><br />
    
    </>

  )
}
export default Profile;
