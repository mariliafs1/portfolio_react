import './AboutMe.css'
import eu1 from '../assets/eu1.png'
import eu2 from '../assets/eu2.png'
import avatar from '../assets/avatar.png'


const AboutMe = () => {
  return (
  
    <main className='main__container'>
      <h1>Sobre mim</h1>
      <img src={eu1} alt="Desenho de menina sorrindo e fazendo um legal" className="avatarzinho1" />
      <img src={eu2} alt="Desenho de meninina com estrelinha nos olhos, animada" className="avatarzinho2" />
          <section className="container__conteudo">
              <div className="container__conteudo__texto">
                  <h3>Olá tudo bem?</h3>
                  <p>Lorem ipsum dolor sit amet. Et necessitatibus perferendis ut voluptas commodi sed praesentium corporis est atque consequatur. Et dolorem totam et ducimus omnis nam eaque error et veritatis soluta qui fugit facilis et error natus? Sit repellendus optio ut nobis obcaecati et eaque aliquam aut maiores dicta sed tempore expedita. Cum quia quidem qui tenetur aperiam ut reiciendis saepe nam aspernatur aliquid ea beatae cupiditate.
                      Et atque ipsa quo nihil laudantium eum quia distinctio qui quas numquam et optio dolorem in quam dolorum. Quo natus nesciunt sit modi itaque sed dicta exercitationem ad ipsa voluptas sit placeat dolore.
                      Id possimus ratione aut illum perferendis est voluptatem distinctio aut deleniti numquam ut Quis magnam qui architecto consequatur. Ea nemo dolor aut dolores omnis non nobis numquam aut nesciunt suscipit qui quia cupiditate. Et architecto nisi est totam nostrum qui molestiae ipsa ut quaerat delectus id aperiam nulla cum quibusdam animi eum fuga dolorem.Lorem ipsum dolor sit amet. Et necessitatibus perferendis ut voluptas commodi sed praesentium corporis est atque consequatur. Et dolorem totam et ducimus omnis nam eaque error et veritatis soluta qui fugit facilis et error natus? Sit repellendus optio ut nobis obcaecati et eaque aliquam aut maiores dicta sed tempore expedita. Cum quia quidem qui tenetur aperiam ut reiciendis saepe nam aspernatur aliquid ea beatae cupiditate.
                  </p>
              </div>
              <img src={avatar} alt="Foto de Marília sorrindo e piscando um olho" />
          </section>
          <section className="section__2">
            <div>
                <div className="container__conteudo__2">
                    <div className="container__conteudo__texto">
                        <h3>Educação</h3>
                        <p>Et veritatis cupiditate aut voluptatem rerum ut obcaecati deleniti non iure repellendus non explicabo laboriosam! Aut modi architecto et quis facilis sit aperiam doloremque est sapiente incidunt ea itaque ipsa est laboriosam nostrum. Et excepturi pariatur et magni voluptas qui accusantium quia.</p>
                    </div>
                </div>
                <div className="container__conteudo__2">
                    <div className="container__conteudo__texto">
                        <h3>Educação</h3>
                        <p>Et veritatis cup Aut modi archicidunt ea ias qui accusantium quia.</p>
                    </div>
                </div>
            </div>
            <div className="container__conteudo__2">
                <div className="container__conteudo__texto">
                    <h3>Educação</h3>
                    <p>Et veritatis cupiditate aut voluptatem rerum ut obcaecati deleniti non iure repellendus non explicabo laboriosam! Aut modi architecto et quis facilis sit aperiam doloremque est sapiente incidunt ea itaque ipsa est laboriosam nostrum. Et excepturi pariatur et magni voluptas qui accusantium quia.</p>
                </div>
            </div>
        </section>
        <section>
            <div className="container__conteudo__2">
                <div className="container__conteudo__texto">
                    <h3>Educação</h3>
                    <p>Et veritatis cupiditate aut voluptatem rerum ut obcaecati deleniti non iure repellendus non explicabo laboriosam! Aut modi architecto et quis facilis sit aperiam doloremque est sapiente incidunt ea itaque ipsa est laboriosam nostrum. Et excepturi pariatur et magni voluptas qui accusantium quia.</p>
                </div>
            </div>
        </section>        
    </main>
  )
}

export default AboutMe