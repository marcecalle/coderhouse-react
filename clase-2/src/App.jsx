import './App.css'

function App() {

  const estilosImg = {
    width: '350px',
    border: '3px solid white',
  };
  const estilosTituloPrincipal = {
    marginBottom: '5px'
  }
  const estilosTituloSecundario = {
    marginTop: '5px'
  }

  return (
    <>
      <h1 style={estilosTituloPrincipal}>CLASE 2</h1>
      <h3 style={estilosTituloSecundario} >Proyecto React 0.1</h3>
      <img style={estilosImg} src="https://elcomercio.pe/resizer/dQTfmB6zr99dI9z0D9CpmwzLBAo=/1200x900/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MSYW7AOXHRD3FBUH4HFP7SS2F4.jpg" alt="Deamon slayer" />
    </>
  )
}

export default App
