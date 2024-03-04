import './ButtonComponent.css'
// eslint-disable-next-line react/prop-types
export default function ButtonComponent({texto, color}){
   
   const misEstilos = {
      backgroundColor: color,
   }

   return(
      <>
         <button className='button-menu' style={misEstilos} >{texto}</button>
      </>
   )
}