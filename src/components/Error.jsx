import React from 'react'
import styled from '@emotion/styled'

const ErrorMsg = styled.div`
    background-color: red;
    color: white;
    padding: 10px;
    font-size: 18px;
    font-family: "Fredoka", sans-serif;
    font-weight: 500;
    text-align: center ;
    border-radius: 50px;
`

const Error = ({children}) => {

    return (
        <ErrorMsg>
            {children}
        </ErrorMsg>
    )
}

export default Error