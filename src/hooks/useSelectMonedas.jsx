import { useState } from "react";
import styled from "@emotion/styled";

// █████████████▓▒░░ Styled Components ░░▒▓█████████████ //

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: "Fredoka", sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin: 10px 0;
    text-align: center;
`;

const Select = styled.select`
    width: 100%;
    font-family: "Fredoka", sans-serif;
    font-weight: 300;
    font-size: 18px;
    padding: 10px;
    border-radius: 50px;
    text-align: center;
    appearance:none;
`;

// █████████████▓▒░░ Component ░░▒▓█████████████ //
const useSelectMonedas = (label, opciones) => {
    
    const [state, setState] = useState("");

    const SelectMonedas = () => (
    <>
        <Label>{label}</Label>

        <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Seleccionar</option>
        {opciones.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
                {opcion.nombre}
            </option>
        ))}
        </Select>
    </>
    );

    return [state, SelectMonedas];
};

export default useSelectMonedas;
