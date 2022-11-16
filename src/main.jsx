import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Place from './Components/Place/Place'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<App/>}/>
      <Route path ='/place' element={<Place/>}/>
     </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
