

import { RouterProvider } from 'react-router-dom'
import './App.css'
import { DarkModeProvider } from './context/darkMode'
import { router } from './utils/routes'


function App() {
  
  return (
    <DarkModeProvider>
     <RouterProvider router={router} />
    </DarkModeProvider>
  )
}

export default App
