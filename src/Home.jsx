
import SILUETA_FRANK_FULL_STACK from'./assets/SILUETA_FRANK_FULL_STACK.png';
import './App.css'
const Home = () => {

  return(
    <>
    <div className="mascara flex flex-wrap justify-center items-center p-2  rounded-2xl  ">
      <div className="derecho">
         <figure className='w-60 p-10  '>
          <img  src={SILUETA_FRANK_FULL_STACK} alt=""  />
         </figure>
      </div>

      <div className="izquierdo flex flex-col    text-white border border-white p-2 rounded-lg">
        <bdo className='text-blue-700 text-4xl  p-2  sm:text-2xl'>Frank Valverde</bdo>
        <dfn className=' text-white '>Fullstack Developer</dfn>
      </div>
    </div>
    </>
  )
}
/*1 junio*/
export default Home;
