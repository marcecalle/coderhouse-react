import './App.css'
import ButtonComponent from './components/ButtonComponent'

function App() {
  
  const buttonsInfo = [
    {
      color: 'crimson',
      texto: 'Nosotros'
    },
    {
      color: 'lightGreen',
      texto: 'Productos'
    }
  ]

  return (
    <>
      <h1>Clase 4</h1>
      <section className='button-container'>
        <ButtonComponent texto={buttonsInfo[0].texto} color={buttonsInfo[0].color}/>
        <ButtonComponent texto='Productos'/>
        <ButtonComponent texto='Contacto'/>
      </section>
    </>
  )
}

export default App
