

const Contacto = () => {
  return (
    <>
    <h1><ion-icon name="battery-charging-outline"> </ion-icon> CONTACTO</h1>  <hr />
     <div className="contacto flex flex-wrap justify-center items-center p-2 gap-10  ">
    

      <div className="datos bg-slate-400 rounded-2xl opacity-[0.9] p-5">
      <div className="newsdata bg-slate-400 rounded-2xl opacity-[0.9] p-5">
            <h2><ion-icon name="bookmarks-outline"></ion-icon> Info Datos.</h2>
          </div>
        <address className=" justify-start items-start">
          <p className="text-2xl text-slate-900"> <ion-icon name="business-outline"></ion-icon> Cali colombia</p> 
         <p className="text-xl text-slate-900"> <ion-icon name="at-outline"></ion-icon> Email:<br/> 1107050440f@gmail.com.</p>  
         <ion-icon name="call-outline"></ion-icon> Whatsapp: 318 379 76 86
        </address>
      </div>

      <div className="redes  bg-green-400 rounded-2xl opacity-[0.9] p-5">
         <div className="newsdata bg-white rounded-2xl opacity-[0.9] p-5">
            <h2>Redes</h2>
          </div>
           <div className=" flex gap-3 text-center ">
         <a href="https://www.linkedin.com/in/frank-valverde-650161209/"  target="_blank"><ion-icon name="logo-linkedin"  ></ion-icon></a> 
         <a href="https://www.instagram.com/franlimvalverde/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a> 
          
          </div>

          </div>   
     </div>
    </>
  )
}
export default Contacto