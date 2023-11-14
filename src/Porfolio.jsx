
import './App.css'

const Porfolio = () => {
  return (
    <>
    <h1><ion-icon name="chatbubble-outline"> </ion-icon> PORFOLIO</h1>  <hr /> 
    <div className="porfolio  ">
         <div className="boxporfolio bg-green-500">
         <a href="https://rickandmorty-five-rouge.vercel.app/"  className='bg-green-500' target="_blank"> <h2><ion-icon name="triangle-outline"></ion-icon>rick and morty </h2></a>
         </div>
         <div className="boxporfolio">
         <a href="https://crud-api-rho.vercel.app/" target="_blank" ><h2><ion-icon name="server-outline"></ion-icon>crud</h2></a> 
         </div>
         <div className="boxporfolio">
         
         <a href="https://clima-smoky-gamma.vercel.app/" target="_blank" ><h2><ion-icon name="sunny-outline"></ion-icon>clima</h2></a>
         </div>
    </div>
    </>
  )
}
export default Porfolio