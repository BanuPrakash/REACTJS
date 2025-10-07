import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './components/CartContextProvider.tsx'

createRoot(document.getElementById('root')!)
  .render(<BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>)
