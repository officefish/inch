import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { IApplication } from '../App'
const theme = createTheme()

interface IProvider {
    children:IApplication
}

const ComplexProvider : React.FunctionComponent<IProvider> = ({children}) => {
    return <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
  </React.StrictMode>
}
export default ComplexProvider