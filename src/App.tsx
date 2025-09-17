import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import { AvondalienTheme } from './designSystem'
import { Navigation } from './navigation'
import { RouteConfig } from './routeConfig'
import { Footer } from './footer'

function App() {
  
  return (
    <>
      <ThemeProvider theme={AvondalienTheme}>
          <Navigation/>
          <RouteConfig />
          <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
