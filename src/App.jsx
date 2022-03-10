import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ImagenCriptos from './img/imagen-criptos.png'
import Formulario from "./components/Formulario";
import Loader from "./components/Loader";
import Resultado from "./components/Resultado";

// █████████████▓▒░░ Styled Components ░░▒▓█████████████ //

const Contendor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
  width: 90%;
  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
`

const Heading = styled.h1`
  font-family: "Fredoka", sans-serif;
  color: #FFFFFF; 
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 40px;
`

const Imagen = styled.img`
  max-width: 400px;
  width: 90%;
  margin: 20px auto 0 auto;
  display: block;
  filter: drop-shadow(0 30px 15px rgba(0, 0, 0, 0.70));
  @media (min-width: 950px) {
    margin: 80px auto 0 auto;
  }
`

// █████████████▓▒░░ Component ░░▒▓█████████████ //
function App() {

  const [monedas, setMonedas] = useState({});
  const [resultadoCotizacion, setResultadoCotizacion] = useState({});
  const [loader, setLoader] = useState(false);


  useEffect( () => {
    if(Object.keys(monedas).length > 0){

      const cotizarCriptomoneda = async () => {
        setLoader(true);
        const { moneda, criptomoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultadoCotizacion(resultado.DISPLAY[criptomoneda][moneda])
        setLoader(false)
      }
    
      cotizarCriptomoneda()

    }
  }, [monedas])

  // ████████████▓▒░░ Render ░░▒▓████████████ //
  return (
    <>
      <Contendor>
      <Imagen 
        src={ImagenCriptos}
        alt="Imagen Critomonedas"
      />
      <div>
        <Heading>Cotizador de Criptomonedas</Heading>
        <hr/>
        <Formulario
          setMonedas={setMonedas}
        />
      </div>
    </Contendor>
      { loader ? <Loader /> : resultadoCotizacion.PRICE && <Resultado resultadoCotizacion={resultadoCotizacion} /> }
    </>
    
  );
}

export default App;
