import React from 'react';
import pamela from '../images/pamela.jpeg';

class Home extends React.Component {
  render() {
    return (
      <div>
        Welcome to my page!
        <section>
          <img alt="Pamela Sales" src={ pamela } width="130px" />
          <p className="description">
            Olá, meu nome é <strong>Pamela Anderson Sales</strong> eu tenho 23 anos, sou Brasileira e atualmente moro no interior de SP.
            Apaixonada por física e números, eu trilhei o caminho da Engenharia Civil mas recentemente percebi que minha paixão se encontra nos códigos.
            Depois de dois anos morando no exterior conegui desenvolver meu autoconhecimento e iniciei minha transição de carreira.
            Atualmente estudo <em>Desenvolvimento de Softwares na Trybe</em> e a cada dia estou mais encantada pelo caminho que escolhi.
          </p>
          <h2 id="habilidades">Habilidades</h2>
          <ul>
            <li>Fluente em inglês.</li>
            <li>HTML, CSS e JavaScript.</li>
            <li>Git e GitHub.</li>
            <li>Flexibilidade e ânimo em iniciar nos desafios.</li>
            <li data-testid="strongText">React e React Testing Library.</li>
          </ul>
          <hr />
        </section>
      </div>
    );
  };
}

export default Home;
