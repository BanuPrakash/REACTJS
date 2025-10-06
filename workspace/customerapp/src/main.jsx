import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// returned JSX from App.jsx is given to React.createElement() --> JS Object
// JS Object is given to react-dom renderer to create UI
createRoot(document.getElementById('root')).render(<App />)
