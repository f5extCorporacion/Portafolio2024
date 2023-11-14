 
 import'./App.css'
 
import { CirclesWithBar } from 'react-loader-spinner'
 const Spineer = () => {
   return (
     <div className=" flex justify-center content-center  p-52 ">
         <div className="spinner">
         <CirclesWithBar
            height="200"
            width="200"
            color="#327070"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
            />
            
         </div> 
        </div>
   )
 }
 export default Spineer