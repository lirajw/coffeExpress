import { ThemeProvider } from 'styled-components'
import {GlobalStyle} from './Styles/global'
import { defaultTheme } from './Styles/Themes/Default'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <ThemeProvider  theme={defaultTheme}>
      <ToastContainer/>
      <GlobalStyle/>
      <BrowserRouter>
        <CartContextProvider>
          <Router/>          
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App