import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter ek React Router component hai jo web applications me client-side routing enable karta hai.
     * Ye HTML5 History API ka use karke UI ko URL ke sath sync rakhta hai, jisse bina page reload kiye 
     * navigation ho sake. Ye sabhi child components ko routing context provide karta hai.
     */}
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </StrictMode>
)
