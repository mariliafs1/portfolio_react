import './Rodape.css'

// imagens
import gitHub from '../assets/git_hub.png'
import linkedin from '../assets/linkedin.png'
import instragram from '../assets/instagram.png'

const Rodape = () => {
  return (
    <footer className="rodape">
        <div>
            <p>© Marília Faria 2024</p>
        </div>
        <div className="rodape__contatos">
            <div className="rodape__contatos__texto">
                <p>E-mail</p>
                <p>mariliafs_@hotmail.com</p>
            </div>
            <div className="rodape__contatos__texto">
                <p>Siga-me</p>
                <div className="rodape__contatos__icons">
                    <a href="https://github.com/mariliafs1" target="_blank"><img src={gitHub} alt="logo do github"/></a>
                    <a href="https://www.linkedin.com/in/marilia-faria-santos-7402a7a7/" target="_blank"><img src={linkedin} alt="logo do github"/></a>
                    <a href="https://www.instagram.com/lyla.luminus/" target="_blank"><img src={instragram} alt="logo do instagram"/></a>
                </div>
            </div>
        </div>
    </footer> 
  )
}

export default Rodape