import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import './App.css'
import Rodape from "./components/Rodape"

function App() {


  return (
    <div className="app">
      <Navbar />  
      <div className="container">
        <Outlet />
      </div>
      <Rodape />
    </div>
  )
}

export default App
