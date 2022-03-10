    // █████████████▓▒░░ Imports ░░▒▓█████████████ //

import { useState, useEffect } from 'react'
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from '../data/divisas'
import Error from '../components/Error'

    // █████████████▓▒░░ Styled Components ░░▒▓█████████████ //

const InputSubmit = styled.input`
    background: rgba( 235, 255, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 100%;
    padding: 10px;
    border-radius: 50px ;
    color: #FFFFFF;
    font-family: "Fredoka", sans-serif;
    font-weight: 500;
    font-size: 20px;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
        background: rgba( 255, 255, 255, 0.25 ); 
    }
`

    // █████████████▓▒░░ Component ░░▒▓█████████████ //

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige Una Divisa', monedas);
    const [ criptomoneda, SelectCriptomonedas ] = useSelectMonedas('Elige Una Criptomoneda', criptos);

    useEffect( () => {
        
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map( cripto => {
                const objetoCriptos = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objetoCriptos;
            })

            setCriptos(arrayCriptos);
            
        }

        consultarAPI()
    }, []);

    // ███████▓▒░░ Funciones ░░▒▓███████ //

    const handleSubmit = e => {
        e.preventDefault();

        if([moneda,criptomoneda].includes('')){
            return setError(true);
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

         // ████████████▓▒░░ Render ░░▒▓████████████ //
    return (
        <>
        { error && <Error>Todos los campos son obligatorios</Error> }
        <form onSubmit={ handleSubmit }>
            <SelectMonedas />
            <SelectCriptomonedas />
            <hr/> 
            <InputSubmit
                type='submit'
                value='Cotizar'
            />
        </form>
        </>
    );
};

export default Formulario;
