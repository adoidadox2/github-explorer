import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title> Explore repositórios no Github </Title>

      <Form>
        <input placeholder="Digite o nome do repositório  " />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/39576148?s=460&u=692510268db550da224efceb80452cd050d923f8&v=4"
            alt="Augusto Vinícius"
          />
          <div>
            <strong>LP1-The-Game</strong>
            <p>Atividade da cadeira Linguagem de Programação 1</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/39576148?s=460&u=692510268db550da224efceb80452cd050d923f8&v=4"
            alt="Augusto Vinícius"
          />
          <div>
            <strong>LP1-The-Game</strong>
            <p>Atividade da cadeira Linguagem de Programação 1</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/39576148?s=460&u=692510268db550da224efceb80452cd050d923f8&v=4"
            alt="Augusto Vinícius"
          />
          <div>
            <strong>LP1-The-Game</strong>
            <p>Atividade da cadeira Linguagem de Programação 1</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
