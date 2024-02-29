import {Link} from "react-router-dom"
import "./Navbar.css"
import gatinho1 from "../assets/gatinho1.png"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
            <img src={gatinho1} alt="Logo de Gatinho" />
            <div className="navbar__itens__nome">
                <h2>Marília Faria</h2>
                <p>Full Stack Dev</p>
            </div>

        </div>
        <ul className="navbar__itens">
            <li>
                <Link to={'/portfolio_react'}>Sobre Mim</Link>
            </li>
            <li>
                <Link to={'/portfolio'}>Portfólio</Link>
            </li>
            <li>
                <Link to={'/contato'}>Contato</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar