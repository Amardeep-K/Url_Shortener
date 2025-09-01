import { useState } from 'react'
 import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Authentication from './pages/Authentication';
import UrlShortener from './pages/UrlShortener';
import Navbar from './components/Header/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
   

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={< Authentication/>} />
  <Route path="/url-shortener" element={< UrlShortener/>} />

</Routes>

    </>
  )
}

export default App
