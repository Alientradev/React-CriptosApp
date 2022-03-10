import styled from "@emotion/styled"

    // █████████████▓▒░░ Styled Components ░░▒▓█████████████ //

    const ContendorResultado = styled.div`
        max-width: 900px;
        margin: 0 auto;
        padding: 10px;
        width: 90%;
        background: rgba( 0, 0, 0, 0.50 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    `

    const ContendorSecundario = styled.div`
        width: 100%;
        @media (min-width: 950px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }
    `

    const TextoPrecio = styled.p`
        text-align: center;
        font-family: "Fredoka", sans-serif;
        font-weight: 700;
        color: white;
        font-size: 35px;
    `

    const Texto = styled.p`
        text-align: center;
        font-family: "Fredoka", sans-serif;
        font-weight: 500;
        color: white;
        font-size: 20px;
    `

    const Precio = styled.div`
        width: 100%;
        @media (min-width: 950px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        }
    `

    const Valores = styled.span`
        font-family: "Fredoka", sans-serif;
        font-weight: 700;
        color: #FD00CB;
    `

    const ImagenCripto = styled.img`
        max-width: 130px;
        margin: 0 30%;
        margin-top: 10px;
        @media (min-width: 950px) {
            margin: 0 auto;
        }
    `

const Resultado = ({resultadoCotizacion}) => {

    const { PRICE, HIGHDAY, LOWDAY, VOLUMEDAY, CHANGEPCT24HOUR, IMAGEURL } = resultadoCotizacion;

    return (
        <ContendorResultado>
            <Precio>
                <TextoPrecio>Precio Actual: <Valores>{PRICE}</Valores></TextoPrecio>
                <ImagenCripto src={`https://cryptocompare.com/${IMAGEURL}`} alt="Logo Criptomoneda"/>
            </Precio>
            <ContendorSecundario>
                <div>
                    <Texto>Precio más alto del día: <Valores>{HIGHDAY}</Valores></Texto>
                    <Texto>Precio más bajo del día: <Valores>{LOWDAY}</Valores></Texto>
                </div>
                <div>
                    <Texto>Volumen del día: <Valores>{VOLUMEDAY}</Valores></Texto>
                    <Texto>Variación últimas 24 horas: <Valores>{CHANGEPCT24HOUR}%</Valores></Texto>
                </div>
            </ContendorSecundario>
        </ContendorResultado>
    )
}

export default Resultado