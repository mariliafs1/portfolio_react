import './Portfolio.css'
import toDo from '../assets/todo_list.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <section className='portfolio__texto'>
        <h1>Portfólio</h1>
        <p>Alguns trabalhos desenvolvidos por mim na minha jornada</p>
      </section>  
      <section>
        <ul className='portfolio__lista'>
          <li className='portfolio__container'>
            <div className='portfolio__projeto'>            
              <h2>To Do List</h2>
              <p>O projeto cria uma lista de afazeres que permite ao usuário adicionar novas tarefas,
                deletar tarefas existentes, editá-las ou marcar como feitas.<br></br><br></br>
                Conta também com um campo de buscas, que encontra tarefas já registradas e com um filtro
                que permite filtrar entre <i>todas as tarefas</i>, <i>tarefas feitas</i> ou <i>tarefas à fazer</i>.<br></br>  
              </p> 
              <div className='portfolio__linguagens'>
                <p><strong>Linguagens</strong></p>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <a href='https://mariliafs1.github.io/toDo_list/' target='_blank' className='projeto__btn'>Conheça</a>
            </div>
            <img src={toDo} alt='' />
          </li>
          <li className='portfolio__container'>
            <div className='portfolio__projeto'>
                <h2>Título do projeto</h2>
                <p>breve descrição idhwi dnwodn oifwoicw
                    doiqdiofhowfhfwoiej
                  foiwfipfj
                </p>
            <a href='https://mariliafs1.github.io/toDo_list/' target='_blank'>botao</a>
            </div>
            <img src='' alt='' />
          </li>

        </ul>
      </section>
    </div>
  )
}

export default Portfolio